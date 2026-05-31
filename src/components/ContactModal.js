import { useEffect, useState } from 'react'
import { X, MessageCircle, Phone, Mail, User } from 'lucide-react'

function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    requirement: '',
    message: '',
  })

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onClose()
  }

  return (
    <div className="app-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <button type="button" className="app-modal__backdrop" aria-label="Close contact form" onClick={onClose} />

      <div className="app-modal__panel app-modal__panel--contact">
        <div className="app-modal__header">
          <div>
            <h2 id="contact-modal-title">Contact us</h2>
            <p className="app-modal__subtitle">
              We usually reply within 30 minutes during business hours.
            </p>
          </div>
          <button type="button" className="app-modal__close" aria-label="Close" onClick={onClose}>
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <div className="contact-modal__quick">
          <a href="https://wa.me/919530305656" className="contact-modal__quick-btn">
            <MessageCircle size={18} strokeWidth={2} />
            WhatsApp
          </a>
          <a href="tel:+919530305656" className="contact-modal__quick-btn">
            <Phone size={18} strokeWidth={2} />
            Call
          </a>
          <a href="mailto:hello@urbanscrap.in" className="contact-modal__quick-btn">
            <Mail size={18} strokeWidth={2} />
            Email
          </a>
        </div>

        <form className="contact-modal__form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span className="form-field__label">Name *</span>
            <div className="form-field__input-wrap">
              <input
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange('name')}
              />
              <User size={16} className="form-field__icon" strokeWidth={2} />
            </div>
          </label>

          <label className="form-field">
            <span className="form-field__label">Phone *</span>
            <input
              type="tel"
              required
              placeholder="10-digit mobile"
              value={form.phone}
              onChange={handleChange('phone')}
            />
          </label>

          <label className="form-field">
            <span className="form-field__label">Requirement *</span>
            <input
              type="text"
              required
              placeholder="Pickup, prices, partnership..."
              value={form.requirement}
              onChange={handleChange('requirement')}
            />
          </label>

          <label className="form-field">
            <span className="form-field__label">Message</span>
            <textarea
              rows={3}
              placeholder="Tell us a bit more (optional)"
              value={form.message}
              onChange={handleChange('message')}
            />
          </label>

          <button type="submit" className="btn btn--primary contact-modal__submit">
            Send message
          </button>
        </form>

        <p className="contact-modal__direct">
          Or reach us directly at <strong>+919530305656</strong>
        </p>
      </div>
    </div>
  )
}

export default ContactModal
