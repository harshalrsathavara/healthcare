import { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import setupScrollTriggerRefresh from '../../utils/scrollTriggerRefresh';

export default function Layout() {
  const { pathname } = useLocation();

  // Take over scroll handling from the browser so it doesn't restore the
  // previous page's scroll position after a client-side navigation.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Reset to the top on every route change, before the new page paints.
  // `behavior: 'instant'` overrides the global `scroll-behavior: smooth` so
  // this is an immediate jump, not an interruptible animated scroll.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    // Let the new page's content mount, then re-measure ScrollTrigger
    // positions once its images/layout have settled.
    const id = requestAnimationFrame(() => setupScrollTriggerRefresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className={pathname === '/' ? 'main-home' : ''}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
