import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./testimonials.css";

export default function Testimonials() {
  const testimonialData = [
    {
      video: "/customer-reviews.mp4",
      text: `Our journey with Trip and Events was absolutely amazing. We visited Abu Dhabi and Dubai,
      exploring Ferrari World, Yas Island, and Water World. Every moment was fun and memorable.
      The team made the entire experience smooth and enjoyable.`,
      name: "Happy Couple from India",
    },
    {
      video: "/videos/testimonial2.mp4",
      text: `Our pre-wedding shoot was truly magical! Every moment was captured beautifully in a cinematic style,
      making it unforgettable. The Trip and Events team ensured everything went smoothly, and the entire experience
      was fun and memorable.`,
      name: "Priya & Raj",
    },
    {
      video: "/videos/testimonial3.mp4",
      text: `The group adventure package exceeded our expectations. From planning to execution, everything was smooth
      and enjoyable. The Trip and Events team made the experience seamless and truly remarkable.`,
      name: "Adventure Group",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  const { video, text, name } = testimonialData[current];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Meet our happy faces</h2>
        <p className="testimonials-subtitle">Real stories from real adventures</p>
          <div className="testimonial-review">
        <p className="testimonial-text">{text}</p>
        <p className="testimonial-name">— {name}</p>
      </div>
      </div>

      <div className="testimonial-video-container">
        <button className="carousel-arrow left" onClick={prevTestimonial}>
          <ChevronLeft size={40} />
        </button>

        <video
          className="testimonial-video"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <button className="carousel-arrow right" onClick={nextTestimonial}>
          <ChevronRight size={40} />
        </button>
      </div>

    
    </section>
  );
}
