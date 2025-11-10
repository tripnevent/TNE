import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLocation } from 'wouter';
import './Contact.css';

export default function Contact() {
  const [, navigate] = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Quote request sent successfully! We'll contact you soon.");
      setFormData({ name: '', email: '', phone: '', destination: '', date: '', message: '' });
    } catch {
      toast.error('Failed to send quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Navigation />

      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Let's start planning your cinematic journey</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="contact-main-container">
        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form">
            <h2>Request a Quote</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your cinematic travel vision..." rows={5} />
              </div>
              <Button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? 'Sending...' : 'Send Quote Request'}
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-block">
              <h3>Email</h3>
              <a href="mailto:hello@tripandevent.com">hello@tripandevent.com</a>
            </div>
            <div className="info-block">
              <h3>Phone</h3>
              <a href="tel:+919007000777">+91 900 700 0777</a>
            </div>
            <div className="info-block">
              <h3>WhatsApp</h3>
              <a href="https://wa.me/+919007000777" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
            <div className="info-block">
              <h3>Office Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✓ Nearly a decade of experience in cinematic travel</li>
            <li>✓ Professional 4K cinematography and editing</li>
            <li>✓ Customizable packages for every budget</li>
            <li>✓ Dedicated team for your journey</li>
          </ul>
          <div className="cta-btn">
            <Button size="lg" onClick={() => navigate('/contact')}>Request Your Quote</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
