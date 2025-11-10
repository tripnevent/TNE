import { useLocation } from "wouter";
import "./hero.css";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const [location, navigate] = useLocation();

  return (
    <section className="hero">
      <div className="hero-container">
        <p className="hero-subtitle">Welcome to Trip & Event</p>
        <h1 className="hero-title">Celebrate the Journey</h1>
        <p className="hero-description">
          Cinematic Travel Experiences That Last Forever
        </p>
        <div className="hero-buttons">
          <button
            className="hero-button hero-button-primary"
            onClick={() => navigate("/destinations")}
          >
            Explore Packages
          </button>
          <button
            className="hero-button hero-button-outline"
            onClick={() => navigate("/experiences")}
          >
            Discover CineTrip
          </button>
        </div>
      </div>
    </section>
  );
}
