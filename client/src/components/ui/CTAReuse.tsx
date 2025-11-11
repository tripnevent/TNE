import React from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import "./CTAReuse.css";

interface CTAReuseProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

const CTAReuse: React.FC<CTAReuseProps> = ({
  title,
  text,
  buttonText,
  buttonLink,
}) => {
  const [, navigate] = useLocation();

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-text">{text}</p>
          <Button className="cta-button" onClick={() => navigate(buttonLink)}>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAReuse;
