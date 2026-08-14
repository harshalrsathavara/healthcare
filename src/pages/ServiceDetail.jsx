import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import FadeUp from '../components/common/FadeUp';
import SectionHeading from '../components/common/SectionHeading';
import ProcessFlow from '../components/services/ProcessFlow';
import CtaBanner from '../components/common/CtaBanner';
import services, { processFlows } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const flowSteps = service.flow ? processFlows[service.flow] : null;
  const [leadParagraph, ...restParagraphs] = service.overview.paragraphs;

  return (
    <>
      <Seo title={service.title} description={service.tagline} image={service.bannerImage} />

      {/* Text-only page header */}
      <section className="pt-6">
        <div className="container">
          <div className="ph-text-hero">
            <span className="ph-text-hero__glow ph-text-hero__glow--a" aria-hidden="true" />
            <span className="ph-text-hero__glow ph-text-hero__glow--b" aria-hidden="true" />

            <FadeUp className="relative text-center mx-auto" style={{ maxWidth: 760 }}>
              <span className="ph-pill-eyebrow">
                <i className={`bi ${service.icon}`} /> Services
              </span>
              <h1 className="ph-text-hero__title">{service.title}</h1>
              <p className="ph-text-hero__sub">{service.tagline}</p>
              <div className="mt-7">
                <Link to="/contact-us" className="btn btn-ph-primary btn-lg">
                  Connect With Us
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="section-eyebrow">Overview</span>
              <p className="mb-4" style={{ color: 'var(--ph-body)' }}>
                {leadParagraph}
              </p>
              {service.overview.bullets?.length > 0 && (
                <ul className="list-none p-0 m-0 mb-4 flex flex-col gap-2">
                  {service.overview.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <i
                        className="bi bi-check-circle-fill shrink-0"
                        style={{ color: '#000000', fontSize: '1rem', lineHeight: '1.6rem' }}
                      />
                      <span style={{ lineHeight: '1.6rem' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {restParagraphs.map((p) => (
                <p key={p} className="mb-3" style={{ color: 'var(--ph-body)' }}>
                  {p}
                </p>
              ))}
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="ph-img-hover rounded-2xl shadow-ph-lg overflow-hidden">
                <img src={service.overviewImage} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="section-py bg-ph-alt">
        <div className="container">
          {/* Header row */}
          <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div style={{ maxWidth: 620 }}>
              <span className="section-eyebrow">Services Provided</span>
              <p className="font-semibold mb-2" style={{ color: 'var(--ph-dark)', fontSize: '1.25rem', lineHeight: 1.4 }}>
                {service.servicesProvided.intro}
              </p>
              <p className="mb-0" style={{ color: 'var(--ph-muted)' }}>
                A dedicated, HIPAA-compliant team owns each step end to end — so nothing slips through
                the cracks and your in-house staff stays focused on patient care.
              </p>
            </div>
            <Link to="/contact-us" className="btn btn-ph-primary ph-service-link shrink-0">
              Talk to our team <i className="bi bi-arrow-right" />
            </Link>
          </FadeUp>

          {/* Capability cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.servicesProvided.bullets.map((b, i) => (
              <FadeUp key={b} delay={i * 0.05} className="ph-cap-card">
                <span className="ph-cap-card__icon">
                  <i className="bi bi-check-lg" />
                </span>
                <span>{b}</span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process flow (featured services only) */}
      {flowSteps && (
        <section className="section-py">
          <div className="container">
            <SectionHeading
              eyebrow="How It Works"
              title={
                service.flow === 'medical-billing'
                  ? 'The End-to-End Billing Process'
                  : 'The Automation & Analytics Workflow'
              }
              subtitle="A connected, transparent process — every step measured, optimized, and built to protect revenue."
            />
            <ProcessFlow steps={flowSteps} />
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
