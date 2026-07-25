import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Navbar stays transparent over the hero and turns solid once the hero has
 * scrolled out of view — mirrors the original public/js/app.js threshold
 * logic (hero height minus navbar height, floor of 40px). Re-evaluated on
 * route change since each page has its own hero height (or none).
 */
export default function useScrollNavbar(navbarRef) {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const navbar = navbarRef.current;

    const update = () => {
      const hero = document.querySelector('.ph-hero');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const threshold = hero ? Math.max(hero.offsetHeight - navbarHeight, 40) : 40;
      setScrolled(window.scrollY > threshold);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [navbarRef, pathname]);

  return scrolled;
}
