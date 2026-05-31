import { Calendar, Truck, Scale, Wallet } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Calendar,
    title: 'Book pickup',
    description: 'Pick a 1-hour slot. No phone calls, no haggling.',
  },
  {
    step: '02',
    icon: Truck,
    title: 'We arrive',
    description: 'Verified agent at your door — live tracked.',
  },
  {
    step: '03',
    icon: Scale,
    title: 'Digital weighing',
    description: 'Calibrated scales. You see every gram.',
  },
  {
    step: '04',
    icon: Wallet,
    title: 'Instant payment',
    description: 'UPI in under 30 seconds. Done.',
  },
]

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__inner">
        <p className="section-eyebrow">How it works</p>
        <h2 className="section-title section-title--spaced">Four simple steps.</h2>

        <div className="steps-grid">
          {steps.map(({ step, icon: Icon, title, description }) => (
            <article key={step} className="step-card">
              <div className="step-card__top">
                <span className="step-card__icon">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className="step-card__number">{step}</span>
              </div>
              <h3 className="step-card__title">{title}</h3>
              <p className="step-card__desc">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
