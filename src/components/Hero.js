import { Check, Scale } from 'lucide-react'

const trustItems = [
  { icon: Check, label: 'CPCB compliant' },
  { icon: Check, label: 'Verified agents' },
  { icon: Check, label: 'No hidden charges' },
  { icon: Scale, label: 'Live digital weighing' },
]

function Hero({ onOpenPickup }) {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__badge">
        <span className="hero__badge-dot" />
        SAME-DAY PICKUP LIVE IN HYDERABAD
      </div>

      <h1 className="hero__title">
        Sell your scrap in <span className="hero__title-accent">10 seconds.</span>
      </h1>

      <p className="hero__subtitle">
        Doorstep pickup. Best prices. Instant UPI payment.
      </p>

      <div className="hero__actions">
        <a href="#live-prices" className="btn btn--outline">
          <span className="btn__rupee">₹</span>
          Check Scrap Prices
        </a>
        <button type="button" className="btn btn--primary" onClick={onOpenPickup}>
          Schedule Pickup
          <span className="btn__arrow">→</span>
        </button>
      </div>

      <ul className="hero__trust">
        {trustItems.map(({ icon: Icon, label }) => (
          <li key={label} className="hero__trust-item">
            <span className="hero__trust-icon">
              <Icon size={14} strokeWidth={2.5} />
            </span>
            {label}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hero
