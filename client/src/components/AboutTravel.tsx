import { ChevronRight } from "lucide-react";
import "./aboutTravel.css";

// Note: This component is a single section, but the user's previous request was for a full-screen hero.
// To combine the requests, this component will be styled as a full-screen hero with the provided text content.

export default function AboutTravel() {
 const imageUrl = "/modernimg.jpeg";
  return (
    <section className="about-travel" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="about-travel-container">
        <div className="about-travel-content">
          {/* The text content is from the user's second request */}
          <h2 className="about-travel-title">A Modern Approach to Travel</h2>
          <p className="about-travel-paragraph">
            Trip & Event is recognized as the epitome of cinematic travel
            experiences. For nearly a decade, we have been creating journeys
            and films that are timeless and etched in the memories of
            thousands forever.
          </p>
          <button className="about-travel-button">
            Learn More <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}