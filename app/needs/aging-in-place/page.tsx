import Link from 'next/link'

export const metadata = {
  title: 'Aging in Place — Fam Damily Cares',
}

export default function AgingInPlacePage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-14">
      <Link href="/needs" className="text-xs text-stone-400 hover:text-teal-600 mb-6 inline-block">
        ← Family Needs
      </Link>
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Aging in Place</h1>
      <p className="text-stone-400 text-sm mb-10">Supporting independence at home</p>

      {/* ─────────────────────────────────────────────────────────────
          PLACEHOLDER — Replace this content with your own learnings.
          Suggested topics to cover are outlined below.
      ───────────────────────────────────────────────────────────── */}

      <div className="prose prose-stone prose-lg max-w-none">
        <p>
          [Introduction: What does "aging in place" really mean, and why do so many older adults prefer it? Set the context for what this section covers.]
        </p>

        <h2>What it actually requires</h2>
        <p>
          [The real-world checklist: home modifications, transportation, social connection, medical follow-up, medication management, nutrition. Be specific about what surprised you.]
        </p>

        <h2>Supporting from a distance</h2>
        <p>
          [What it's like to coordinate care when you're not local — the communication challenges, the tools that help, the gaps that are hard to fill remotely.]
        </p>

        <h2>When aging in place stops working</h2>
        <p>
          [Signs to watch for, how to have the conversation, and how to think about transitions without framing it as failure.]
        </p>

        <h2>Resources we've found useful</h2>
        <p>[Links to organizations, local resources, or articles that have been genuinely helpful.]</p>
      </div>
    </div>
  )
}
