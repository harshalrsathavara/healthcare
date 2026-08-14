import { Link } from 'react-router-dom';
import FadeUp from '../common/FadeUp';

/**
 * Icon-led service card with an editorial treatment: a colored top accent bar,
 * a ghosted index number, and a left-aligned icon. No photography — the icon
 * and structure carry the category, keeping a row of services clean and sharp.
 */
export default function ServiceCard({ service, index = 0, delay = 0 }) {
  return (
    <FadeUp delay={delay} className="ph-service-card h-full flex flex-col">
      <span className="ph-service-card__bar" aria-hidden="true" />
      <span className="ph-service-card__num" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="flex flex-col flex-grow p-5">
        {service.icon && (
          <span className="ph-service-card__icon">
            <i className={`bi ${service.icon}`} />
          </span>
        )}
        <h3 className="text-base mt-4 mb-2">{service.title}</h3>
        <p className="mb-4 flex-grow" style={{ color: 'var(--ph-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
          {service.tagline}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="ph-service-link font-semibold mt-auto"
          style={{ color: 'var(--ph-primary)', fontSize: '0.8rem' }}
        >
          Learn More <i className="bi bi-arrow-right" />
        </Link>
      </div>
    </FadeUp>
  );
}
