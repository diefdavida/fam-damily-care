import { getAllWritings } from '@/lib/writings'
import WritingCard from '@/components/WritingCard'

export const metadata = {
  title: 'Writings — Fam Damily Cares',
}

export default async function WritingsPage() {
  const writings = await getAllWritings()

  return (
    <div className="max-w-3xl mx-auto px-5 py-14">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Writings</h1>
      <p className="text-stone-500 text-base leading-relaxed mb-10 max-w-xl">
        Essays, reflections, and longer stories from the caregiving journey.
      </p>

      {writings.length === 0 ? (
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <p className="text-stone-500 text-sm">No posts yet — check back soon.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {writings.map(writing => (
            <WritingCard key={writing.slug} writing={writing} />
          ))}
        </div>
      )}

      <div className="mt-14 rounded-2xl border border-teal-100 bg-teal-50 px-7 py-8 text-center">
        <p className="text-sm font-semibold text-teal-800 mb-1">Get new posts by email</p>
        <p className="text-xs text-teal-600 mb-4">Subscribe on Substack — free, no spam.</p>
        <a
          href={process.env.NEXT_PUBLIC_SUBSTACK_URL ?? 'https://famdamilycares.substack.com'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-teal-800 transition-colors"
        >
          Subscribe on Substack
        </a>
      </div>
    </div>
  )
}
