import { MapPin, ArrowRight, MessageCircle } from 'lucide-react'

function CTASection({ onOpenPickup }) {
  return (
    <section className="cta-section">
      <div className="cta-section__inner">
        <div className="cta-section__content">
          <p className="cta-section__badge">
            <MapPin size={14} strokeWidth={2.5} />
            Same-day pickup in Hyderabad
          </p>
          <h2 className="cta-section__title">Start selling your scrap today.</h2>
          <p className="cta-section__desc">
            Book in 10 seconds. Cash or UPI on the spot. No subscription, no fees.
          </p>
          <p className="cta-section__trust">
            CPCB compliant · Verified agents · No hidden charges · Made in India
          </p>
        </div>

        <div className="cta-section__actions">
          <button type="button" className="btn btn--white" onClick={onOpenPickup}>
            Schedule Pickup
            <ArrowRight size={18} strokeWidth={2} />
          </button>
          <a href="https://wa.me/919530305656" className="btn btn--ghost">
            <MessageCircle size={18} strokeWidth={2} />
            WhatsApp Pickup
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
