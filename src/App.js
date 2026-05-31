import { useState } from 'react'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import ServiceCards from './components/ServiceCards.js'
import LiveTicker from './components/LiveTicker.js'
import HowItWorks from './components/HowItWorks.js'
import AIScanner from './components/AIScanner.js'
import LivePrices from './components/LivePrices.js'
import TrustSection from './components/TrustSection.js'
import PickYourPath from './components/PickYourPath.js'
import ForBusinesses from './components/ForBusinesses.js'
import Impact from './components/Impact.js'
import Testimonials from './components/Testimonials.js'
import CTASection from './components/CTASection.js'
import ContactPage from './components/ContactPage.js'
import Footer from './components/Footer.js'
import AIScannerModal from './components/AIScannerModal.js'
import ContactModal from './components/ContactModal.js'
import SchedulePickupModal from './components/SchedulePickupModal.js'

function App() {
  const [page, setPage] = useState('home')
  const [scannerOpen, setScannerOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [pickupOpen, setPickupOpen] = useState(false)

  const openScanner = () => setScannerOpen(true)
  const closeScanner = () => setScannerOpen(false)
  const openContactModal = () => setContactModalOpen(true)
  const closeContactModal = () => setContactModalOpen(false)
  const openPickup = () => setPickupOpen(true)
  const closePickup = () => setPickupOpen(false)

  const goHome = () => {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goContact = () => {
    setPage('contact')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const goToSection = (hash) => {
    setPage('home')
    window.requestAnimationFrame(() => {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  const goBusiness = () => {
    setPage('home')
    window.requestAnimationFrame(() => {
      const target = document.querySelector('#business')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  return (
    <div className="app">
      <Header
        currentPage={page}
        onGoHome={goHome}
        onGoContact={goContact}
        onOpenContactModal={openContactModal}
        onGoToSection={goToSection}
        onOpenPickup={openPickup}
      />

      {page === 'home' ? (
        <main>
          <Hero onOpenPickup={openPickup} />
          <ServiceCards onOpenScanner={openScanner} />
          <LiveTicker />
          <HowItWorks />
          <AIScanner onOpenScanner={openScanner} />
          <LivePrices onOpenPickup={openPickup} />
          <TrustSection />
          <PickYourPath onOpenPickup={openPickup} onGoContact={goContact} />
          <ForBusinesses onGoContact={goContact} />
          <Impact />
          <Testimonials />
          <CTASection onOpenPickup={openPickup} />
        </main>
      ) : (
        <main>
          <ContactPage
            onGoHome={goHome}
            onOpenPickup={openPickup}
            onGoBusiness={goBusiness}
          />
        </main>
      )}

      <Footer
        onGoContact={goContact}
        onGoHome={goHome}
        onGoToSection={goToSection}
        onOpenPickup={openPickup}
      />
      <AIScannerModal open={scannerOpen} onClose={closeScanner} />
      <ContactModal open={contactModalOpen} onClose={closeContactModal} />
      <SchedulePickupModal open={pickupOpen} onClose={closePickup} />
    </div>
  )
}

export default App
