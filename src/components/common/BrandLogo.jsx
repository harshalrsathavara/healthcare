import { siteName } from '../../data/siteContent';

/**
 * Brand emblem (icon only, no wordmark). Used in the navbar and footer; the
 * colourful mark reads on both light and dark backgrounds.
 */
export default function BrandLogo({ className = '' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img src="/images/logo-emblem.png" alt={siteName} className="h-12 w-auto" />
    </span>
  );
}
