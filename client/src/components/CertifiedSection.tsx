import React from "react";
import { CheckCircle, Users, Star, Clock } from "lucide-react";
import "./CertifiedSection.css";

const logos = [
  {
    src: "/trip-event-main-logo.webp",
    alt: "Trip & Event - India",
    label: "India",
  },
  {
    src: "/gohappy-logo.jpg",
    alt: "GoHappy Tourism LLC",
    label: "Dubai, UAE",
  },
  {
    src: "/tripmedia-logo.jpg",
    alt: "TripMedia Production LLC",
    label: "Dubai, UAE",
    rounded: true,
  },
  {
    src: "/iata-logo.png",
    alt: "IATA Certified - 14035136",
    label: "ID: 14035136",
    invert: true,
    smallText: true,
  },
];

const badges = [
  { icon: <CheckCircle />, text: "IATA Certified" },
  { icon: <Users />, text: "500+ Happy Travelers" },
  { icon: <Star />, text: "5.0 Rating" },
  { icon: <Clock />, text: "24x7 Support" },
];

export default function CertifiedSection() {
  return (
    <section className="certified-section">
      {/* Logos */}
      <div className="certified-logos">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className={`certified-logo-item ${
              logo.rounded ? "rounded-logo" : ""
            } ${logo.invert ? "invert-logo" : ""}`}
          >
            <img src={logo.src} alt={logo.alt} />
            <p
              className={`logo-label ${
                logo.smallText
                  ? "small-text"
                  : logo.label === "India"
                  ? "india-text"
                  : ""
              }`}
            >
              {logo.label}
            </p>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="certified-badges">
        {badges.map((badge, idx) => (
          <div key={idx} className="badge-item">
            <span className="badge-icon">{badge.icon}</span>
            <span>{badge.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
