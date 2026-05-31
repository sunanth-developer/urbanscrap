import { useEffect, useState } from 'react'
import { Recycle } from 'lucide-react'

const navLinks = [
  { label: 'How it works', hash: '#how-it-works' },
  { label: 'Live Prices', hash: '#live-prices' },
  { label: 'Business', hash: '#business' },
  { label: 'Impact', hash: '#impact' },
]

const SCROLL_THRESHOLD = 32

function Header({ currentPage, onGoHome, onGoContact, onOpenContactModal, onGoToSection, onOpenPickup }) {
  const [scrolled, setScrolled] = useState(false)
  const isContactPage = currentPage === 'contact'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (hash) => (event) => {
    event.preventDefault()
    onGoToSection(hash)
  }

  return (
    <header className={`header${scrolled || isContactPage ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <button type="button" className="logo logo--btn" onClick={onGoHome}>
          <span className="logo__icon">
            <Recycle size={18} strokeWidth={2.5} />
          </span>
          <span className="logo__text">UrbanScrap</span>
        </button>

        <nav className="nav" aria-label="Main navigation">
          {navLinks.map(({ label, hash }) => (
            <a
              key={label}
              href={hash}
              className="nav__link"
              onClick={handleNavClick(hash)}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className={`nav__link nav__link--btn${isContactPage ? ' nav__link--active' : ''}`}
            onClick={onGoContact}
          >
            Contact
          </button>
        </nav>

        <div className="header__actions">
          <button type="button" className="header__contact" onClick={onOpenContactModal}>
            Contact
          </button>
          <button type="button" className="btn btn--primary btn--sm" onClick={onOpenPickup}>
            Schedule Pickup
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
