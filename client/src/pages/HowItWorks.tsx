import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import Faq from '@/components/Faq';
import './HowItWorks.css';
import Headeruse from '@/components/ui/Headeruse';

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
    },
  ];

  return (
    <div className="howitworks-container">
      <Navigation />

      {/* Header */}
       <Headeruse
              title="How It Works"
              subtitle="From vision to reality in 4 simple steps"
              backgroundColor="#000000"
              textColor="#ffffff"
            />
        
       

      {/* Steps */}
      <section className="steps-section">
        <div className="steps-wrapper">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className={`step-item ${idx % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="step-text">
                <div className="step-number">{item.step}</div>
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
              <div className="step-image">
                <p>{item.title} Image</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Faq />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Let's create your cinematic travel experience today</p>
          <Button
            size="lg"
            className="cta-button"
            onClick={() => navigate('/contact')}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
