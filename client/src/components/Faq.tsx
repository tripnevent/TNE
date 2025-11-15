import { useState } from "react";
import "./faq.css";

type FAQItem = {
  q: string;
  a: string;
};

const faqData: FAQItem[] = [
  {
    q: "What is included in a Cinematrip package?",
    a: "Our packages include professional cinematography, editing, color grading, and a final 4K film. Accommodations and meals are customizable based on your package.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 10 days in advance to ensure availability and allow time for proper planning and preparation.",
  },
  {
    q: "Can I customize my itinerary?",
    a: "Absolutely! We specialize in creating custom itineraries tailored to your specific needs, preferences, and budget.",
  },
  {
    q: "What if weather affects our shoot?",
    a: "We have contingency plans for weather-related issues. Our team is experienced in working with various weather conditions and will reschedule shoots if necessary.",
  },
  {
    q: "Do you provide travel insurance?",
    a: "Travel insurance is not included in our packages, but we can recommend trusted insurance providers and assist with the booking process.",
  },
  {
    q: "How many people can travel in a group?",
    a: "Group sizes can vary from 2 people to larger groups. We can accommodate groups of any size with proper planning and coordination.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know about Cinematrips</p>
        </div>

        <div className="faq-items">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item ${openIndex === idx ? "open" : ""}`}
              onClick={() => toggleFAQ(idx)}
            >
              <h3 className="faq-question">{item.q}</h3>
              <p className="faq-answer">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
