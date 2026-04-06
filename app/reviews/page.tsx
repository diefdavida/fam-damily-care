import { getAllReviews } from '@/lib/reviews'
import ReviewCard from '@/components/ReviewCard'

export const metadata = {
  title: 'Reviews — Fam Damily Cares',
}

export default function ReviewsPage() {
  const reviews = getAllReviews()

  return (
    <div className="max-w-3xl mx-auto px-5 py-14">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Reviews</h1>
      <p className="text-stone-500 text-base leading-relaxed mb-10 max-w-xl">
        Honest, practical evaluations of products and services — written through the lens of a family caregiver, not a tech reviewer.
      </p>

      {reviews.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <p className="text-stone-400 text-sm">No reviews yet — check back soon.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {reviews.map(review => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      )}
    </div>
  )
}
