import { Wallet, Recycle, Users, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: Wallet,
    value: '₹ 4.2 Cr',
    label: 'Paid to citizens',
    note: 'Direct UPI · Zero deductions',
  },
  {
    icon: Recycle,
    value: '1,840 T',
    label: 'Recycled responsibly',
    note: 'CPCB-verified processing',
  },
  {
    icon: Users,
    value: '62,400+',
    label: 'Households served',
    note: 'Across Hyderabad & growing',
  },
]

function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="impact__inner">
        <p className="section-eyebrow">Our impact so far</p>
        <h2 className="section-title section-title--spaced">Numbers that grow with every pickup.</h2>

        <div className="impact__grid">
          {stats.map(({ icon: Icon, value, label, note }) => (
            <article key={label} className="impact-card">
              <div className="impact-card__top">
                <span className="impact-card__icon">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <TrendingUp size={16} className="impact-card__trend" strokeWidth={2.5} />
              </div>
              <p className="impact-card__value">{value}</p>
              <p className="impact-card__label">{label}</p>
              <p className="impact-card__note">{note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
