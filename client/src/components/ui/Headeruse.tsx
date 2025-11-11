import React from "react";
import "./Headeruse.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundColor?: string;
  textColor?: string;
  centerText?: boolean;
}



const Headeruse: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundColor = "#000000",
  textColor = "#ffffff",
  centerText = true,
}) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundColor,
        color: textColor,
        textAlign: centerText ? "center" : "left",
      }}
    >
      <div className="hero-content">
        <h1 className="use-hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default Headeruse;
