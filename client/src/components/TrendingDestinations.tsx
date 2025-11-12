import React, { useRef, useState } from 'react';
import './trendingDestinations.css';

interface Destination {
  id: number;
  subtitle: string;
  title: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    subtitle: 'Luxury meets cinematic magic',
    title: 'Dubai',
    image: '/dubai.jpg',
  },
  {
    id: 2,
    subtitle: 'Modern marvels & cultural ',
    title: 'Phuket',
    image: '/phuket.jpg',
  },
  {
    id: 3,
    subtitle: 'Paradise on Earth',
    title: 'Bali',
    image: '/bali.jpg',
  },
  {
    id: 4,
    subtitle: 'Island of the Gods',
    title: 'Singapore',
    image: '/singapore.jpg',
  },
  {
    id: 5,
    subtitle: 'Timeless elegance & romance',
    title: 'Kerala',
    image: '/Kerala.jpg',
  },
  {
    id: 6,
    subtitle: 'Heaven on Earth',
    title: 'Andaman',
    image: '/andaman.jpg',
  },
];

const TrendingDestinations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filters = ['All', '5-8 Days', '10+ Days', 'Less than 5 Days'];

  // scroll logic
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="destinations-container">
      <div className="destinations-header">
        <h2 className="destinations-title">DESTINATIONS</h2>
      </div>

      <div className="filter-buttons">
        <div className="filter-btn-group">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="navigation-arrows">
          <button className="arrow-btn prev" onClick={() => scroll('left')}>
            ‹
          </button>
          <button className="arrow-btn next" onClick={() => scroll('right')}>
            ›
          </button>
        </div>
      </div>

      <div className="destinations-grid" ref={scrollRef}>
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="destination-card"
            style={{ backgroundImage: `url(${dest.image})` }}
          >
            <div className="card-content">
              <h3 className="card-title">{dest.title}</h3>
              <p className="card-subtitle">{dest.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;

//{ name: 'Dubai', tagline: 'Luxury meets cinematic magic', packages: 12, price: '₹85,000' },
//   { name: 'Phuket ', tagline: 'Modern marvels & cultural wonders', packages: 8, price: '₹75,000' },
//   { name: 'Bali', tagline: 'Paradise on Earth', packages: 10, price: '₹1,25,000' },
//   { name: 'Singapore', tagline: 'Island of the Gods', packages: 9, price: '₹65,000' },
//   { name: 'Kerela', tagline: 'Timeless elegance & romance', packages: 15, price: '₹2,45,000' },
//   { name: 'Andaman', tagline: 'Heaven on Earth', packages: 7, price: '₹45,000' },
