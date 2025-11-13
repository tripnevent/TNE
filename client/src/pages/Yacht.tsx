import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import CtaSection from "@/components/CtaSection";
import "./Yacht.css";

export default function Yacht() {
  const [, navigate] = useLocation();

  const yachts = [
    {
      name: "Sunset Luxury Cruise",
      description:
        "Experience a serene sunset aboard our luxury yacht with premium amenities and personalized service.",
      highlights: [
        "Private bar & lounge",
        "Sunset deck seating",
        "Gourmet dining options",
      ],
      image: "/yacht.jpg",
    },
    {
      name: "Adventure & Watersports",
      description:
        "Perfect for thrill-seekers, enjoy water sports, jet skis, and diving activities while cruising the coast.",
      highlights: [
        "Jet skis & paddleboards",
        "Snorkeling spots",
        "Expert guides onboard",
      ],
      image: "/Adventurewatersports.jpg",
    },
    {
      name: "Romantic Escape",
      description:
        "A dreamy yacht experience ideal for couples, featuring sunset sails, cozy seating, and private cabins.",
      highlights: ["Private cabins", "Romantic dinner setup", "Sunset sail"],
      image: "/Romanticescape.jpg",
    },
  ];

  return (
    <div className="yacht-page">
      <Navigation />

      {/* Hero Section */}
      <section className="yacht-hero">
        <div className="hero-content">
          <h1 className="yacht-hero-title">Yacht Experiences</h1>
          <p className="hero-subtitle">
            Discover luxury, adventure, and romance on the water
          </p>
        </div>
      </section>

      {/* Yacht Cards */}
      <section className="yacht-list">
        <div className="yacht-grid">
          {yachts.map(({ name, description, highlights, image }) => (
            <article key={name} className="yacht-card">
              <figure className="yacht-image">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  width="100%"
                  height="200"
                />
              </figure>
              <div className="yacht-info">
                <h2 className="yacht-name">{name}</h2>
                <p className="yacht-description">{description}</p>
                <ul className="yacht-highlights">
                  {highlights.map((item) => (
                    <li key={item}>
                      <span className="checkmark">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigate("/contact")}
                  className="yacht-btn"
                  variant="outline"
                >
                  Book Your Yacht
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Sail in Style?"
        subtitle="Choose your perfect yacht experience and let us craft an unforgettable journey."
        primaryButton={{
          label: "Contact Us",
          onClick: () => navigate("/contact"),
          variant: "outline",
        }}
      />

      <Footer />
    </div>
  );
}
