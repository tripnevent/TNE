import './ctaSection.css';
import { Button } from '@/components/ui/button';

export default function CtaSection({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Create Your Cinematic Journey?</h2>
        <p className="cta-subtitle">
          Let's turn your travel dreams into an unforgettable cinematic
          experience
        </p>
        <div className="cta-buttons">
          <button className="cta-button-outline">Chat on WhatsApp</button>
        </div>
      </div>
    </section>
  );
}
