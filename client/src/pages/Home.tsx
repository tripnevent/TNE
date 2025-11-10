import { useLocation } from "wouter";

// Components
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutTravel from "@/components/AboutTravel";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import TrendingDestinations from "@/components/TrendingDestinations";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <Hero  />

      {/* About / Philosophy Section */}
      <AboutTravel />

      {/* Featured Experiences Section */}
      <FeaturedExperiences  />

      {/* Trending Destinations Section */}
      <TrendingDestinations  />

      {/* How It Works Section */}

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <CtaSection navigate={navigate} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
