import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP-driven replacement for the original IntersectionObserver + CSS
 * `.fade-up`/`.in-view` reveal-on-scroll pattern (see public/js/app.js).
 * Same visual behavior: opacity 0 -> 1, translateY(24px) -> 0, ~0.7s.
 */
export default function FadeUp({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <Tag ref={ref} className={`fade-up ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
