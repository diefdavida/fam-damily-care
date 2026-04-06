import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type ReviewMeta = {
  slug: string
  title: string
  date: string
  category: string
  rating: number
  summary: string
}

const REVIEWS_DIR = path.join(process.cwd(), 'content', 'reviews')

export function getAllReviews(): ReviewMeta[] {
  if (!fs.existsSync(REVIEWS_DIR)) return []
  const files = fs.readdirSync(REVIEWS_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(REVIEWS_DIR, file), 'utf-8')
      const { data } = matter(raw)
      return { slug, ...data } as ReviewMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getReviewBySlug(slug: string): { meta: ReviewMeta; content: string } {
  const file = path.join(REVIEWS_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)
  return { meta: { slug, ...data } as ReviewMeta, content }
}

export function getAllReviewSlugs(): string[] {
  if (!fs.existsSync(REVIEWS_DIR)) return []
  return fs.readdirSync(REVIEWS_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''))
}
