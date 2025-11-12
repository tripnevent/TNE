import CertifiedSection from './CertifiedSection';
import './footer.css';
import { useLocation } from 'wouter';
import { useEffect, useState } from 'react';
import {
  ArrowUp,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
} from 'lucide-react'; // Added icons

export default function Footer() {
  const [, navigate] = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detect when user reaches near footer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const footer = document.querySelector('.footer');
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top + window.scrollY;
      // Show button when user is within 300px of footer
      if (scrollPosition >= footerTop - 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="footer">
        <CertifiedSection />
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <h3>TRIP & EVENT</h3>
              <p>Creating cinematic travel experiences that last forever.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <button
                    onClick={() => {
                      navigate('/yacht');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Yacht
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      navigate('/destinations');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Destinations
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      navigate('/experiences');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Experiences
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate('/how-it-works');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    How It Works
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li>
                  <button
                    className="get-in-touch"
                    onClick={() => {
                      navigate('/contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Get in Touch
                  </button>
                </li>
                <li>
                  <a href="tel:+91 900 700 0777">+91 900 700 0777</a>
                </li>
                <li>
                  <a href="mailto:hello@tripandevent.com">
                    hello@tripandevent.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="footer-heading">Follow Us</h4>
              <ul className="footer-icons">
                <li>
                  <a
                    href="https://www.instagram.com/tripandevent/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="social-icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/share/1Bw8BXmaS2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="social-icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@tripandevent?si=Mvgxlpary9tfHTBs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="social-icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/trip-and-event/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="social-icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/919007000777"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Trip & Event. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToHero}>
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
