import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Hero({ heading, subheading, ctaText, ctaLink, image }) {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  // Staggered entrance (mirrors the original .ph-hero-in CSS keyframes, now GSAP-driven).
  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current].filter(Boolean);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        els,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.18 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Subtle parallax on the hero background, matching the original 0.25x scroll factor.
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return undefined;
    const setY = gsap.quickSetter(el, 'y', 'px');
    const onScroll = () => setY(window.scrollY * 0.25);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollCue = () => {
    const hero = heroRef.current;
    const next = hero ? hero.nextElementSibling : null;
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight - 84, behavior: 'smooth' });
    }
  };

  return (
    <section className="ph-hero" ref={heroRef}>
      {image && (
        <div ref={parallaxRef} data-parallax style={{ backgroundImage: `url('${image}')` }} />
      )}

      <span className="ph-hero-shape shape-1" />
      <span className="ph-hero-shape shape-2" />
      <span className="ph-hero-shape shape-3" />

      <div className="container">
        <div className="max-w-2xl">
          <h1 ref={headingRef} className="mb-3">
            {heading}
          </h1>
          {subheading && (
            <p ref={subRef} className="text-lg mb-6" style={{ color: 'rgba(255,255,255,.85)', maxWidth: 620 }}>
              {subheading}
            </p>
          )}
          {ctaText && ctaLink && (
            <Link ref={ctaRef} to={ctaLink} className="btn btn-ph-primary btn-lg inline-block">
              {ctaText}
            </Link>
          )}
        </div>
      </div>

      <button type="button" className="ph-hero-scroll-cue" aria-label="Scroll down" onClick={handleScrollCue}>
        <i className="bi bi-chevron-down" />
      </button>
    </section>
  );
}
