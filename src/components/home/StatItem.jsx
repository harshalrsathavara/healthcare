import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animated stat with an oversized "ghost" number behind it. The foreground
 * value counts up (GSAP), the suffix is accented, and the whole cell reveals
 * on scroll. Ghost stays static as the final value for depth.
 */
export default function StatItem({ stat, delay = 0 }) {
  const wrapRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const counterEl = counterRef.current;
    if (!wrap || !counterEl) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          delay,
          scrollTrigger: { trigger: wrap, start: 'top 90%', once: true },
        }
      );

      if (reduce) {
        counterEl.textContent = stat.value.toLocaleString();
        return;
      }

      const counter = { value: 0 };
      gsap.to(counter, {
        value: stat.value,
        duration: 1.8,
        ease: 'power3.out',
        delay,
        scrollTrigger: { trigger: wrap, start: 'top 90%', once: true },
        onUpdate: () => {
          counterEl.textContent = Math.floor(counter.value).toLocaleString();
        },
      });
    });

    return () => ctx.revert();
  }, [stat.value, delay]);

  return (
    <div ref={wrapRef} className="ph-stat-cell">
      <div className="ph-stat-number">
        <span ref={counterRef}>0</span>
        <span className="ph-stat-suffix">{stat.suffix}</span>
      </div>
      <div className="ph-stat-label">{stat.label}</div>
    </div>
  );
}
