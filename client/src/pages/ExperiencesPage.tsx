import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Headeruse from '@/components/ui/Headeruse';
import CtaSection from '@/components/CtaSection';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import './experiencesPage.css';

export default function ExperiencesPage() {
  const [, navigate] = useLocation();

  const experiences = [
    {
      title: 'Music Album Trip',
      description:
        'Create your personal music video while traveling to exotic destinations.',
      duration: '5 Nights / 6 Days',
      details:
        "Perfect for musicians and artists looking to create a cinematic music video. We'll capture your journey and craft a professional film with breathtaking visuals.",
      image: '/experiencepage/exp1.jpg',  
    },
    {
      title: 'Pre-Wedding Shoot',
      description:
        'Cinematic pre-wedding films in the most romantic locations.',
      duration: '5 Nights / 6 Days',
      details:
        'Celebrate your love story with a cinematic pre-wedding film. Our crew will capture your chemistry in iconic, dreamy destinations.',
      image: '/experiencepage/exp2.jpg',  
    },
    {
      title: 'Group Adventure',
      description:
        'Epic group adventures captured in stunning cinematic style.',
      duration: '5 Nights / 6 Days',
      details:
        "Travel with your friends or family and create unforgettable memories. We'll document your entire journey with cinematic brilliance.",
      image: '/experiencepage/exp3.jpg',   
    },
    {
      title: 'Corporate Event',
      description:
        'Professional coverage of your corporate events and team building activities.',
      duration: 'Customizable',
      details:
        'Capture your corporate gatherings, retreats, or brand experiences with polished cinematic storytelling.',
      image: '/experiencepage/exp4.jpg',  
    },
    {
      title: 'Travel Documentary',
      description:
        'In-depth documentary-style coverage of your travel experiences.',
      duration: 'Customizable',
      details:
        'Get a cinematic documentary featuring voiceovers, interviews, and editorial-grade storytelling.',
      image: '/experiencepage/exp5.jpg',   
    },
    {
      title: 'Luxury Getaway',
      description:
        'Exclusive cinematic coverage of your luxury travel experiences.',
      duration: 'Customizable',
      details:
        'Experience the ultimate luxury travel with our premium cinematic film and white-glove production service.',
      image: '/experiencepage/exp6.jpg',   
    },
  ];

  return (
    <div className="experiences-page">
      <Navigation />

      <Headeruse
        title="Featured Experiences"
        subtitle="Cinematic travel packages crafted for your unique story"
        backgroundColor="#000"
        textColor="#fff"
      />

      {/* Experiences Grid */}
      <section className="experiences-page-grid-section">
        <div className="experiences-page-grid-container">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="experiences-page-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* ✅ REPLACED ONLY THIS PART */}
              <div className="experiences-page-image">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="experiences-page-img"
                />
              </div>

              <div className="experiences-page-content">
                <h3 className="experiences-page-title">{exp.title}</h3>
                <p className="experiences-page-description">
                  {exp.description}
                </p>
                <p className="experiences-page-details">{exp.details}</p>
                <div className="experiences-page-duration">{exp.duration}</div>

                <button
                  className="experiences-page-button"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate('/contact');
                  }}
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
          label: 'Contact Us',
          onClick: () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/contact');
          },
          variant: 'outline',
        }}
      />

      <Footer />
    </div>
  );
}
