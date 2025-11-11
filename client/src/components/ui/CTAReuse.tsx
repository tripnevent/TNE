import React from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

interface CTAReuseProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string;
  textColor?: string;
}

const CTAReuse: React.FC<CTAReuseProps> = ({
  title,
  text,
  buttonText,
  buttonLink,
  backgroundColor = "#000000",
  textColor = "#ffffff",
}) => {
  const [, navigate] = useLocation();

  return (
    <section
      className="cta-section"
      style={{
        background: backgroundColor,
        color: textColor,
      }}
    >
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="cta-left">
          <motion.h2
            className="cta-title"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="cta-text"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {text}
          </motion.p>
        </div>

        <motion.div
          className="cta-right"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            className="cta-button"
            onClick={() => navigate(buttonLink)}
          >
            {buttonText}
            <span className="cta-arrow">→</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTAReuse;
