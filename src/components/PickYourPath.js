import { Home, Building2, ArrowRight } from 'lucide-react'

const paths = [
  {
    id: 'homes',
    variant: 'light',
    icon: Home,
    label: 'For homes',
    title: 'Free doorstep pickup, instant payment.',
    features: ['On-demand or weekly', 'All materials accepted', 'Live tracking'],
    cta: 'Schedule Pickup',
    action: 'pickup',
  },
  {
    id: 'businesses',
    variant: 'dark',
    icon: Building2,
    label: 'For businesses',
    title: 'Industrial scrap, managed end-to-end.',
    features: ['Bulk auctions & tenders', 'EPR compliance', 'Dedicated key account manager'],
    cta: 'Talk to our team',
    action: 'contact',
  },
]

function PickYourPath({ onOpenPickup, onGoContact }) {
  const handleAction = (action) => {
    if (action === 'pickup') {
      onOpenPickup()
    } else {
      onGoContact()
    }
  }

  return (
    <section className="pick-path">
      <div className="pick-path__inner">
        <p className="section-eyebrow">Built for everyone</p>
        <h2 className="section-title section-title--spaced">Pick your path.</h2>

        <div className="pick-path__grid">
          {paths.map(({ id, variant, icon: Icon, label, title, features, cta, action }) => (
            <article key={id} className={`path-card path-card--${variant}`}>
              <span className="path-card__icon">
                <Icon size={20} strokeWidth={2} />
              </span>
              <p className="path-card__label">{label}</p>
              <h3 className="path-card__title">{title}</h3>
              <ul className="path-card__list">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button type="button" className="path-card__link" onClick={() => handleAction(action)}>
                {cta}
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PickYourPath
