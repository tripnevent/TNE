import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Quote request sent successfully! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        date: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Let's start planning your cinematic journey
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-background flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-8">
                Request a Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="font-inter"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="font-inter"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="font-inter"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground font-inter focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a destination</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Bali">Bali</option>
                    <option value="Europe">Europe</option>
                    <option value="Kashmir">Kashmir</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Travel Date
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="font-inter"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cinematic travel vision..."
                    rows={5}
                    className="font-inter"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold py-3"
                >
                  {isSubmitting ? "Sending..." : "Send Quote Request"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:info@tripandevent.com"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    info@tripandevent.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-3">
                    Phone
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-3">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-3">
                    Office Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-3">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Nearly a decade of experience in cinematic travel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Professional 4K cinematography and editing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Customizable packages for every budget</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Dedicated team for your journey</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
