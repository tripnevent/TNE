import React from 'react';
import './TrendingDestinations.css';

const places = [
  { name: 'Kerala', price: '62,500', image: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', className: 'card-mauritius' },
  { name: 'Dubai', price: '37,500', image: '/dubai.jpg', className: 'card-thailand' },
  { name: 'Andaman', price: '43,854', image: '/andaman.jpg', className: 'card-maldives' },
  { name: 'Bali', price: '48,750', image: '/bali.jpg', className: 'card-malaysia' },
  { name: 'Phuket', price: '30,000', image: '/phuket.jpg', className: 'card-srilanka' },
  { name: 'Singapore', price: '25,330', image: '/singapore.jpg', className: 'card-seychelles' },
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
