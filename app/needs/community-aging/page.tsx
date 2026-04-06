import Link from 'next/link'

export const metadata = {
  title: 'Community-Based Aging — Fam Damily Cares',
}

export default function CommunityAgingPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-14">
      <Link href="/needs" className="text-xs text-stone-400 hover:text-teal-600 mb-6 inline-block">
        ← Family Needs
      </Link>
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Community-Based Aging</h1>
      <p className="text-stone-400 text-sm mb-10">Understanding supported living models</p>

      {/* ─────────────────────────────────────────────────────────────
          PLACEHOLDER — Replace this content with your own learnings.
          Suggested topics to cover are outlined below.
      ───────────────────────────────────────────────────────────── */}

      <div className="prose prose-stone prose-lg max-w-none">
        <p>
          [Introduction: The spectrum of supported living — it's not just nursing homes. Frame this as a range of options, each with trade-offs, not a hierarchy.]
        </p>

        <h2>The spectrum of options</h2>
        <p>
          [Independent living communities, assisted living, memory care, continuing care retirement communities (CCRCs), adult day programs. What distinguishes each level of support.]
        </p>

        <h2>How to evaluate a facility</h2>
        <p>
          [What to look for in a visit, questions to ask staff, red flags, and how to read state inspection reports. Be honest about how hard it is to evaluate these on a brief tour.]
        </p>

        <h2>The cost reality</h2>
        <p>
          [What things actually cost, what Medicare/Medicaid covers (and doesn't), long-term care insurance considerations. No financial advice — just the honest picture.]
        </p>

        <h2>Making the transition</h2>
        <p>
          [The emotional side of moving a family member into a community setting — for them and for you. What the adjustment period looks like.]
        </p>
      </div>
    </div>
  )
}
