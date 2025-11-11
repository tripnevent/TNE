import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import './Yacht.css';

export default function Yacht() {
  const [, navigate] = useLocation();

  const yachts = [
    {
      name: 'Sunset Luxury Cruise',
      description:
        'Experience a serene sunset aboard our luxury yacht with premium amenities and personalized service.',
      highlights: [
        'Private bar & lounge',
        'Sunset deck seating',
        'Gourmet dining options',
      ],
      image: '/images/yacht1.jpg',
    },
    {
      name: 'Adventure & Watersports',
      description:
        'Perfect for thrill-seekers, enjoy water sports, jet skis, and diving activities while cruising the coast.',
      highlights: [
        'Jet skis & paddleboards',
        'Snorkeling spots',
        'Expert guides onboard',
      ],
      image: '/images/yacht2.jpg',
    },
    {
      name: 'Romantic Escape',
      description:
        'A dreamy yacht experience ideal for couples, featuring sunset sails, cozy seating, and private cabins.',
      highlights: ['Private cabins', 'Romantic dinner setup', 'Sunset sail'],
      image: '/images/yacht3.jpg',
    },
  ];

  return (
    <div className="yacht-page">
      <Navigation />

      {/* Hero Section */}
      <section className="yacht-hero">
        <div className="hero-content">
          <h1 className="hero-title">Yacht Experiences</h1>
          <p className="hero-subtitle">
            Discover luxury, adventure, and romance on the water
          </p>
        </div>
      </section>

      {/* Yacht Cards */}
      <section className="yacht-list">
        <div className="yacht-grid">
          {yachts.map((yacht, idx) => (
            <div key={idx} className="yacht-card">
              <div className="yacht-image">
                <img src={yacht.image} alt={yacht.name} />
              </div>
              <div className="yacht-info">
                <h2 className="yacht-name">{yacht.name}</h2>
                <p className="yacht-description">{yacht.description}</p>
                <ul className="yacht-highlights">
                  {yacht.highlights.map((item, i) => (
                    <li key={i}>
                      <span className="checkmark">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigate('/contact')}
                  className="yacht-btn"
                >
                  Book Your Yacht
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="yacht-cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Sail in Style?</h2>
          <p className="cta-text">
            Choose your perfect yacht experience and let us craft an
            unforgettable journey.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="cta-btn"
          >
            Get Your Private Yacht
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
