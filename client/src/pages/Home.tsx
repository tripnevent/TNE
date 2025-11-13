import { useLocation } from 'wouter';
import { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutTravel from '@/components/AboutTravel';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ClipLoader } from 'react-spinners';

// Lazy load heavier components
const FeaturedExperiences = lazy(
  () => import('@/components/FeaturedExperiences')
);
const TrendingDestinations = lazy(
  () => import('@/components/AcrossTheGlobe')
);
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Favplace = lazy(() => import('@/components/TrendingDestinations'));
const OurServices = lazy(() => import('./OurServices'));

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="home-page">
      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <Hero />
        <AboutTravel />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen bg-background">
              <ClipLoader color="#fff" size={60} />
            </div>
          }
        >
          <FeaturedExperiences />
          <Favplace />
          <TrendingDestinations />
          <OurServices />
          <Testimonials />
        </Suspense>

        {/* Call to Action */}
        <CtaSection
          title="Ready to Start Your Journey?"
          subtitle="Let us help you create unforgettable memories."
          primaryButton={{
            label: 'Get Started',
            onClick: () => navigate('/contact'),
            variant: 'solid',
          }}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
