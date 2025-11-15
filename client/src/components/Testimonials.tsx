import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import './testimonials.css';

export default function Testimonials() {
  const testimonialData = [
    {
      video: '/testimonials/happycouple.mp4',
      text: `Our journey with Trip and Events was absolutely amazing...`,
      name: 'Happy Couple from India',
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const videoRef = useRef(null);

  const prevTestimonial = () => {
    setCurrent(prev => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent(prev => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  const { video, text, name } = testimonialData[current];

  const toggleMute = () => {
    const videoEl = videoRef.current;
    videoEl.muted = !videoEl.muted;
    setIsMuted(videoEl.muted);
  };

  const handleVolumeChange = (e) => {
    const v = Number(e.target.value);
    setVolume(v);
    const videoEl = videoRef.current;
    videoEl.volume = v;

    if (v > 0) {
      videoEl.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Meet our happy faces</h2>
        <p className="testimonials-subtitle">Real stories from real adventures</p>
        <div className="testimonial-review">
          <p className="testimonial-text">{text}</p>
          <p className="testimonial-name">— {name}</p>
        </div>
      </div>

      <div className="testimonial-video-container">
        <button className="carousel-arrow left" onClick={prevTestimonial}>
          <ChevronLeft size={40} />
        </button>

        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="testimonial-video"
            src={video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
          ></video>

          {/* Volume UI */}
          <div className="volume-control">
            <button className="mute-btn" onClick={toggleMute}>
              {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
            </button>

            <input
              className="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>

        <button className="carousel-arrow right" onClick={nextTestimonial}>
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
}
