import { TrendingUp, TrendingDown } from 'lucide-react'

const prices = [
  { name: 'Copper', price: 720, change: 4.2, up: true },
  { name: 'Brass', price: 480, change: 0.6, up: false },
  { name: 'Plastic (PET)', price: 22, change: 1.4, up: false },
  { name: 'Cardboard', price: 8, change: 0.3, up: true },
  { name: 'Steel', price: 42, change: 1.1, up: true },
  { name: 'E-waste', price: 95, change: 2.8, up: true },
  { name: 'Battery (Pb)', price: 110, change: 0.9, up: false },
]

function PriceItem({ name, price, change, up }) {
  const Icon = up ? TrendingUp : TrendingDown

  return (
    <span className="ticker__item">
      <span className="ticker__name">{name}</span>
      <span className="ticker__price">₹{price}/kg</span>
      <span className={`ticker__change ticker__change--${up ? 'up' : 'down'}`}>
        <Icon size={12} strokeWidth={2.5} />
        {change}%
      </span>
    </span>
  )
}

function LiveTicker() {
  const items = [...prices, ...prices]

  return (
    <div className="ticker">
      <div className="ticker__track-wrap">
        <div className="ticker__track">
          {items.map((item, index) => (
            <PriceItem key={`${item.name}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LiveTicker
