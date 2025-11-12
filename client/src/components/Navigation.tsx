import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import "./navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Experiences", href: "/experiences" },
    { label: "Destinations", href: "/destinations" },
    { label: "Yacht", href: "/yacht" },
    { label: "How It Works", href: "/how-it-works" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img
            src="/weblogo.jpg"
            // src="/tnegreen.jpeg"
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
              onClick={() => navigate(item.href)}
              className={`navbar-link ${isActive(item.href) ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                setIsOpen(false);
              }}
              className={`navbar-link ${isActive(item.href) ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
