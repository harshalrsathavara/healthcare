import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animated stat counter, GSAP replacement for the original rAF + easeOutCubic
 * counter in public/js/app.js (same ~1.6s duration, eased finish).
 */
export default function StatItem({ stat, delay = 0 }) {
  const wrapRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const counterEl = counterRef.current;
    if (!wrap || !counterEl) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(wrap, { opacity: 0, y: 24 }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        delay,
        scrollTrigger: { trigger: wrap, start: 'top 88%', once: true },
      });

      const counter = { value: 0 };
      gsap.to(counter, {
        value: stat.value,
        duration: 1.6,
        ease: 'power3.out',
        delay,
        scrollTrigger: { trigger: wrap, start: 'top 88%', once: true },
        onUpdate: () => {
          counterEl.textContent = Math.floor(counter.value).toLocaleString();
        },
      });
    });

    return () => ctx.revert();
  }, [stat.value, delay]);

  return (
    <div ref={wrapRef} className="text-center">
      <div className="ph-stat-number">
        <span ref={counterRef}>0</span>
        {stat.suffix}
      </div>
      <div className="text-base font-semibold mt-2" style={{ color: 'var(--ph-primary)' }}>
        {stat.label}
      </div>
    </div>
  );
}
