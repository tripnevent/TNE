import React from 'react';
import './TrendingDestinations.css';

const places = [
  {
    name: 'Kerala',
    price: '28,500',
    image: '/trendingdestination/kerala1.jpg',
    className: 'card-mauritius',
  },
  {
    name: 'Dubai',
    price: '49,900',
    image: '/trendingdestination/dubai1.jpg',
    className: 'card-thailand',
  },
  {
    name: 'Andaman',
    price: '29,999',
    image: '/trendingdestination/andaman1.jpg',
    className: 'card-maldives',
  },
  {
    name: 'Bali',
    price: '34,999',
    image: '/trendingdestination/bali1.jpg',
    className: 'card-malaysia',
  },
  {
    name: 'Thailand',
    price: '34,999',
    image: '/trendingdestination/phuket1.jpg',
    className: 'card-srilanka',
  },
  {
    name: 'Singapore',
    price: '49,999',
    image: '/trendingdestination/singapore1.jpg',
    className: 'card-seychelles',
  },
];

const TrendingDestinations: React.FC = () => {
  return (
    <div className="trending-destinations-container">
      <h2 className="trending-destinations-title">TRENDING DESTINATIONS</h2>
      <div className="trending-destinations-grid">
        {places.map((place) => (
          <div
            key={place.name}
            className={`trending-destination-card ${place.className}`}
          >
            <img
              src={place.image}
              alt={place.name}
              className="trending-destination-image"
            />
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
