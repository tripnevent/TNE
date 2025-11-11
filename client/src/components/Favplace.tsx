import React from 'react';
import './favplace.css';

// Placeholder image URLs are used as the original images are not provided.
// In a real-world scenario, these would be replaced with the actual image paths.
const places = [
  {
    name: 'Mauritius',
    price: '62,500',
    image: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // The class names will be used for grid layout in CSS
    className: 'card-mauritius',
  },
  {
    name: 'Thailand',
    price: '37,500',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: 'card-thailand',
  },
  {
    name: 'Maldives',
    price: '43,854',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: 'card-maldives',
  },
  {
    name: 'Malaysia',
    price: '48,750',
    image: 'https://images.unsplash.com/photo-1596422846543-75c651443162?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: 'card-malaysia',
  },
  {
    name: 'Sri Lanka',
    price: '30,000',
    image: 'https://images.unsplash.com/photo-1579478147710-c2b7b52a2a49?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: 'card-srilanka',
  },
  {
    name: 'Seychelles',
    price: '25,330',
    image: 'https://images.unsplash.com/photo-1542042161-955013509038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    className: 'card-seychelles',
  },
];

const FavPlace = () => {
  return (
    <div className="fav-place-container">
      <h2 className="fav-place-title">TRENDING-DESTINATION</h2>
      <div className="fav-place-grid">
        {places.map((place) => (
          <div key={place.name} className={`fav-place-card ${place.className}`}>
            <img src={place.image} alt={place.name} className="fav-place-image" />
            <div className="fav-place-overlay">
              <h3 className="fav-place-name">{place.name}</h3>
              <p className="fav-place-price">From ₹{place.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavPlace;