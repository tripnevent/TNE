import "./trendingDestinations.css";
import { useLocation } from "wouter";

const destinations = [
  { name: 'Dubai', tagline: 'Luxury meets cinematic magic', packages: 12, price: '₹85,000' },
  { name: 'Singapore', tagline: 'Modern marvels & cultural wonders', packages: 8, price: '₹75,000' },
  { name: 'Maldives', tagline: 'Paradise on Earth', packages: 10, price: '₹1,25,000' },
  { name: 'Bali', tagline: 'Island of the Gods', packages: 9, price: '₹65,000' },
  { name: 'Europe', tagline: 'Timeless elegance & romance', packages: 15, price: '₹2,45,000' },
  { name: 'Kashmir', tagline: 'Heaven on Earth', packages: 7, price: '₹45,000' },
];

export default function TrendingDestinations() {
  const [, navigate] = useLocation();

  return (
    <section className="trending-destinations">
      <div className="trending-destinations-container">
        {/* Header */}
        <div className="trending-destinations-header">
          <h2 className="trending-destinations-title">Trending Destinations</h2>
          <p className="trending-destinations-subtitle">
            Explore cinematic journeys around the world
          </p>
        </div>

        {/* Grid */}
        <div className="trending-destinations-grid">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="destination-card"
              onClick={() => navigate('/destinations')}
            >
              <div className="destination-image">
                <p className="destination-image-text">{dest.name} Image</p>
              </div>
              <div className="destination-content">
                <h3 className="destination-name">{dest.name}</h3>
                <p className="destination-tagline">{dest.tagline}</p>
                <div className="destination-info">
                  <span className="destination-packages">{dest.packages} Packages</span>
                  <span className="destination-price">From {dest.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
