import { getAllWritingSlugs, getWritingBySlug } from '@/lib/writings'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getAllWritingSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const writing = await getWritingBySlug(slug)
  if (!writing) return { title: 'Writing — Fam Damily Cares' }
  return { title: `${writing.title} — Fam Damily Cares` }
}

export default async function WritingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const writing = await getWritingBySlug(slug)
  if (!writing) notFound()

  const dateLabel = new Date(writing.date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const substackRoot = writing.substackUrl.split('/p/')[0]

  return (
    <div className="max-w-2xl mx-auto px-5 py-14">
      <Link href="/writings" className="text-xs text-stone-400 hover:text-teal-600 mb-6 inline-block">
        ← All writings
      </Link>

      <div className="mb-8">
        <span className="text-xs text-stone-400 block mb-3">{dateLabel}</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-3 leading-tight">
          {writing.title}
        </h1>
        <p className="text-stone-500 text-base leading-relaxed italic">{writing.summary}</p>
      </div>

      <article
        className="prose prose-stone prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: writing.contentHtml }}
      />

      <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link href="/writings" className="text-sm text-teal-600 hover:underline font-medium">
          ← Back to all writings
        </Link>
        <a
          href={writing.substackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-700 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-teal-800 transition-colors"
        >
          Read on Substack ↗
        </a>
      </div>

      <div className="mt-10 rounded-2xl border border-teal-100 bg-teal-50 px-7 py-8 text-center">
        <p className="text-sm font-semibold text-teal-800 mb-1">Enjoyed this post?</p>
        <p className="text-xs text-teal-600 mb-4">Subscribe on Substack for new posts in your inbox.</p>
        <a
          href={substackRoot}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-teal-800 transition-colors"
        >
          Subscribe free
        </a>
      </div>
    </div>
  )
}
