'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const LINKS = [
  { href: '/our-story',  label: 'Our Story' },
  { href: '/writings',   label: 'Writings' },
  { href: '/reviews',    label: 'Reviews' },
  { href: '/tech-guide', label: 'Tech Guide' },
  { href: '/needs',      label: 'Family Needs' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-teal-700">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-bold text-white text-base leading-tight tracking-wide">Fam Damily Cares</span>
          <span className="text-xs text-teal-200 leading-tight hidden sm:block">Explorations in Supporting Family Aging</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith(link.href)
                  ? 'text-white border-b-2 border-white pb-0.5'
                  : 'text-teal-100 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-teal-100 hover:bg-teal-600"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-teal-600 bg-teal-700 px-6 py-4 space-y-1">
          {LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium rounded-md px-3 transition-colors ${
                pathname.startsWith(link.href)
                  ? 'bg-teal-600 text-white'
                  : 'text-teal-100 hover:bg-teal-600 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
