import './footer.css';
import { useLocation } from 'wouter';

export default function Footer() {
  const [, navigate] = useLocation();

  return (
    <footer className="footer">
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
                <button onClick={() => navigate('/')}>Home</button>
              </li>
              <li>
                <button onClick={() => navigate('/destinations')}>
                  Destinations
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/experiences')}>
                  Experiences
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/how-it-works')}>
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
                <a href="mailto:info@tripandevent.com">info@tripandevent.com</a>
              </li>
              <li>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <button
                  className="get-in-touch"
                  onClick={() => navigate('/contact')}
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="footer-heading">Follow Us</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Trip & Event. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
