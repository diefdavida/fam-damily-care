import DraftFlag from '@/components/DraftFlag'

export const metadata = {
  title: 'Writings — Fam Damily Cares',
}

export default function WritingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14">
      <DraftFlag />
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Writings</h1>
      <p className="text-stone-500 text-base leading-relaxed mb-10 max-w-xl">
        This is the home for future blog posts, essays, and longer reflections that are not reviews. New writing will appear here as it is developed.
      </p>
      <div className="space-y-4">
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <p className="text-stone-500 text-sm">No posts yet — this space is being prepared for future stories and articles.</p>
        </div>
      </div>
    </div>
  )
}
