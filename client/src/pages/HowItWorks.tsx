import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import { useLocation } from 'wouter';
import Headeruse from '@/components/ui/Headeruse';
import CtaSection from '@/components/CtaSection';
import { motion } from 'framer-motion';
import './HowItWorks.css';

export default function HowItWorks() {
  const [, navigate] = useLocation();

  const steps = [
    {
      step: '01',
      title: 'Share Your Vision',
      description:
        "Tell us your dream destination, occasion, and cinematic style. We'll listen to your ideas and understand your unique story.",
      details: [
        'Discuss your travel dates and budget',
        'Share your vision and preferences',
        'Explore destination options',
      ],
      image: '/vision1.jpg',
    },
    {
      step: '02',
      title: 'Custom Planning',
      description:
        'We craft a personalized itinerary with locations and filming schedule. Our team will plan every detail to perfection.',
      details: [
        'Create a detailed itinerary',
        'Plan filming locations and schedules',
        'Arrange logistics and accommodations',
      ],
      image: '/vision2.jpg',
    },
    {
      step: '03',
      title: 'Cinematic Journey',
      description:
        'Travel with our professional crew capturing every magical moment. Experience your journey while we document it beautifully.',
      details: [
        'Travel with professional cinematographers',
        'Capture stunning 4K footage',
        'Create memorable experiences',
      ],
      image: '/vision3.jpg',
    },
    {
      step: '04',
      title: 'Relive Forever',
      description:
        'Receive your professionally edited film within 30 days. Your cinematic masterpiece will be ready to share with the world.',
      details: [
        'Professional color grading and editing',
        'Custom music and sound design',
        'Multiple format deliverables',
      ],
      image: '/vision3.jpg',
    },
  ];

  return (
    <div className="howitworks-container">
      <Navigation />

      <Headeruse
        title="How It Works"
        subtitle="From vision to reality in 4 simple steps"
        backgroundColor="#000"
        textColor="#fff"
      />

      {/* Steps Section */}
      <section className="steps-section">
        <div className="steps-wrapper">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              className={`step-item ${idx % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="step-text">
                <div
                  style={{
                    color: '#ffffff',
                    fontSize: '6rem',
                    fontWeight: '600',
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  <h2>{item.step}</h2>
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <ul>
                  {item.details.map((detail, didx) => (
                    <li key={didx}>
                      <span>✓</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                className="step-image"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 150 }}
              >
                <img src={item.image} alt={item.title} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <Faq />

      <CtaSection
        title="Ready to Start Your Journey?"
        subtitle="Let's create your cinematic travel experience today."
        primaryButton={{
          label: 'Get Started Now',
          onClick: () => navigate('/contact'),
          variant: 'outline',
        }}
      />

      <Footer />
    </div>
  );
}
