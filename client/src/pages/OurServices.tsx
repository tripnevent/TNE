import React, { useRef, useState, useMemo } from 'react';
import { useLocation } from 'wouter'; // ✅ Import from wouter
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
    image: '/cinetripoffering/cinetrip.jpg',
    continent: 'Global',
  },
  {
    id: 2,
    title: 'Wedding Shoot',
    subtitle: 'Cinematic storytelling before your big day',
    button: 'View Packages',
    image: '/cinetripoffering/prewedding.jpg',
    continent: 'Asia',
  },
  {
    id: 3,
    title: 'Honeymoon Movie',
    subtitle: 'Capture your love story across destinations',
    button: 'Plan Your Story',
    image: '/cinetripoffering/honeymoonmovie.jpg',
    continent: 'Europe',
  },
  {
    id: 4,
    title: 'Music Album Trip',
    subtitle: 'Travel and create your personal music video',
    button: 'Create Your Album',
    image: '/cinetripoffering/musicalbumtrip.jpg',
    continent: 'Asia',
  },
  {
    id: 5,
    title: 'Love Story CineTrip',
    subtitle: 'Your romantic journey filmed like a movie',
    button: 'Start Your Journey',
    image: '/cinetripoffering/lovestorycinetrip.jpg',
    continent: 'Asia',
  },
  {
    id: 6,
    title: 'Anniversary',
    subtitle: 'Celebrate milestones with cinematic coverage',
    button: 'Celebrate With Us',
    image: '/cinetripoffering/anniversary.jpg',
    continent: 'Europe',
  },
  {
    id: 7,
    title: 'Birthday Party',
    subtitle: 'Unforgettable cinematic celebrations',
    button: 'Plan Your Party',
    image: '/cinetripoffering/birthdayparty.jpg',
    continent: 'Asia',
  },
  {
    id: 8,
    title: 'Personal Events',
    subtitle: 'Corporate events & special occasions',
    button: 'Contact Us',
    image: '/cinetripoffering/events.jpg',
    continent: 'North America',
  },
  {
    id: 9,
    title: 'Yacht Experiences',
    subtitle: 'Luxury yacht shoots & exclusive film journeys',
    button: 'Explore Luxury',
    image: '/cinetripoffering/yachtexperiences.jpg',
    continent: 'Middle East',
  },
];

const continents = [
  'All',
  'Asia',
  'Europe',
  'Middle East',
  'North America',
  'Global',
];

const OurServices: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [location, navigate] = useLocation(); // ✅ Hook for navigation

  const filteredServices = useMemo(
    () =>
      activeFilter === 'All'
        ? services
        : services.filter((s) => s.continent === activeFilter),
    [activeFilter]
  );

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount =
      direction === 'left'
        ? container.scrollLeft - container.clientWidth
        : container.scrollLeft + container.clientWidth;

    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="ourservices-container">
      <header className="ourservices-header">
        <h2 className="ourservices-title">CINETRIP OFFERINGS</h2>
      </header>

      <div className="filter-controls">
        <div className="filter-group">
          {continents.map((continent) => (
            <button
              key={continent}
              className={`filter-btn ${
                activeFilter === continent ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(continent)}
            >
              {continent}
            </button>
          ))}
        </div>

        <div className="navigation-arrows">
          <button
            className="arrow-btn prev"
            aria-label="Previous"
            onClick={() => handleScroll('left')}
          >
            ‹
          </button>
          <button
            className="arrow-btn next"
            aria-label="Next"
            onClick={() => handleScroll('right')}
          >
            ›
          </button>
        </div>
      </div>

      <div className="services-slider" ref={scrollRef}>
        {filteredServices.map((service) => (
          <article
            key={service.id}
            className="service-card"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="service-overlay">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              {/* ✅ Button navigates to /contact page */}
              <button
                className="service-btn"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/contact');
                }}
              >
                {service.button}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
