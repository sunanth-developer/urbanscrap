import { useEffect, useState } from 'react'
import { Recycle, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'How it works', hash: '#how-it-works' },
  { label: 'Live Prices', hash: '#live-prices' },
  { label: 'Business', hash: '#business' },
  { label: 'Impact', hash: '#impact' },
]

const SCROLL_THRESHOLD = 32

function Header({ currentPage, onGoHome, onGoContact, onOpenContactModal, onGoToSection, onOpenPickup }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [currentPage])

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (hash) => (event) => {
    event.preventDefault()
    closeMenu()
    onGoToSection(hash)
  }

  const handleContactNav = () => {
    closeMenu()
    onGoContact()
  }

  const handleContactModal = () => {
    closeMenu()
    onOpenContactModal()
  }

  const handlePickup = () => {
    closeMenu()
    onOpenPickup()
  }

  const handleHome = () => {
    closeMenu()
    onGoHome()
  }

  return (
    <>
      <header className={`header${scrolled || isContactPage ? ' header--scrolled' : ''}`}>
        <div className="header__inner">
          <button type="button" className="logo logo--btn" onClick={handleHome}>
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
              onClick={handleContactNav}
            >
              Contact
            </button>
          </nav>

          <div className="header__actions">
            <button type="button" className="header__contact" onClick={onOpenContactModal}>
              Contact
            </button>
            <button type="button" className="btn btn--primary btn--sm header__pickup" onClick={onOpenPickup}>
              Schedule Pickup
            </button>
            <button
              type="button"
              className="header__menu-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`} aria-hidden={!menuOpen}>
        <button type="button" className="mobile-nav__backdrop" onClick={closeMenu} aria-label="Close menu" />
        <div className="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <nav className="mobile-nav__links" aria-label="Mobile navigation">
            {navLinks.map(({ label, hash }) => (
              <a
                key={label}
                href={hash}
                className="mobile-nav__link"
                onClick={handleNavClick(hash)}
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              className={`mobile-nav__link${isContactPage ? ' mobile-nav__link--active' : ''}`}
              onClick={handleContactNav}
            >
              Contact
            </button>
          </nav>

          <div className="mobile-nav__actions">
            <button type="button" className="btn btn--outline mobile-nav__action" onClick={handleContactModal}>
              Contact us
            </button>
            <button type="button" className="btn btn--primary mobile-nav__action" onClick={handlePickup}>
              Schedule Pickup
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
