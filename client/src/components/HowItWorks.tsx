import "./howItWorks.css";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const steps = [
  {
    step: "01",
    title: "Share Your Vision",
    desc: "Tell us your dream destination, occasion, and cinematic style.",
  },
  {
    step: "02",
    title: "Custom Planning",
    desc: "We craft a personalized itinerary with locations and filming schedule.",
  },
  {
    step: "03",
    title: "Cinematic Journey",
    desc: "Travel with our professional crew capturing every magical moment.",
  },
  {
    step: "04",
    title: "Relive Forever",
    desc: "Receive your professionally edited film within 30 days.",
  },
];

export default function HowItWorks() {
  const [, navigate] = useLocation();

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        {/* Header */}
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-subtitle">
            From vision to reality in 4 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="how-it-works-grid">
          {steps.map((item, idx) => (
            <div key={idx} className="how-it-works-step">
              <div className="how-it-works-step-number">{item.step}</div>
              <h3 className="how-it-works-step-title">{item.title}</h3>
              <p className="how-it-works-step-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="how-it-works-cta">
          <button
            className="how-it-works-button"
            onClick={() => navigate("/contact")}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
