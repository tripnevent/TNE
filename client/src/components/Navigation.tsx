import { useState } from 'react';
import { useLocation } from 'wouter';
import { Menu, X, MessageSquareMore } from 'lucide-react';
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import './navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Yacht', href: '/yacht' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: <MessageSquareMore size={20} />, href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <img
            src="/tnegreen.jpeg"
            alt="Trip & Event Logo"
            className="navbar-logo-img"
          />
          <span className="navbar-logo-text">Trip & Event</span>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`navbar-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
              className={`navbar-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}

          {/* Social Icons */}
          <div className="navbar-social">
            <a
              href="https://wa.me/919007000777"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.instagram.com/tripandevent/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@tripandevent?si=Mvgxlpary9tfHTBs"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/trip-and-event/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1Bw8BXmaS2/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
