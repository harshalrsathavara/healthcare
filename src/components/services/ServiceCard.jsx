import { Link } from 'react-router-dom';
import FadeUp from '../common/FadeUp';

/**
 * Compact service card: a slim image with an overlapping icon badge, then a
 * tight body (title, one-line tagline, "Learn more"). Deliberately smaller
 * than a full media card so a row of categories stays balanced and scannable.
 */
export default function ServiceCard({ service, delay = 0 }) {
  return (
    <FadeUp delay={delay} className="ph-card h-full flex flex-col">
      <div className="ph-img-hover relative" style={{ height: 168 }}>
        <img src={service.cardImage} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(0,165,176,0.05) 0%, rgba(14,46,51,0.35) 100%)' }}
        />
        {service.icon && (
          <span className="ph-card-icon absolute left-5 bottom-0 translate-y-1/2 shadow-ph-sm">
            <i className={`bi ${service.icon}`} />
          </span>
        )}
      </div>
      <div className="p-5 pt-9 flex flex-col flex-grow">
        <h3 className="text-base mb-2">{service.title}</h3>
        <p className="text-sm mb-4 flex-grow" style={{ color: 'var(--ph-muted)' }}>
          {service.tagline}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="ph-service-link text-sm font-semibold mt-auto"
          style={{ color: 'var(--ph-primary)' }}
        >
          Learn More <i className="bi bi-arrow-right" />
        </Link>
      </div>
    </FadeUp>
  );
}
