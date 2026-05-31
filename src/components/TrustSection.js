import { Scale, Wallet, ShieldCheck, Eye, EyeOff } from 'lucide-react'

const trustFeatures = [
  {
    icon: Scale,
    title: 'Digital weighing in front of you',
    description: 'IoT-calibrated scales. Every gram displayed live on your screen.',
  },
  {
    icon: Wallet,
    title: 'Instant UPI payment',
    description: 'Money in your account in under 30 seconds. No waiting.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified agents',
    description: 'Background-checked, ID-verified, trained on courteous conduct.',
  },
  {
    icon: Eye,
    title: 'Transparent pricing',
    description: 'Live market rates. No bargaining, no hidden deductions.',
  },
  {
    icon: EyeOff,
    title: 'No hidden charges',
    description: 'Zero pickup fees. What you see is what you get — every time.',
  },
]

function TrustSection() {
  return (
    <section className="trust">
      <div className="trust__inner">
        <p className="section-eyebrow">Why people trust us</p>
        <h2 className="section-title section-title--spaced">Honest by design.</h2>
        <p className="trust__subtitle">
          No surprises. No tricks. Just a fair deal — every single pickup.
        </p>

        <div className="trust__grid">
          {trustFeatures.map(({ icon: Icon, title, description }) => (
            <article key={title} className="trust-card">
              <span className="trust-card__icon">
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3 className="trust-card__title">{title}</h3>
              <p className="trust-card__desc">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
