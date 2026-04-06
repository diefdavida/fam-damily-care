import { getAllReviewSlugs, getReviewBySlug } from '@/lib/reviews'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllReviewSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const { meta } = getReviewBySlug(slug)
    return { title: `${meta.title} — Fam Damily Cares` }
  } catch {
    return { title: 'Review — Fam Damily Cares' }
  }
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} className={`text-xl ${n <= rating ? 'text-amber-400' : 'text-stone-200'}`}>★</span>
      ))}
    </span>
  )
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let meta, content
  try {
    ;({ meta, content } = getReviewBySlug(slug))
  } catch {
    notFound()
  }

  const dateLabel = new Date(meta!.date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className="max-w-2xl mx-auto px-5 py-14">
      <Link href="/reviews" className="text-xs text-stone-400 hover:text-teal-600 mb-6 inline-block">
        ← All reviews
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
            {meta!.category}
          </span>
          <span className="text-xs text-stone-400">{dateLabel}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-3 leading-tight">
          {meta!.title}
        </h1>
        <Stars rating={meta!.rating} />
        <p className="text-stone-500 text-base leading-relaxed mt-3 italic">{meta!.summary}</p>
      </div>

      {/* Body */}
      <article className="prose prose-stone prose-lg max-w-none">
        <MDXRemote source={content!} />
      </article>

      {/* Back link */}
      <div className="mt-12 pt-6 border-t border-stone-200">
        <Link href="/reviews" className="text-sm text-teal-600 hover:underline font-medium">
          ← Back to all reviews
        </Link>
      </div>
    </div>
  )
}
