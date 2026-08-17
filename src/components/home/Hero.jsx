import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import stats from '../../data/stats';

export default function Hero({ heading, subheading, ctaText, ctaLink, image }) {
  const parallaxRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  // Staggered entrance for the hero copy + stat cards.
  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current, statsRef.current].filter(Boolean);
    const ctx = gsap.context(() => {
      gsap.fromTo(els, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15 });
    });
    return () => ctx.revert();
  }, []);

  // Subtle parallax on the hero background.
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return undefined;
    const setY = gsap.quickSetter(el, 'y', 'px');
    const onScroll = () => setY(window.scrollY * 0.18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section>
      <div className="relative overflow-hidden bg-ph-primary" style={{ minHeight: '100vh' }}>
        {image && (
          <div
            ref={parallaxRef}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url('${image}')`, top: -40, bottom: -40 }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(100deg, rgba(4,38,43,0.88) 0%, rgba(5,64,70,0.55) 55%, rgba(8,90,96,0.28) 100%)' }}
        />

        <div className="container relative">
          <div className="px-2 sm:px-4 lg:px-6 py-14 lg:py-20 flex flex-col justify-center" style={{ minHeight: '100vh' }}>
            <div className="max-w-2xl">
              <h1 ref={headingRef} className="text-white mb-4" style={{ fontSize: 'clamp(1.9rem, 6vw, 4rem)', fontWeight: 800 }}>
                {heading}
              </h1>
              {subheading && (
                <p ref={subRef} className="text-lg mb-7" style={{ color: 'rgba(255,255,255,.88)', maxWidth: 560 }}>
                  {subheading}
                </p>
              )}
              <div ref={ctaRef} className="flex flex-wrap gap-3">
                {/* {ctaText && ctaLink && (
                  <Link to={ctaLink} className="btn btn-ph-primary btn-lg">
                    {ctaText}
                  </Link>
                )} */}
                {/* <Link to="/services" className="btn btn-ph-light btn-lg">
                  Our Services
                </Link> */}
              </div>
            </div>

            {/* Overlapping stat cards */}
            <div
              ref={statsRef}
              className="mt-10 lg:mt-0 lg:absolute lg:bottom-8 lg:right-8 lg:w-[420px]"
            >
              {/* <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.id} className="bg-white rounded-ph shadow-ph p-5">
                    <div
                      className="font-heading font-extrabold leading-none"
                      style={{ color: 'var(--ph-secondary)', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)' }}
                    >
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </div>
                    <div className="text-sm mt-2" style={{ color: 'var(--ph-dark)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))} */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
