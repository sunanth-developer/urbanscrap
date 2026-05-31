import { Truck, IndianRupee, ScanLine, ArrowUpRight } from 'lucide-react'

const cards = [
  {
    id: 'book-pickup',
    variant: 'primary',
    icon: Truck,
    title: 'Book Pickup',
    description: 'Pick a slot. We arrive at your door.',
  },
  {
    id: 'check-prices',
    variant: 'default',
    icon: IndianRupee,
    title: 'Check Prices',
    description: 'Live, transparent rates by material.',
  },
  {
    id: 'ai-scanner',
    variant: 'default',
    icon: ScanLine,
    title: 'AI Scanner',
    description: 'Snap a photo. Get an instant estimate.',
    opensScanner: true,
  },
]

function ServiceCards({ onOpenScanner }) {
  const handleCardClick = (card) => {
    if (card.opensScanner) {
      onOpenScanner()
    }
  }

  return (
    <section className="cards">
      <div className="cards__grid">
        {cards.map(({ id, variant, icon: Icon, title, description, opensScanner }) => (
          <article
            key={id}
            className={`card card--${variant}${opensScanner ? ' card--clickable' : ''}`}
            onClick={() => handleCardClick({ opensScanner })}
            onKeyDown={(event) => {
              if (opensScanner && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault()
                onOpenScanner()
              }
            }}
            role={opensScanner ? 'button' : undefined}
            tabIndex={opensScanner ? 0 : undefined}
          >
            <div className="card__top">
              <span className="card__icon-wrap">
                <Icon size={20} strokeWidth={2} />
              </span>
              <span className="card__arrow">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </div>
            <h2 className="card__title">{title}</h2>
            <p className="card__desc">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServiceCards
