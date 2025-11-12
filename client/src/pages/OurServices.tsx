import React, { useRef, useState } from 'react';
import './ourservices.css';

interface Service {
  id: number;
  title: string;
  subtitle: string;
  button: string;
  image: string;
  continent: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'CineTrip',
    subtitle: 'The Ultimate Cinematic Travel Experience',
    button: 'Explore CineTrip',
    image: '/cinetrip.jpg',
    continent: 'Global',
  },
  {
    id: 2,
    title: 'Pre-Wedding Shoot',
    subtitle: 'Cinematic storytelling before your big day',
    button: 'View Packages',
    image: '/Dubai1.jpg',
    continent: 'Asia',
  },
  {
    id: 3,
    title: 'Honeymoon Movie',
    subtitle: 'Capture your love story across destinations',
    button: 'Plan Your Story',
    image: '/honeymoon.jpg',
    continent: 'Europe',
  },
  {
    id: 4,
    title: 'Music Album Trip',
    subtitle: 'Travel and create your personal music video',
    button: 'Create Your Album',
    image: '/musicalbum.jpg',
    continent: 'Asia',
  },
  {
    id: 5,
    title: 'Love Story CineTrip',
    subtitle: 'Your romantic journey filmed like a movie',
    button: 'Start Your Journey',
    image: '/lovestory.jpg',
    continent: 'Asia',
  },
  {
    id: 6,
    title: 'Anniversary',
    subtitle: 'Celebrate milestones with cinematic coverage',
    button: 'Celebrate With Us',
    image: '/anniversary.jpg',
    continent: 'Europe',
  },
  {
    id: 7,
    title: 'Birthday Party',
    subtitle: 'Unforgettable cinematic celebrations',
    button: 'Plan Your Party',
    image: '/birthday.jpg',
    continent: 'Asia',
  },
  {
    id: 8,
    title: 'Personal Events',
    subtitle: 'Corporate events & special occasions',
    button: 'Contact Us',
    image: '/events.jpg',
    continent: 'North America',
  },
  {
    id: 9,
    title: 'Yacht Experiences',
    subtitle: 'Luxury yacht shoots & exclusive film journeys',
    button: 'Explore Luxury',
    image: '/yacht.jpg',
    continent: 'Middle East',
  },
];

const OurServices: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const continents = [
    'All',
    'Asia',
    'Europe',
    'Middle East',
    'North America',
    'Global',
  ];

  const filteredServices =
    activeFilter === 'All'
      ? services
      : services.filter((s) => s.continent === activeFilter);

  // Scroll Logic
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
    <div className="ourservices-container">
      <div className="ourservices-header">
        <h2 className="ourservices-title">OUR SERVICES</h2>
      </div>

      {/* Filter Buttons */}
      <div className="filter-controls">
        <div className="filter-group">
          {continents.map((continent) => (
            <button
              key={continent}
              className={`filter-btn ${activeFilter === continent ? 'active' : ''}`}
              onClick={() => setActiveFilter(continent)}
            >
              {continent}
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

      {/* Card Slider */}
      <div className="services-slider" ref={scrollRef}>
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="service-card"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="service-overlay">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <button className="service-btn">{service.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
