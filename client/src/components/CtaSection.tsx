import React from 'react';
import './ctaSection.css';

interface ButtonConfig {
  label: string;
  onClick?: () => void;
  variant?: 'solid' | 'outline';
}

interface CtaSectionProps {
  title: string;
  subtitle: string;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
  background?: string; // image URL or color
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  background,
}) => {
  const sectionStyle = {
    backgroundColor: '#000',
  };

  return (
    <section className="cta-section" style={sectionStyle}>
      <div className="cta-overlay">
        <div className="cta-container">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
          <div className="cta-buttons">
            {primaryButton && (
              <button
                className={`cta-button ${
                  primaryButton.variant === 'outline'
                    ? 'cta-button-outline'
                    : 'cta-button-solid'
                }`}
                onClick={primaryButton.onClick}
              >
                {primaryButton.label}
              </button>
            )}
            {secondaryButton && (
              <button
                className={`cta-button ${
                  secondaryButton.variant === 'outline'
                    ? 'cta-button-outline'
                    : 'cta-button-solid'
                }`}
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
