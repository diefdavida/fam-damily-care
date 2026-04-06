import Link from 'next/link'
import DraftFlag from '@/components/DraftFlag'

export const metadata = {
  title: 'Family Needs — Fam Damily Cares',
}

const MODELS = [
  {
    href: '/needs/aging-in-place',
    icon: '🏡',
    title: 'Aging in Place',
    description:
      'Supporting a family member who wants to stay in their own home — what that actually requires, what changes over time, and what families from afar need to arrange.',
  },
  {
    href: '/needs/community-aging',
    icon: '🏘️',
    title: 'Community-Based Aging',
    description:
      'Assisted living, memory care, retirement communities, and other supported models — understanding the spectrum and how to evaluate what fits.',
  },
]

export default function NeedsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14">
      <DraftFlag />
      <h1 className="text-3xl font-bold text-stone-800 mb-2">The Needs of Families</h1>
      <p className="text-stone-500 text-base leading-relaxed mb-10 max-w-xl">
        Every family's situation is different — but the questions are often the same. Explore the two broad models below and what each one demands.
      </p>
      <div className="grid sm:grid-cols-2 gap-5">
        {MODELS.map(m => (
          <Link
            key={m.href}
            href={m.href}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 group"
          >
            <span className="text-3xl mb-4 block">{m.icon}</span>
            <h2 className="font-semibold text-stone-800 text-lg group-hover:text-teal-700 transition-colors mb-2">
              {m.title}
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed">{m.description}</p>
            <span className="text-xs font-medium text-teal-600 mt-4 inline-block group-hover:underline">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
