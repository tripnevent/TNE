import { useLocation } from 'wouter';
import './hero.css';

export default function Hero() {
  const [, navigate] = useLocation();

  const handleButtonClick = () => {
    console.log('Navigating to start journey...');
    // navigate("/start-journey");
  };

  return (
    <section className="hero">
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/herovideo/finalhero.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Grain & Overlay handled in CSS */}
      <div className="grain-overlay"></div>

      {/* Content */}
      <div className="hero-container">
        <h1 className="hero-title">WORLD FIRST CINEMATRIP BRAND</h1>
        <p className="hero-subtitle">We don't just design packages, We turn your holiday into real time movies.</p>

        <div className="hero-buttons">
          <button className="hero-button" onClick={handleButtonClick}>
            START YOUR JOURNEY
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">SCROLL TO EXPLORE</div>
    </section>
  );
}
