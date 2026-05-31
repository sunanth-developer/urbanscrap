import { useEffect, useState } from 'react'
import { X, Truck, MessageCircle, Phone, Shield } from 'lucide-react'

function SchedulePickupModal({ open, onClose }) {
  const [mobile, setMobile] = useState('')

  useEffect(() => {
    if (!open) {
      setMobile('')
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

  const handleSubmit = (event) => {
    event.preventDefault()
    onClose()
  }

  return (
    <div className="app-modal" role="dialog" aria-modal="true" aria-labelledby="pickup-modal-title">
      <button type="button" className="app-modal__backdrop" aria-label="Close schedule pickup" onClick={onClose} />

      <div className="app-modal__panel app-modal__panel--pickup">
        <button type="button" className="app-modal__close app-modal__close--absolute" aria-label="Close" onClick={onClose}>
          <X size={20} strokeWidth={2} />
        </button>

        <div className="pickup-modal__header">
          <span className="pickup-modal__icon">
            <Truck size={18} strokeWidth={2} />
          </span>
          <div>
            <h2 id="pickup-modal-title">Schedule a pickup</h2>
            <p className="app-modal__subtitle">
              Enter your mobile to begin. We&apos;ll send a one-time code.
            </p>
          </div>
        </div>

        <div className="pickup-modal__quick">
          <a href="https://wa.me/919530305656" className="btn btn--primary pickup-modal__quick-btn">
            <MessageCircle size={18} strokeWidth={2} />
            Book on WhatsApp
          </a>
          <a href="tel:+919530305656" className="btn btn--outline pickup-modal__quick-btn">
            <Phone size={18} strokeWidth={2} />
            Call for pickup
          </a>
        </div>

        <div className="pickup-modal__divider">
          <span>Or continue with mobile</span>
        </div>

        <form className="pickup-modal__form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span className="form-field__label">Mobile number *</span>
            <div className="pickup-modal__phone">
              <span className="pickup-modal__prefix">+91</span>
              <input
                type="tel"
                required
                placeholder="10-digit mobile"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                maxLength={10}
              />
            </div>
          </label>

          <button type="submit" className="btn btn--primary pickup-modal__continue">
            Continue
          </button>
        </form>

        <p className="pickup-modal__note">
          <Shield size={14} strokeWidth={2} />
          Your number is verified once. We never spam.
        </p>
      </div>
    </div>
  )
}

export default SchedulePickupModal
