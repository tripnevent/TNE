import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import './destinations.css';
import Headeruse from '@/components/ui/Headeruse';
import CtaSection from '@/components/CtaSection';

export default function Destinations() {
  const [, navigate] = useLocation();

  const destinations = [
    {
      name: 'Dubai',
      tagline: 'Luxury meets cinematic magic',
      packages: 12,
      price: '₹85,000',
      description:
        'Experience the glittering skyline of Dubai with our cinematic travel packages.',
    },
    {
      name: 'Singapore',
      tagline: 'Modern marvels & cultural wonders',
      packages: 8,
      price: '₹75,000',
      description:
        'Explore the fusion of tradition and modernity in Singapore.',
    },
    {
      name: 'Maldives',
      tagline: 'Paradise on Earth',
      packages: 10,
      price: '₹1,25,000',
      description:
        'Capture the pristine beauty of the Maldives with crystal clear waters.',
    },
    {
      name: 'Bali',
      tagline: 'Island of the Gods',
      packages: 9,
      price: '₹65,000',
      description: 'Discover the spiritual and natural beauty of Bali.',
    },
    {
      name: 'Europe',
      tagline: 'Timeless elegance & romance',
      packages: 15,
      price: '₹2,45,000',
      description:
        'Journey through the historic cities and landscapes of Europe.',
    },
    {
      name: 'Kashmir',
      tagline: 'Heaven on Earth',
      packages: 7,
      price: '₹45,000',
      description:
        "Experience the breathtaking beauty of Kashmir's valleys and mountains.",
    },
  ];

  return (
    <div className="destinations-page">
      <Navigation />

      {/* Page Header */}
      <Headeruse
        title="Trending Destinations"
        subtitle="Explore cinematic journeys around the world"
        backgroundColor="#000000"
        textColor="#ffffff"
      />

      {/* Destinations Grid */}
      <section className="destinations-grid-section">
        <div className="destinations-grid-container">
          {destinations.map((dest, idx) => (
            <div key={idx} className="destination-card">
              <div className="destination-image">
                <p className="destination-image-text">{dest.name} Image</p>
              </div>
              <div className="destination-content">
                <h3 className="destination-title">{dest.name}</h3>
                <p className="destination-tagline">{dest.tagline}</p>
                <p className="destination-description">{dest.description}</p>
                <div className="destination-info">
                  <span>{dest.packages} Packages</span>
                  <span className="destination-price">From {dest.price}</span>
                </div>
                <Button
                  className="destination-button"
                  onClick={() => navigate('/contact')}
                >
                  View Packages
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Can't Find Your Dream Destination?"
        subtitle="We can create custom packages for any destination you have in mind."
        primaryButton={{
          label: 'Contact Us',
          onClick: () => navigate('/contact'),
          variant: 'outline',  
        }}
      />

      <Footer />
    </div>
  );
}
