import Parser from 'rss-parser'
import sanitizeHtml from 'sanitize-html'

export type WritingMeta = {
  slug: string
  title: string
  date: string
  summary: string
  substackUrl: string
}

export type Writing = WritingMeta & {
  contentHtml: string
}

type SubstackItem = {
  title: string
  link: string
  pubDate: string
  'content:encoded': string
  contentSnippet: string
}

const parser = new Parser<object, SubstackItem>({
  customFields: {
    item: [['content:encoded', 'content:encoded']],
  },
})

const ALLOWED_TAGS = [
  'p', 'br', 'hr',
  'h2', 'h3', 'h4',
  'strong', 'em', 'u', 's',
  'ul', 'ol', 'li',
  'blockquote',
  'a',
  'img',
  'figure', 'figcaption',
]

const ALLOWED_ATTRS: sanitizeHtml.IOptions['allowedAttributes'] = {
  a: ['href', 'target', 'rel'],
  img: ['src', 'alt', 'width', 'height'],
  '*': ['class'],
}

function sanitize(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRS,
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      }),
    },
  })
}

function slugFromUrl(url: string): string {
  try {
    const { pathname } = new URL(url)
    const parts = pathname.replace(/\/$/, '').split('/')
    return parts[parts.length - 1]
  } catch {
    return url.replace(/[^a-z0-9]+/gi, '-').toLowerCase().slice(0, 80)
  }
}

// Fetched once per build (static export — no runtime requests)
// TODO: Substack RSS returns only 25 most recent posts by default
let _cache: Writing[] | null = null

async function fetchWritings(): Promise<Writing[]> {
  if (_cache) return _cache

  const feedUrl = process.env.SUBSTACK_FEED_URL
  if (!feedUrl) {
    console.warn('[writings] SUBSTACK_FEED_URL not set — writings will be empty')
    return []
  }

  try {
    const feed = await parser.parseURL(feedUrl)
    const writings: Writing[] = feed.items.map(item => {
      const slug = slugFromUrl(item.link ?? '')
      const contentHtml = sanitize(item['content:encoded'] ?? '')
      const date = new Date(item.pubDate ?? '').toISOString().split('T')[0]
      return {
        slug,
        title: item.title ?? 'Untitled',
        date,
        summary: item.contentSnippet?.slice(0, 200) ?? '',
        substackUrl: item.link ?? feedUrl,
        contentHtml,
      }
    })
    writings.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    _cache = writings
    return writings
  } catch (err) {
    console.error('[writings] RSS fetch failed:', err)
    return []
  }
}

export async function getAllWritings(): Promise<WritingMeta[]> {
  const writings = await fetchWritings()
  return writings.map(({ contentHtml: _, ...meta }) => meta)
}

export async function getAllWritingSlugs(): Promise<string[]> {
  const writings = await fetchWritings()
  return writings.map(w => w.slug)
}

export async function getWritingBySlug(slug: string): Promise<Writing | null> {
  const writings = await fetchWritings()
  return writings.find(w => w.slug === slug) ?? null
}
