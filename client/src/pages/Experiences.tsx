import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Headeruse from "@/components/ui/Headeruse";
import CtaSection from "@/components/CtaSection";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import "./experiences.css";

export default function Experiences() {
  const [, navigate] = useLocation();

  const experiences = [
    {
      title: "Music Album Trip",
      description:
        "Create your personal music video while traveling to exotic destinations.",
      duration: "5 Nights / 6 Days",
      details:
        "Perfect for musicians and artists looking to create a cinematic music video. We'll capture your journey and craft a professional film with breathtaking visuals.",
    },
    {
      title: "Pre-Wedding Shoot",
      description: "Cinematic pre-wedding films in the most romantic locations.",
      duration: "5 Nights / 6 Days",
      details:
        "Celebrate your love story with a cinematic pre-wedding film. Our crew will capture your chemistry in iconic, dreamy destinations.",
    },
    {
      title: "Group Adventure",
      description: "Epic group adventures captured in stunning cinematic style.",
      duration: "5 Nights / 6 Days",
      details:
        "Travel with your friends or family and create unforgettable memories. We'll document your entire journey with cinematic brilliance.",
    },
    {
      title: "Corporate Event",
      description:
        "Professional coverage of your corporate events and team building activities.",
      duration: "Customizable",
      details:
        "Capture your corporate gatherings, retreats, or brand experiences with polished cinematic storytelling.",
    },
    {
      title: "Travel Documentary",
      description:
        "In-depth documentary-style coverage of your travel experiences.",
      duration: "Customizable",
      details:
        "Get a cinematic documentary featuring voiceovers, interviews, and editorial-grade storytelling.",
    },
    {
      title: "Luxury Getaway",
      description:
        "Exclusive cinematic coverage of your luxury travel experiences.",
      duration: "Customizable",
      details:
        "Experience the ultimate luxury travel with our premium cinematic film and white-glove production service.",
    },
  ];

  return (
    <div className="experiences-page">
      <Navigation />

      {/* Header */}
      <Headeruse
        title="Featured Experiences"
        subtitle="Cinematic travel packages crafted for your unique story"
        backgroundColor="#000"
        textColor="#fff"
      />

      {/* Experiences Grid */}
      <section className="experiences-grid-section">
        <div className="experiences-grid-container">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="experience-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="experience-image">
                <p className="experience-image-text">{exp.title} Image</p>
              </div>

              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-description">{exp.description}</p>
                <p className="experience-details">{exp.details}</p>
                <div className="experience-duration">{exp.duration}</div>
                <button
                  className="experience-button"
                  onClick={() => navigate("/contact")}
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Have a Different Idea?"
        subtitle="We specialize in creating custom cinematic experiences tailored to your vision."
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
