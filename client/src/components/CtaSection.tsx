import React from 'react';
import './ctaSection.css';

interface ButtonConfig {
  label: string;
  onClick?: () => void;
  variant?: 'solid' | 'outline' | 'experience';
}

interface CtaSectionProps {
  title: string;
  subtitle: string;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
}) => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#000', // fixed background
    color: '#fff',
  };

  const renderButton = (btn: ButtonConfig) => {
    if (btn.variant === 'experience') {
      return (
        <button
          className="experiences-page-button"
          onClick={() => {
            btn.onClick?.();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {btn.label}
        </button>
      );
    }

    return (
      <button
        className={`cta-button ${
          btn.variant === 'outline' ? 'cta-button-outline' : 'cta-button-solid'
        }`}
        onClick={() => {
          btn.onClick?.();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        {btn.label}
      </button>
    );
  };

  return (
    <section className="cta-section" style={sectionStyle}>
      <div className="cta-overlay">
        <div className="cta-container">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
          <div className="cta-buttons">
            {primaryButton && renderButton(primaryButton)}
            {secondaryButton && renderButton(secondaryButton)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
