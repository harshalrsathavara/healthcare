import { siteName } from '../../data/siteContent';

/**
 * Horizontal brand lockup (emblem + "fidiviaa" wordmark), composed from the
 * official logo artwork. Two variants swap by background:
 *   - light wordmark for dark backgrounds (transparent navbar, footer)
 *   - navy wordmark for light backgrounds (scrolled navbar, light pages)
 * In the navbar the swap is driven by the `.ph-navbar.scrolled` class (see
 * index.css); the footer always uses the light variant via the `light` prop.
 */
export default function BrandLogo({ light = false, className = '' }) {
  if (light) {
    return (
      <span className={`inline-flex items-center ${className}`}>
        <img src="/images/logo-lockup-light.png" alt={siteName} className="h-[40px] w-auto" />
      </span>
    );
  }

  return (
    <span className={`brand-logo inline-flex items-center ${className}`}>
      <img
        src="/images/logo-lockup-light.png"
        alt={siteName}
        className="brand-logo-img brand-logo-img--light h-[46px] w-auto"
      />
      <img
        src="/images/logo-lockup.png"
        alt=""
        aria-hidden="true"
        className="brand-logo-img brand-logo-img--dark h-[46px] w-auto"
      />
    </span>
  );
}
