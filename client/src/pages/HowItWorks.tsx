import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import Faq from '@/components/Faq';

export default function HowItWorks() {
  const [, navigate] = useLocation();

  const steps = [
    {
      step: '01',
      title: 'Share Your Vision',
      description:
        "Tell us your dream destination, occasion, and cinematic style. We'll listen to your ideas and understand your unique story.",
      details: [
        'Discuss your travel dates and budget',
        'Share your vision and preferences',
        'Explore destination options',
      ],
    },
    {
      step: '02',
      title: 'Custom Planning',
      description:
        'We craft a personalized itinerary with locations and filming schedule. Our team will plan every detail to perfection.',
      details: [
        'Create a detailed itinerary',
        'Plan filming locations and schedules',
        'Arrange logistics and accommodations',
      ],
    },
    {
      step: '03',
      title: 'Cinematic Journey',
      description:
        'Travel with our professional crew capturing every magical moment. Experience your journey while we document it beautifully.',
      details: [
        'Travel with professional cinematographers',
        'Capture stunning 4K footage',
        'Create memorable experiences',
      ],
    },
    {
      step: '04',
      title: 'Relive Forever',
      description:
        'Receive your professionally edited film within 30 days. Your cinematic masterpiece will be ready to share with the world.',
      details: [
        'Professional color grading and editing',
        'Custom music and sound design',
        'Multiple format deliverables',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            How It Works
          </h1>
          <p className="text-lg text-muted-foreground">
            From vision to reality in 4 simple steps
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-background flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {idx % 2 === 0 ? (
                  <>
                    <div>
                      <div className="text-7xl font-playfair font-bold text-accent mb-6 opacity-20">
                        {item.step}
                      </div>
                      <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
                        {item.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-3">
                        {item.details.map((detail, didx) => (
                          <li key={didx} className="flex items-start gap-3">
                            <span className="text-accent font-bold mt-1">
                              ✓
                            </span>
                            <span className="text-muted-foreground">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                      <p className="text-muted-foreground">
                        {item.title} Image
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                      <p className="text-muted-foreground">
                        {item.title} Image
                      </p>
                    </div>
                    <div>
                      <div className="text-7xl font-playfair font-bold text-accent mb-6 opacity-20">
                        {item.step}
                      </div>
                      <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
                        {item.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-3">
                        {item.details.map((detail, didx) => (
                          <li key={didx} className="flex items-start gap-3">
                            <span className="text-accent font-bold mt-1">
                              ✓
                            </span>
                            <span className="text-muted-foreground">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's create your cinematic travel experience today
          </p>
          <Button
            size="lg"
            className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent font-inter font-semibold px-8"
            onClick={() => navigate('/contact')}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
