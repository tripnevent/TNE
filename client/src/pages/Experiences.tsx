import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import './experiences.css';
import Headeruse from '@/components/ui/Headeruse';
import CTAReuse from '@/components/ui/CTAReuse';

export default function Experiences() {
  const [, navigate] = useLocation();

  const experiences = [
    {
      title: 'Music Album Trip',
      description:
        'Create your personal music video while traveling to exotic destinations',
      duration: '5 Nights / 6 Days',
      details:
        "Perfect for musicians and artists looking to create a cinematic music video. We'll capture your journey and create a professional music video with stunning cinematography.",
    },
    {
      title: 'Pre-Wedding Shoot',
      description: 'Cinematic pre-wedding films in the most romantic locations',
      duration: '5 Nights / 6 Days',
      details:
        'Celebrate your love story with a cinematic pre-wedding film. Our team will capture your journey in the most romantic destinations around the world.',
    },
    {
      title: 'Group Adventure',
      description: 'Epic group adventures captured in stunning cinematic style',
      duration: '5 Nights / 6 Days',
      details:
        "Travel with your friends or family and create unforgettable memories. We'll document your adventure with professional cinematography and editing.",
    },
    {
      title: 'Corporate Event',
      description:
        'Professional coverage of your corporate events and team building activities',
      duration: 'Customizable',
      details:
        'Capture your corporate events, conferences, and team building activities with professional cinematic coverage.',
    },
    {
      title: 'Travel Documentary',
      description:
        'In-depth documentary-style coverage of your travel experiences',
      duration: 'Customizable',
      details:
        'Get a comprehensive documentary-style film of your travel journey with interviews, voiceovers, and professional editing.',
    },
    {
      title: 'Luxury Getaway',
      description:
        'Exclusive cinematic coverage of your luxury travel experiences',
      duration: 'Customizable',
      details:
        'Experience the ultimate luxury travel with our premium cinematic coverage and personalized service.',
    },
  ];

  return (
    <div className="experiences-page">
      <Navigation />

      {/* Header */}
      <Headeruse
        title="Featured Experiences"
        subtitle="Cinematic travel packages crafted for your unique story"
        backgroundColor="#000000"
        textColor="#ffffff"
      />

      {/* Experiences Grid */}
      <section className="experiences-grid-section">
        <div className="experiences-grid-container">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
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
                  onClick={() => navigate('/contact')}
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
     
     <CTAReuse
  title="Have a Different Idea?"
  text="We specialize in creating custom cinematic experiences tailored to your unique needs."
  buttonText="Discuss Your Idea"
  buttonLink="/contact"
/>


      <Footer />
    </div>
  );
}
