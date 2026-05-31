import { Sparkles, Check, ScanLine, Camera } from 'lucide-react'

const features = [
  'Identifies scrap material & category',
  'Gives a rough value estimate',
  'Final amount confirmed by digital weighing',
  'Instant UPI payment after weighing',
]

function AIScanner({ onOpenScanner }) {
  return (
    <section className="ai-scanner" id="ai-scanner">
      <div className="ai-scanner__inner">
        <div className="ai-scanner__content">
          <p className="section-eyebrow section-eyebrow--left">
            <Sparkles size={14} strokeWidth={2} />
            AI Scanner
          </p>

          <h2 className="ai-scanner__title">
            Not sure what your scrap is worth?
          </h2>

          <p className="ai-scanner__desc">
            Snap a photo. Get a rough value estimate based on material and visible
            quantity. Final price is confirmed by digital weighing at pickup.
          </p>

          <ul className="ai-scanner__features">
            {features.map((feature) => (
              <li key={feature} className="ai-scanner__feature">
                <span className="ai-scanner__check">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="btn btn--primary ai-scanner__cta"
            onClick={onOpenScanner}
          >
            <ScanLine size={18} strokeWidth={2} />
            Try AI Scanner
          </button>

          <p className="ai-scanner__disclaimer">
            Estimate only. Final value depends on actual weight, grade, and live market rate.
          </p>
        </div>

        <div className="ai-scanner__phone-wrap">
          <div className="phone-mockup" aria-hidden="true">
            <div className="phone-mockup__shell">
              <div className="phone-mockup__screen">
                <div className="phone-mockup__island" />

                <div className="phone-mockup__topbar">
                  <span>SCAN</span>
                  <span className="phone-mockup__accuracy">99.4%</span>
                </div>

                <div className="phone-mockup__viewfinder">
                  <span className="phone-mockup__corner phone-mockup__corner--tl" />
                  <span className="phone-mockup__corner phone-mockup__corner--tr" />
                  <span className="phone-mockup__corner phone-mockup__corner--bl" />
                  <span className="phone-mockup__corner phone-mockup__corner--br" />

                  <span className="phone-mockup__camera-btn">
                    <Camera size={28} strokeWidth={1.5} />
                  </span>

                  <div className="phone-mockup__result">
                    <p className="phone-mockup__result-label">Material detected</p>
                    <p className="phone-mockup__result-material">Aluminium</p>
                    <div className="phone-mockup__result-row">
                      <span className="phone-mockup__result-note">Final price after weighing</span>
                      <span className="phone-mockup__result-price">₹300 – ₹450</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIScanner
