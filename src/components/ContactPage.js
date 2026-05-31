import { ArrowLeft, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

const contactCards = [
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+919530305656',
    href: 'https://wa.me/919530305656',
  },
  {
    id: 'call',
    icon: Phone,
    label: 'Call',
    value: '+919530305656',
    href: 'tel:+919530305656',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'hello@urbanscrap.in',
    href: 'mailto:hello@urbanscrap.in',
  },
]

function ContactPage({ onGoHome, onOpenPickup, onGoBusiness }) {
  return (
    <section className="contact-page">
      <div className="contact-page__inner">
        <button type="button" className="contact-page__back" onClick={onGoHome}>
          <ArrowLeft size={16} strokeWidth={2} />
          Back to home
        </button>

        <h1 className="contact-page__title">Contact us</h1>
        <p className="contact-page__intro">
          The fastest way to reach us is WhatsApp. Our team responds within 30 minutes
          during business hours (9 AM – 8 PM).
        </p>

        <div className="contact-page__cards">
          {contactCards.map(({ id, icon: Icon, label, value, href }) => (
            <a key={id} href={href} className="contact-page__card">
              <span className="contact-page__card-icon">
                <Icon size={20} strokeWidth={2} />
              </span>
              <span className="contact-page__card-label">{label}</span>
              <span className="contact-page__card-value">{value}</span>
            </a>
          ))}

          <div className="contact-page__card contact-page__card--wide">
            <span className="contact-page__card-icon">
              <MapPin size={20} strokeWidth={2} />
            </span>
            <span className="contact-page__card-label">Office</span>
            <span className="contact-page__card-value">Hyderabad, Telangana, India</span>
          </div>
        </div>

        <div className="contact-page__actions">
          <button type="button" className="btn btn--primary" onClick={onOpenPickup}>
            Schedule Pickup
          </button>
          <button type="button" className="btn btn--outline" onClick={onGoBusiness}>
            Business inquiry
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
