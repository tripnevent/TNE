import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Yacht() {
  const [, navigate] = useLocation();

  const yachts = [
    {
      name: "Sunset Luxury Cruise",
      description: "Experience a serene sunset aboard our luxury yacht with premium amenities and personalized service.",
      highlights: ["Private bar & lounge", "Sunset deck seating", "Gourmet dining options"],
      image: "/images/yacht1.jpg",
    },
    {
      name: "Adventure & Watersports",
      description: "Perfect for thrill-seekers, enjoy water sports, jet skis, and diving activities while cruising the coast.",
      highlights: ["Jet skis & paddleboards", "Snorkeling spots", "Expert guides onboard"],
      image: "/images/yacht2.jpg",
    },
    {
      name: "Romantic Escape",
      description: "A dreamy yacht experience ideal for couples, featuring sunset sails, cozy seating, and private cabins.",
      highlights: ["Private cabins", "Romantic dinner setup", "Sunset sail"],
      image: "/images/yacht3.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            Yacht Experiences
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover luxury, adventure, and romance on the water
          </p>
        </div>
      </section>

      {/* Yacht Cards */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
          {yachts.map((yacht, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="h-64 md:h-48 w-full relative">
                <img
                  src={yacht.image}
                  alt={yacht.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-playfair text-2xl font-bold text-foreground mb-3">
                  {yacht.name}
                </h2>
                <p className="text-muted-foreground mb-4 flex-1">{yacht.description}</p>
                <ul className="mb-4 space-y-2">
                  {yacht.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigate("/contact")}
                  className="mt-auto bg-accent-foreground text-accent hover:bg-accent-foreground/90"
                >
                  Book Your Yacht
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Sail in Style?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Choose your perfect yacht experience and let us craft an unforgettable journey.
          </p>
          <Button
            size="lg"
            className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent font-inter font-semibold px-8"
            onClick={() => navigate("/contact")}
          >
            Get Your Private Yacht
          </Button>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
