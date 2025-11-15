import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'wouter';
import { Volume2, VolumeX } from 'lucide-react';
import './featuredExperiences.css';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export default function FeaturedExperiences() {
  const [location, navigate] = useLocation();

  // Store all YouTube players safely
  const playersRef = useRef<any[]>([]);
  const [muteState, setMuteState] = useState<{ [key: number]: boolean }>({});
  const [volumeState, setVolumeState] = useState<{ [key: number]: number }>({});

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
      title: 'Wedding Shoot',
      description:
        'Cinematic wedding films in the most romantic locations around the world',
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
            onReady: () => {
              playersRef.current[index] = player;
              setMuteState((prev) => ({ ...prev, [index]: true }));
              setVolumeState((prev) => ({ ...prev, [index]: 50 }));
              player.setVolume(50);
            },
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

  // Toggle Mute/Unmute
  const toggleMute = (index: number) => {
    const player = playersRef.current[index];
    if (!player) return;

    const isMuted = player.isMuted();

    if (isMuted) {
      player.unMute();
      setMuteState((prev) => ({ ...prev, [index]: false }));
    } else {
      player.mute();
      setMuteState((prev) => ({ ...prev, [index]: true }));
    }
  };

  // Adjust Volume
  const changeVolume = (index: number, level: number) => {
    const player = playersRef.current[index];
    if (!player) return;

    player.setVolume(level);
    setVolumeState((prev) => ({ ...prev, [index]: level }));

    if (level > 0) {
      player.unMute();
      setMuteState((prev) => ({ ...prev, [index]: false }));
    }
  };

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

                {/* AUDIO CONTROLS */}
                <div className="video-audio-controls">
                  <button
                    className="mute-btn"
                    onClick={() => toggleMute(idx)}
                  >
                    {muteState[idx] ? (
                      <VolumeX size={22} />
                    ) : (
                      <Volume2 size={22} />
                    )}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volumeState[idx] || 50}
                    className="volume-slider"
                    onChange={(e) =>
                      changeVolume(idx, Number(e.target.value))
                    }
                  />
                </div>
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
