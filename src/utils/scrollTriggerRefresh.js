import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Image-heavy pages shift layout as assets load, which can throw off
 * ScrollTrigger's cached trigger positions (calculated before images have
 * a height). Re-measure once everything has settled so `once: true`
 * reveal animations still fire at the right scroll position.
 */
export default function setupScrollTriggerRefresh() {
  const refresh = () => ScrollTrigger.refresh();

  if (document.readyState === 'complete') {
    refresh();
  } else {
    window.addEventListener('load', refresh, { once: true });
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refresh);
  }

  const images = Array.from(document.images);
  images.forEach((img) => {
    if (!img.complete) {
      img.addEventListener('load', refresh, { once: true });
    }
  });
}
