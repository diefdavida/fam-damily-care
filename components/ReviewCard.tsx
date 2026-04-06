import Link from 'next/link'
import type { ReviewMeta } from '@/lib/reviews'

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} className={n <= rating ? 'text-amber-400' : 'text-stone-300'}>★</span>
      ))}
    </span>
  )
}

export default function ReviewCard({ review }: { review: ReviewMeta }) {
  const dateLabel = new Date(review.date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <Link
      href={`/reviews/${review.slug}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 group"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className="text-xs font-medium bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
          {review.category}
        </span>
        <span className="text-xs text-stone-400 flex-shrink-0">{dateLabel}</span>
      </div>
      <h2 className="font-semibold text-stone-800 text-base leading-snug mb-1 group-hover:text-teal-700 transition-colors">
        {review.title}
      </h2>
      <Stars rating={review.rating} />
      <p className="text-sm text-stone-500 mt-2 leading-relaxed line-clamp-3">
        {review.summary}
      </p>
      <span className="text-xs font-medium text-teal-600 mt-3 inline-block group-hover:underline">
        Read review →
      </span>
    </Link>
  )
}
