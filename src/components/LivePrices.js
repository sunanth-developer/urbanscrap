import {
  Newspaper,
  Package,
  Hammer,
  Layers,
  Box,
  CircleDot,
  Coins,
  BottleWine,
  Cpu,
  Battery,
  TrendingUp,
  TrendingDown,
  Info,
} from 'lucide-react'
import { livePrices } from '../data/prices.js'

const iconMap = {
  Newspaper,
  Cardboard: Package,
  Iron: Hammer,
  Steel: Layers,
  Aluminium: Box,
  Copper: CircleDot,
  Brass: Coins,
  'Plastic (PET)': BottleWine,
  'E-waste': Cpu,
  'Battery (Lead)': Battery,
}

function LivePrices({ onOpenPickup }) {
  return (
    <section className="live-prices" id="live-prices">
      <div className="live-prices__inner">
        <p className="section-eyebrow">Live scrap prices</p>
        <h2 className="section-title">Today&apos;s rates.</h2>
        <p className="live-prices__subtitle">
          Updated daily based on Hyderabad and South India market averages.
        </p>

        <div className="price-table">
          <div className="price-table__head">
            <span>Material</span>
            <span>Price (₹/kg)</span>
            <span>Trend</span>
          </div>

          {livePrices.map((item) => {
            const Icon = iconMap[item.name] || Box
            const TrendIcon = item.up ? TrendingUp : TrendingDown

            return (
              <div key={item.name} className="price-table__row">
                <div className="price-table__material">
                  <span className="price-table__icon">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="price-table__name">{item.name}</p>
                    <p className="price-table__note">{item.note}</p>
                  </div>
                </div>
                <p className="price-table__price">
                  ₹{item.min} — {item.max}
                </p>
                <span className={`price-table__trend price-table__trend--${item.up ? 'up' : 'down'}`}>
                  <TrendIcon size={14} strokeWidth={2.5} />
                  {item.change}%
                </span>
              </div>
            )
          })}
        </div>

        <p className="live-prices__disclaimer">
          <Info size={14} strokeWidth={2} />
          Prices are indicative and may vary by quality, quantity, and location. Final amount is
          confirmed after digital weighing at pickup.
        </p>

        <div className="live-prices__cta">
          <button type="button" className="btn btn--primary" onClick={onOpenPickup}>
            Schedule Pickup
          </button>
        </div>
      </div>
    </section>
  )
}

export default LivePrices
