import { useLocation } from "wouter";
import "./hero.css";

export default function Hero() {
  const [location, navigate] = useLocation();

  // Function to handle button click, will navigate to a placeholder route
  const handleButtonClick = () => {
    // In a real application, this would navigate to the start of the journey/booking page
    console.log("Navigating to start journey...");
    // navigate("/start-journey"); // Placeholder navigation
  };

  return (
    <section className="hero">
      {/* Animated Grain Overlay */}
      <div className="grain-overlay"></div>

      <div className="hero-container">
        <h1 className="hero-title">TRIP AND EVENT</h1>
        <p className="hero-subtitle">CURATED LUXURY TRAVEL EXPERIENCES</p>

        <div className="hero-buttons">
          <button
            className="hero-button hero-button-outline"
            onClick={handleButtonClick}
          >
            START YOUR JOURNEY
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}