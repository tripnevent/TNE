import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./testimonials.css";

export default function Testimonials() {
  const testimonialData = [
    {
      text: `The overall experience with Trip and Events was a fantastic and amazing journey.
      We had so much fun, created a lot of great memories. We visited Abu Dhabi and Dubai,
      Ferrari World, Yas Island, Water World, and so many memories that we have created to
      cherish forever. My experience with Trip and Events was the best ever. Thank you so much
      Trip and Events for this wonderful experience. We will definitely choose you next time as well.`,
      name: "Happy Couple from India",
      img: "/images/testimonial1.jpg",
    },
    {
      text: `Our pre-wedding shoot was magical! The team captured every moment beautifully, and
      the cinematic style made it unforgettable. Highly recommend Trip and Event for any special journey.`,
      name: "Priya & Raj",
      img: "/images/testimonial2.jpg",
    },
    {
      text: `The group adventure package exceeded all our expectations. From planning to execution,
      everything was smooth, fun, and cinematic. Loved every moment!`,
      name: "Adventure Group",
      img: "/images/testimonial3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  const { text, name, img } = testimonialData[current];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Travelers Say</h2>
          <p className="testimonials-subtitle">Real stories from real adventures</p>
        </div>

        <div className="testimonial-carousel">
          <button className="carousel-arrow left" onClick={prevTestimonial}>
            <ChevronLeft size={32} />
          </button>

          <div className="testimonial-card-single">
            <img className="testimonial-img" src={img} alt={name} />
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-text-box">{text}</p>
          </div>

          <button className="carousel-arrow right" onClick={nextTestimonial}>
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
