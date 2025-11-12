import { useLocation } from 'wouter';

// Components
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutTravel from '@/components/AboutTravel';
import FeaturedExperiences from '@/components/FeaturedExperiences';
import TrendingDestinations from '@/components/TrendingDestinations';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import Favplace from '@/components/Favplace';
import OurServices from './OurServices';

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About / Philosophy Section */}
      <AboutTravel />

      {/* Featured Experiences Section */}
      <FeaturedExperiences />

      <Favplace />

      {/* Trending Destinations Section */}
      <TrendingDestinations />

      <OurServices />

      {/* How It Works Section */}

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <CtaSection
        title="Ready to Start Your Journey?"
        subtitle="Let us help you create unforgettable memories."
        primaryButton={{
          label: 'Get Started',
          onClick: () => navigate('/contact'),
          variant: 'solid',
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
