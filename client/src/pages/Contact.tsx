import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "./Contact.css";
import Headeruse from "@/components/ui/Headeruse";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Quote request sent successfully! We'll contact you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Failed to send quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Navigation />

      <Headeruse
        title="Contact Us"
        subtitle="Get in touch for your cinematic travel quote"
        backgroundColor="#000000"
        textColor="#ffffff"
      />

      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form glass-card">
            <h2>Request a Quote</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your cinematic travel vision..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? "Sending..." : "Send Quote Request"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="info-block">
              <Mail className="info-icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:hello@tripandevent.com">
                  hello@tripandevent.com
                </a>
              </div>
            </div>

            <div className="info-block">
              <Phone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+919007000777">+91 900 700 0777</a>
              </div>
            </div>

            <div className="info-block">
              <MessageCircle className="info-icon" />
              <div>
                <h3>WhatsApp</h3>
                <a
                  href="https://wa.me/+919007000777"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="info-block">
              <Clock className="info-icon" />
              <div>
                <h3>Office Hours</h3>
                <p>
                  Mon - Fri: 9:00 AM – 6:00 PM<br />
                  Sat: 10:00 AM – 4:00 PM<br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>
              <CheckCircle className="check-icon" /> Nearly a decade of cinematic
              travel experience
            </li>
            <li>
              <CheckCircle className="check-icon" /> Professional 4K
              cinematography and editing
            </li>
            <li>
              <CheckCircle className="check-icon" /> Customizable packages for
              every budget
            </li>
            <li>
              <CheckCircle className="check-icon" /> Dedicated team for your
              journey
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
