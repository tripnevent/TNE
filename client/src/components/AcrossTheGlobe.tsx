import React, { useRef, useState } from 'react';
import './AcrossTheGlobe.css';

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
    image: '/acrosstheglobe/dubai.jpg',
  },
  {
    id: 2,
    subtitle: 'Modern marvels & cultural',
    title: 'Thailand',
    image: '/acrosstheglobe/thailand.jpg',
  },
  {
    id: 3,
    subtitle: 'Paradise on Earth',
    title: 'Bali',
    image: '/acrosstheglobe/bali.jpg',
  },
  {
    id: 4,
    subtitle: 'Island of the Gods',
    title: 'Singapore',
    image: '/acrosstheglobe/singapore.jpg',
  },
  {
    id: 5,
    subtitle: 'Timeless elegance & romance',
    title: 'Kerala',
    image: '/acrosstheglobe/kerala.jpg',
  },
  {
    id: 6,
    subtitle: 'Heaven on Earth',
    title: 'Andaman',
    image: '/acrosstheglobe/andaman.jpg',
  },
];

const AcrossTheGlobe: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);
  const filters = ['All', '5-8 Days', '10+ Days', 'Less than 5 Days'];

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
    <div className="acrosstheglobe-container">
      {/* Header */}
      <div className="acrosstheglobe-header">
        <h2 className="acrosstheglobe-title">ACROSS THE GLOBE</h2>
      </div>

      {/* Filter and Navigation */}
      <div className="acrosstheglobe-filter-buttons">
        <div className="acrosstheglobe-filter-btn-group">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`acrosstheglobe-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="acrosstheglobe-navigation-arrows">
          <button
            className="acrosstheglobe-arrow-btn prev"
            onClick={() => scroll('left')}
          >
            ‹
          </button>
          <button
            className="acrosstheglobe-arrow-btn next"
            onClick={() => scroll('right')}
          >
            ›
          </button>
        </div>
      </div>

      {/* Destination Grid */}
      <div className="acrosstheglobe-grid" ref={scrollRef}>
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="acrosstheglobe-card"
            style={{ backgroundImage: `url(${dest.image})` }}
          >
            <div className="acrosstheglobe-overlay">
              <h3 className="acrosstheglobe-title-text">{dest.title}</h3>
              <p className="acrosstheglobe-subtitle-text">{dest.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcrossTheGlobe;
