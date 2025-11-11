import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import './navigation.css'; // <-- import CSS

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'yacht', href: '/yacht' },
    { label: 'How It Works', href: '/how-it-works' },
    // { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <img
            src="/weblogo.jpg"
            alt="Trip & Event Logo"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => navigate(item.href)}
              className={`navbar-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="navbar-cta">
          <Button onClick={() => navigate('/contact')}>Get Quote</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="navbar-mobile">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                setIsOpen(false);
              }}
              className={`navbar-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <div className="navbar-mobile-cta">
            <Button
              onClick={() => {
                navigate('/contact');
                setIsOpen(false);
              }}
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
