import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import TestimonialCard from './TestimonialCard';
import FadeUp from '../common/FadeUp';

const AUTO_INTERVAL = 5000;

/**
 * Hand-built replacement for the original Bootstrap JS carousel
 * (data-bs-ride="carousel" data-bs-pause="hover"): auto-advances every 5s,
 * pauses on hover, same slide transition timing (0.6s), same indicator/arrow UI.
 */
export default function TestimonialCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const count = testimonials.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    gsap.to(track, { xPercent: -(100 / count) * index, duration: 0.6, ease: 'power2.inOut' });
  }, [index, count]);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const startTimer = () => {
    stopTimer();
    if (count <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const goTo = (i) => setIndex(((i % count) + count) % count);

  return (
    <FadeUp
      as="div"
      className="ph-testimonial-carousel relative"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex" style={{ width: `${count * 100}%` }}>
          {testimonials.map((t) => (
            <div key={t.id} className="carousel-item px-2" style={{ width: `${100 / count}%` }}>
              <div className="mx-auto" style={{ maxWidth: 640 }}>
                <TestimonialCard testimonial={t} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-2">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            aria-label={`Testimonial ${i + 1}`}
            aria-current={i === index ? 'true' : 'false'}
            className={`ph-carousel-indicator ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="ph-carousel-arrow hidden md:flex absolute top-1/2 -translate-y-1/2"
            style={{ left: -6 }}
            onClick={() => goTo(index - 1)}
            aria-label="Previous"
          >
            <i className="bi bi-chevron-left" />
          </button>
          <button
            type="button"
            className="ph-carousel-arrow hidden md:flex absolute top-1/2 -translate-y-1/2"
            style={{ right: -6 }}
            onClick={() => goTo(index + 1)}
            aria-label="Next"
          >
            <i className="bi bi-chevron-right" />
          </button>
        </>
      )}
    </FadeUp>
  );
}
