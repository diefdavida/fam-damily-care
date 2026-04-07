import Link from 'next/link'

// ─────────────────────────────────────────────────────────────
// HERO IMAGE — To add your hero photo:
//   1. Save the image to /public/images/hero.jpg  (or .png, .webp)
//   2. Change HERO_IMAGE below to '/images/hero.jpg'
//   3. Save the file — background appears immediately on next reload
// ─────────────────────────────────────────────────────────────
const HERO_IMAGE = '/images/hero.png'

const SECTIONS = [
  {
    href: '/our-story',
    icon: '💙',
    title: 'Our Story',
    description: 'How we came to this work — and why we think talking openly about family aging matters.',
  },
  {
    href: '/needs',
    icon: '🏡',
    title: 'Family Needs',
    description: 'Understanding what aging in place and community-based models actually require day to day.',
  },
  {
    href: '/tech-guide',
    icon: '🔍',
    title: 'Tech Discovery Guide',
    description: 'A curated map of technology categories worth exploring — organized by the problem they solve.',
  },
  {
    href: '/reviews',
    icon: '⭐',
    title: 'Reviews',
    description: 'Honest, practical evaluations of products and services through a caregiver lens.',
  },
]

export default function HomePage() {
  const heroStyle = HERO_IMAGE
    ? { backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {}

  return (
    <div>
      {/* Hero — image tag ensures full image shows with no cropping */}
      {/*
        IMAGE TIPS:
        • To swap the image: save new file to /public/images/hero.png and reload
        • To adjust text readability, change the overlay div opacity:
            bg-black/30  — lighter (more image visible)
            bg-black/50  — current (balanced)
            bg-black/65  — darker (text very sharp)
      */}
      <section className="relative w-full">
        {HERO_IMAGE ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={HERO_IMAGE}
            alt=""
            className="w-full block object-cover"
            style={{
              height: 'clamp(300px, 50vh, 500px)',
              backgroundColor: '#3a2008'
            }}
          />
        ) : (
          <div className="w-full min-h-[36vh] bg-teal-800" />
        )}

        {/* Dark overlay + centered text */}
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-2 text-teal-300 drop-shadow-lg">
              Fam Damily Cares
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-5 font-light leading-snug">
              Explorations in Supporting Family Aging from Afar
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/our-story"
                className="bg-white text-teal-700 font-semibold px-7 py-3 rounded-full text-sm hover:bg-teal-50 transition-colors shadow"
              >
                Read Our Story
              </Link>
              <Link
                href="/reviews"
                className="border-2 border-white text-white font-semibold px-7 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                Browse Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission quote */}
      <section className="py-14 px-6 bg-stone-50 border-b border-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-500 text-lg leading-relaxed italic max-w-2xl mx-auto">
            "We didn't know what we didn't know. This site is what we wish had existed when we started — practical, honest, and free of judgment for wherever you are in the journey."
          </p>
        </div>
      </section>

      {/* Section cards */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-stone-700 mb-8 text-center">Explore the site</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SECTIONS.map(s => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 group"
              >
                <span className="text-2xl mb-4 block">{s.icon}</span>
                <h3 className="font-semibold text-stone-800 group-hover:text-teal-700 transition-colors mb-2 text-base">
                  {s.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
