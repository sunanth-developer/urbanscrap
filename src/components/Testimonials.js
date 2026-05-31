import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Got ₹2,400 for old newspapers and plastic in one pickup. Agent weighed everything in front of me.',
    name: 'Priya S.',
    location: 'Gachibowli, Hyderabad',
  },
  {
    quote:
      'Finally a scrap service that doesn\'t haggle. UPI came in 20 seconds after weighing.',
    name: 'Rahul M.',
    location: 'Kondapur, Hyderabad',
  },
  {
    quote:
      'We use UrbanScrap for our office e-waste monthly. Transparent pricing and reliable pickups.',
    name: 'Anitha K.',
    location: 'HITEC City, Hyderabad',
  },
]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <p className="section-eyebrow">Real stories</p>
        <h2 className="section-title section-title--spaced">What our customers say.</h2>

        <div className="testimonials__grid">
          {testimonials.map(({ quote, name, location }) => (
            <article key={name} className="testimonial-card">
              <Quote size={22} className="testimonial-card__quote" strokeWidth={2} />
              <p className="testimonial-card__text">&ldquo;{quote}&rdquo;</p>
              <div className="testimonial-card__author">
                <p className="testimonial-card__name">{name}</p>
                <p className="testimonial-card__location">{location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
