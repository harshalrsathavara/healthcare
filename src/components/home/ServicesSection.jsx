import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import FadeUp from '../common/FadeUp';
import services from '../../data/services';

const bySlug = (slug) => services.find((s) => s.slug === slug);

// Bento arrangement: one tall featured tile, one wide feature, and four
// supporting tiles. Order here drives CSS-grid placement (see span classes).
const layout = [
  { slug: 'medical-billing', variant: 'feature', span: 'lg:col-span-2 lg:row-span-2' },
  { slug: 'rcm-automation-and-analytics', variant: 'wide', span: 'sm:col-span-2 lg:col-span-2' },
  { slug: 'patient-access-services', variant: 'small', span: '' },
  { slug: 'him-and-clinical-services', variant: 'small', span: '' },
  { slug: 'it-services', variant: 'wide', span: 'sm:col-span-2 lg:col-span-2' },
  { slug: 'patient-financial-services', variant: 'wide', span: 'sm:col-span-2 lg:col-span-2' },
];

const featureHighlights = [
  'Charge capture, coding & claim scrubbing',
  'Clean claim submission & clearinghouse management',
  'Denial resolution and payer follow-up',
  'Payment posting, patient statements & reporting',
];

function FeatureTile({ service }) {
  return (
    <div className="ph-bento ph-bento--feature h-full flex flex-col p-8">
      <div className="flex items-center justify-between">
        <span className="ph-bento__icon ph-bento__icon--light">
          <i className={`bi ${service.icon}`} />
        </span>
        <span className="ph-bento__badge">Flagship</span>
      </div>

      <h3 className="text-white mt-6 mb-3" style={{ fontSize: '1.6rem', fontWeight: 700 }}>
        {service.title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,.82)', lineHeight: 1.6, maxWidth: 440 }}>
        {service.tagline}
      </p>

      <ul className="ph-bento__list list-none p-0 m-0 mt-7 flex flex-col gap-3">
        {featureHighlights.map((h) => (
          <li key={h} className="flex items-start gap-3">
            <i className="bi bi-check-circle-fill" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <Link to={`/services/${service.slug}`} className="ph-bento__link ph-bento__link--light mt-auto pt-8">
        Explore service <i className="bi bi-arrow-right" />
      </Link>
    </div>
  );
}

function StandardTile({ service, wide }) {
  return (
    <div className="ph-bento h-full flex flex-col p-6">
      <span className="ph-bento__icon">
        <i className={`bi ${service.icon}`} />
      </span>
      <h3 className="mt-5 mb-2" style={{ fontSize: '1.05rem', fontWeight: 700 }}>
        {service.title}
      </h3>
      <p
        className="flex-grow"
        style={{ color: 'var(--ph-muted)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: wide ? 520 : undefined }}
      >
        {service.tagline}
      </p>
      <Link to={`/services/${service.slug}`} className="ph-bento__link mt-4">
        Learn More <i className="bi bi-arrow-right" />
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="section-py bg-ph-alt">
      <div className="container">
        <SectionHeading
          eyebrow="What We Offer"
          title="End-to-End Services"
          subtitle="From patient access to medical billing, HIM, healthcare IT, and RCM automation — specialized teams that protect revenue and reduce cost-to-collect for provider organizations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr gap-5">
          {layout.map((item, i) => {
            const service = bySlug(item.slug);
            if (!service) return null;
            return (
              <FadeUp key={item.slug} delay={i * 0.06} className={item.span}>
                {item.variant === 'feature' ? (
                  <FeatureTile service={service} />
                ) : (
                  <StandardTile service={service} wide={item.variant === 'wide'} />
                )}
              </FadeUp>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-ph-outline ph-service-link">
            View All Services <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
