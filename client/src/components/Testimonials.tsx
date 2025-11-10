import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./testimonials.css";

export default function Testimonials() {



 const testimonialData = [
  {
    text: `Our journey with Trip and Events was absolutely amazing. We visited Abu Dhabi and Dubai,
    exploring Ferrari World, Yas Island, and Water World. Every moment was fun and memorable.
    The team made the entire experience smooth and enjoyable. We will definitely choose Trip and Events again.`,
    name: "Happy Couple from India",
    img: "/images/testimonial1.jpg",
  },
  {
    text: `Our pre-wedding shoot was truly magical! Every moment was captured beautifully in a cinematic style,
    making it unforgettable. The Trip and Events team ensured everything went smoothly, and the entire experience
    was fun and memorable. Highly recommended for special journeys.`,
    name: "Priya & Raj",
    img: "/images/testimonial2.jpg",
  },
  {
    text: `The group adventure package exceeded our expectations. From planning to execution, everything was smooth
    and enjoyable. Every moment was fun, memorable, and cinematic. The Trip and Events team made the experience
    seamless and truly remarkable.`,
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
