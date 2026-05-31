import {
  Gavel,
  FileCheck,
  Network,
  Building,
  ArrowRight,
} from 'lucide-react'
import industrialImage from '../assets/industrial-D8R9cpOt.jpg'

const features = [
  {
    icon: Gavel,
    title: 'Reverse auctions',
    description: 'Post a tender. Verified recyclers bid live.',
  },
  {
    icon: FileCheck,
    title: 'EPR compliance',
    description: 'Auto-generated certificates & filings.',
  },
  {
    icon: Network,
    title: 'Recycler network',
    description: 'Vetted recyclers across South India.',
  },
  {
    icon: Building,
    title: 'On-site teams',
    description: 'Dismantling crews for factories & demolitions.',
  },
]

function ForBusinesses({ onGoContact }) {
  return (
    <section className="for-business" id="business">
      <div className="for-business__inner">
        <div className="for-business__visual">
          <div className="for-business__image">
            <img
              src={industrialImage}
              alt="Industrial scrap processing facility"
              className="for-business__photo"
            />
            <div className="for-business__tender">
              <p className="for-business__tender-label">Active tender</p>
              <p className="for-business__tender-title">42 T · Mild Steel</p>
              <p className="for-business__tender-meta">14 bids · 03h left</p>
              <p className="for-business__tender-price">₹ 36.40/kg</p>
              <div className="for-business__tender-bar">
                <span style={{ width: '68%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="for-business__content">
          <p className="section-eyebrow section-eyebrow--left for-business__eyebrow">
            For businesses
          </p>
          <h2 className="for-business__title">
            The system for managing industrial scrap.
          </h2>
          <p className="for-business__desc">
            One dashboard for tenders, EPR compliance, recycler discovery and on-site
            dismantling — built for factories, OEMs and large enterprises.
          </p>

          <div className="for-business__grid">
            {features.map(({ icon: Icon, title, description }) => (
              <article key={title} className="biz-feature">
                <span className="biz-feature__icon">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="biz-feature__title">{title}</h3>
                  <p className="biz-feature__desc">{description}</p>
                </div>
              </article>
            ))}
          </div>

          <button type="button" className="btn btn--primary for-business__cta" onClick={onGoContact}>
            Talk to enterprise team
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ForBusinesses
