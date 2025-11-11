import { useLocation } from 'wouter';
import './hero.css';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const [location, navigate] = useLocation();

  return (
    <section className="hero">
      {/* Video Background */}
      <video
        className="hero-video"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-container">
        <h1 className="hero-title">CELEBRATE THE JOURNY</h1>
        <p className="hero-subtitle">Welcome to Trip & Event</p>

        <div className="hero-buttons">
          <button
            className="hero-button hero-button-primary"
            onClick={() => navigate('/destinations')}
          >
            Explore Packages
          </button>
          <button
            className="hero-button hero-button-outline"
            onClick={() => navigate('/experiences')}
          >
            Discover CineTrip
          </button>
        </div>
      </div>
    </section>
  );
}
