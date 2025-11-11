import "./featuredExperiences.css";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Music Album Trip",
    description: "Create your personal music video while traveling to exotic destinations",
    duration: "5 Nights / 6 Days",
    video: "/music-album.mp4", // local mp4
    type: "video", // "video" | "youtube"
  },
  {
    title: "Pre-Wedding Shoot",
    description: "Cinematic pre-wedding films in the most romantic locations",
    duration: "5 Nights / 6 Days",
    video: "/pre-wedding.mp4",
    type: "video",
  },
  {
    title: "Group Adventure",
    description: "Epic group adventures captured in stunning cinematic style",
    duration: "5 Nights / 6 Days",
    video: "https://www.youtube.com/embed/J1Y5QXAsp3Y?si=gfE_lXZjNHoACdd9",
    type: "youtube",
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="featured-experiences">
      <div className="featured-experiences-container">
        {/* Header */}
        <div className="featured-experiences-header">
          <h2 className="featured-experiences-title">Featured Experiences</h2>
          <p className="featured-experiences-subtitle">
            Cinematic travel packages crafted for your unique story
          </p>
        </div>

        {/* Grid */}
        <div className="featured-experiences-grid">
          {experiences.map((exp, idx) => (
            <div key={idx} className="featured-experience-card">
              <div className="featured-experience-image">
                {exp.type === "video" ? (
                  <video
                    src={exp.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="featured-experience-video"
                  />
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={exp.video}
                    title={exp.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="featured-experience-content">
                <h3 className="featured-experience-title">{exp.title}</h3>
                <p className="featured-experience-description">{exp.description}</p>
                <p className="featured-experience-duration">{exp.duration}</p>
                <button className="featured-experience-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
