import Link from 'next/link'
import type { WritingMeta } from '@/lib/writings'

export default function WritingCard({ writing }: { writing: WritingMeta }) {
  const dateLabel = new Date(writing.date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <Link
      href={`/writings/${writing.slug}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 group"
    >
      <span className="text-xs text-stone-400 block mb-2">{dateLabel}</span>
      <h2 className="font-semibold text-stone-800 text-base leading-snug mb-2 group-hover:text-teal-700 transition-colors">
        {writing.title}
      </h2>
      <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
        {writing.summary}
      </p>
      <span className="text-xs font-medium text-teal-600 mt-3 inline-block group-hover:underline">
        Read post →
      </span>
    </Link>
  )
}
