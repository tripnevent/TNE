import { ChevronRight } from "lucide-react";
import "./aboutTravel.css";

export default function AboutTravel() {
  return (
    <section className="about-travel">
      <div className="about-travel-container">
        <div className="about-travel-grid">
          {/* Text Content */}
          <div>
            <h2 className="about-travel-title">A Modern Approach to Travel</h2>
            <p className="about-travel-paragraph">
              Trip & Event is recognized as the epitome of cinematic travel
              experiences. For nearly a decade, we have been creating journeys
              and films that are timeless and etched in the memories of
              thousands forever.
            </p>
            <p className="about-travel-paragraph">
              We celebrate the adventurers, the rule breakers, the travelers
              who are not afraid to experience the world differently. Our
              approach is to capture your unique story with stunning 4K
              cinematography and professional storytelling.
            </p>
            <button className="about-travel-button">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Image / Placeholder */}
          <div className="about-travel-image">
            <p className="about-travel-image-text">Featured Image</p>
          </div>
        </div>
      </div>
    </section>
  );
}
