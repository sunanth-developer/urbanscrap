import { Recycle, MessageCircle, Phone, Mail, Share2, Link, Camera } from 'lucide-react'

const productLinks = [
  { label: 'Schedule Pickup', action: 'pickup' },
  { label: 'Live Prices', hash: '#live-prices' },
  { label: 'AI Scanner', hash: '#ai-scanner' },
  { label: 'How it works', hash: '#how-it-works' },
  { label: 'Impact', hash: '#impact' },
]

const businessLinks = [
  { label: 'For Business', hash: '#business' },
  { label: 'Industrial scrap', hash: '#business' },
  { label: 'EPR Compliance', hash: '#business' },
  { label: 'Contact Sales', action: 'contact' },
]

const companyLinks = [
  { label: 'Contact', action: 'contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Compliance', href: '#' },
]

function Footer({ onGoContact, onGoHome, onGoToSection, onOpenPickup }) {
  const handleLink = (item, event) => {
    if (item.action === 'contact') {
      event.preventDefault()
      onGoContact()
    } else if (item.action === 'pickup') {
      event.preventDefault()
      onOpenPickup()
    } else if (item.hash) {
      event.preventDefault()
      onGoToSection(item.hash)
    }
  }

  const renderLink = (item) => {
    if (item.action || item.hash) {
      return (
        <button type="button" className="footer__link-btn" onClick={(event) => handleLink(item, event)}>
          {item.label}
        </button>
      )
    }

    return <a href={item.href}>{item.label}</a>
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <button type="button" className="logo logo--footer logo--btn" onClick={onGoHome}>
            <span className="logo__icon">
              <Recycle size={18} strokeWidth={2.5} />
            </span>
            <span className="logo__text">UrbanScrap</span>
          </button>
          <p className="footer__desc">
            Doorstep scrap pickup with transparent pricing and instant UPI payment — built for
            Indian homes and businesses.
          </p>
          <ul className="footer__contact">
            <li>
              <MessageCircle size={16} strokeWidth={2} />
              +91 95303 05656
            </li>
            <li>
              <Phone size={16} strokeWidth={2} />
              +91 95303 05656
            </li>
            <li>
              <Mail size={16} strokeWidth={2} />
              hello@urbanscrap.in
            </li>
          </ul>
          <div className="footer__social">
            <a href="#" aria-label="Twitter">
              <Share2 size={16} strokeWidth={2} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Link size={16} strokeWidth={2} />
            </a>
            <a href="#" aria-label="Instagram">
              <Camera size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Product</h4>
          <ul>
            {productLinks.map((link) => (
              <li key={link.label}>{renderLink(link)}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Business</h4>
          <ul>
            {businessLinks.map((link) => (
              <li key={link.label}>{renderLink(link)}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.label}>{renderLink(link)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} UrbanScrap. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
