import { useEffect } from 'react';
import { useLocation } from 'wouter';
import './featuredExperiences.css';

// ✅ Declare YouTube API types globally so TS recognizes them
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export default function FeaturedExperiences() {
  const [location, navigate] = useLocation();

  const experiences = [
    {
      id: 'frAVP2fjCnU',
      start: 6,
      end: 52,
      title: 'Music Album Trip',
      description:
        'Create your personal music video while traveling to exotic destinations',
      duration: '5 Nights / 6 Days',
    },
    {
      id: 'matrHEYEaEU',
      start: 3,
      end: 22,
      title: 'Pre-Wedding Shoot',
      description:
        'Cinematic pre-wedding films in the most romantic locations around the world',
      duration: '5 Nights / 6 Days',
    },
    {
      id: 'sBOnQB5Q3w4',
      start: 0,
      end: null,
      title: 'Group Adventure',
      description:
        'Epic group adventures captured in stunning cinematic style for unforgettable memories',
      duration: '5 Nights / 6 Days',
    },
  ];

  useEffect(() => {
    // Load YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      experiences.forEach((exp, index) => {
        const player = new window.YT.Player(`yt-video-${index}`, {
          videoId: exp.id,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            loop: 0,
            start: exp.start,
            end: exp.end || undefined,
            playsinline: 1,
          },
          events: {
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                player.seekTo(exp.start || 0);
              }
            },
          },
        });
      });
    };
  }, []);

  return (
    <section className="featured-experiences">
      <div className="featured-experiences-container">
        <div className="featured-experiences-header">
          <h2 className="featured-experiences-title">Featured Experiences</h2>
          <p className="featured-experiences-subtitle">
            Cinematic travel packages crafted for your unique story
          </p>
        </div>

        <div className="featured-experiences-grid">
          {experiences.map((exp, idx) => (
            <div key={idx} className="featured-experience-card">
              <div className="featured-experience-image">
                <div
                  id={`yt-video-${idx}`}
                  className="featured-experience-video"
                ></div>
              </div>

              <div className="featured-experience-content">
                <h3 className="featured-experience-title">{exp.title}</h3>
                <p className="featured-experience-description">
                  {exp.description}
                </p>
                <p className="featured-experience-duration">{exp.duration}</p>

                <button
                  className="featured-experience-button"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate('/contact');
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
