import React from 'react';
import './TrendingDestinations.css';

const places = [
  { name: 'Kerala', price: '62,500', image: '/trendingdestination/kerala.jpg', className: 'card-mauritius' },
  { name: 'Dubai', price: '37,500', image: '/trendingdestination/dubai.jpg', className: 'card-thailand' },
  { name: 'Andaman', price: '43,854', image: '/trendingdestination/andaman.jpg', className: 'card-maldives' },
  { name: 'Bali', price: '48,750', image: '/trendingdestination/bali.jpg', className: 'card-malaysia' },
  { name: 'Thailand', price: '30,000', image: '/trendingdestination/phuket.jpg', className: 'card-srilanka' },
  { name: 'Singapore', price: '25,330', image: '/trendingdestination/singapore.jpg', className: 'card-seychelles' },
];

const TrendingDestinations: React.FC = () => {
  return (
    <div className="trending-destinations-container">
      <h2 className="trending-destinations-title">TRENDING DESTINATIONS</h2>
      <div className="trending-destinations-grid">
        {places.map((place) => (
          <div key={place.name} className={`trending-destination-card ${place.className}`}>
            <img src={place.image} alt={place.name} className="trending-destination-image" />
            <div className="trending-destination-overlay">
              <h3 className="trending-destination-name">{place.name}</h3>
              <p className="trending-destination-price">From ₹{place.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;
