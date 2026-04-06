import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-100 py-10 px-5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <p className="font-semibold text-teal-700 text-sm">Fam Damily Cares</p>
          <p className="text-xs text-stone-400 mt-1 max-w-xs">
            A personal exploration of family caregiving — shared without judgment, with the hope it helps someone else find their footing.
          </p>
        </div>
        <nav className="flex flex-col sm:flex-row gap-3 text-xs text-stone-500">
          <Link href="/our-story"  className="hover:text-teal-700 transition-colors">Our Story</Link>
          <Link href="/needs"      className="hover:text-teal-700 transition-colors">Family Needs</Link>
          <Link href="/tech-guide" className="hover:text-teal-700 transition-colors">Tech Guide</Link>
          <Link href="/reviews"    className="hover:text-teal-700 transition-colors">Reviews</Link>
        </nav>
      </div>
      <p className="text-center text-xs text-stone-400 mt-6">
        © {new Date().getFullYear()} Fam Damily Cares. Personal views only.
      </p>
    </footer>
  )
}
