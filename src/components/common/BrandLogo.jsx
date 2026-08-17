import { siteName } from '../../data/siteContent';

/**
 * Brand lockup: colourful emblem + "Fidiviaa" wordmark. Used in the navbar and
 * footer; reads on both light and dark backgrounds.
 */
export default function BrandLogo({ light = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/images/fid_logo.png" alt={siteName} className="h-12 w-auto shrink-0" />
      <span
        className="font-heading font-bold leading-none"
        style={{
          fontSize: '1.6rem',
          letterSpacing: '-0.01em',
          color: light ? '#fff' : 'var(--ph-dark)',
        }}
      >
        {siteName}
      </span>
    </span>
  );
}
