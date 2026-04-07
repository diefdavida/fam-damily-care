import DraftFlag from '@/components/DraftFlag'

export const metadata = {
  title: 'Technology Discovery Guide — Fam Damily Cares',
}

const CATEGORIES = [
  {
    icon: '📡',
    title: 'Safety & Monitoring',
    intro: 'Technology to help families stay aware of a loved one\'s safety without feeling intrusive.',
    items: [
      'Video doorbells and indoor cameras',
      'Motion sensor systems (passive, no camera)',
      'Fall detection devices and wearables',
      'Smart door/window sensors',
      'GPS trackers for outdoor wandering risk',
    ],
  },
  {
    icon: '💊',
    title: 'Medication Management',
    intro: 'Missed or doubled doses are one of the most common problems in home care. These tools help.',
    items: [
      'Automated pill dispensers with alerts',
      'Medication reminder apps (caregiver-facing)',
      'Smart pill bottles that track opens',
      'Pharmacy blister packaging and delivery services',
    ],
  },
  {
    icon: '📞',
    title: 'Communication & Connection',
    intro: 'Staying connected matters enormously for wellbeing — and for families trying to monitor from afar.',
    items: [
      'Simplified video call tablets (large screen, one-button)',
      'Always-on video portals (like a persistent window)',
      'Voice assistants for hands-free calling',
      'Digital photo frames with remote upload',
    ],
  },
  {
    icon: '🩺',
    title: 'Health & Vitals Monitoring',
    intro: 'Remote monitoring of key health indicators, especially useful for families managing chronic conditions.',
    items: [
      'Blood pressure monitors with app connectivity',
      'Pulse oximeters',
      'Weight scales with trend tracking',
      'Continuous glucose monitors (for diabetes management)',
      'Wearables with heart rate and activity tracking',
    ],
  },
  {
    icon: '🏠',
    title: 'Home Automation & Daily Living',
    intro: 'Small changes that reduce friction and increase independence for someone with limited mobility or memory issues.',
    items: [
      'Smart lighting (motion-activated, voice-controlled)',
      'Smart locks and keypad entry',
      'Voice-controlled appliances',
      'Automatic stove shutoffs',
      'Grab bars, shower seats, and non-tech modifications',
    ],
  },
  {
    icon: '🗂️',
    title: 'Care Coordination & Documentation',
    intro: 'Tools for the family side — keeping everyone informed, tracking appointments, and managing the logistics.',
    items: [
      'Shared family care coordination apps',
      'Medical record storage and sharing platforms',
      'Shared family calendars with care task views',
      'Telehealth platforms for remote consultations',
    ],
  },
]

export default function TechGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14">
      <DraftFlag />
      <h1 className="text-3xl font-bold text-stone-800 mb-2">Technology Discovery Guide</h1>
      <p className="text-stone-500 text-base leading-relaxed mb-3 max-w-2xl">
        A map of what's out there — organized by the problem it solves, not by product name. This is a starting point for research, not a definitive ranking.
      </p>
      <p className="text-stone-400 text-sm mb-12 italic">
        Updated as we learn more. See our <a href="/reviews" className="text-teal-600 hover:underline">Reviews</a> for deeper dives on specific products.
      </p>

      <div className="space-y-10">
        {CATEGORIES.map(cat => (
          <div key={cat.title} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-lg font-semibold text-stone-800">{cat.title}</h2>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">{cat.intro}</p>
            <ul className="space-y-1.5">
              {cat.items.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-teal-400 mt-1 flex-shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
