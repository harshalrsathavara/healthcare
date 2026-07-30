import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import FadeUp from '../components/common/FadeUp';
import SectionHeading from '../components/common/SectionHeading';
import PageHero from '../components/common/PageHero';
import ProcessFlow from '../components/services/ProcessFlow';
import CtaBanner from '../components/common/CtaBanner';
import services, { processFlows } from '../data/services';
import { serviceDetailFallbackImage } from '../data/siteContent';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const heroImage = service.bannerImage || service.overviewImage || serviceDetailFallbackImage;
  const flowSteps = service.flow ? processFlows[service.flow] : null;
  const [leadParagraph, ...restParagraphs] = service.overview.paragraphs;

  return (
    <>
      <Seo title={service.title} description={service.tagline} image={service.bannerImage} />

      <PageHero eyebrow="Services" title={service.title} image={heroImage} minHeight={420}>
        <p className="text-lg mx-auto mt-4 mb-6" style={{ color: 'rgba(255,255,255,.88)', maxWidth: 640 }}>
          {service.tagline}
        </p>
        <Link to="/contact-us" className="btn btn-ph-primary btn-lg">
          Connect With Us
        </Link>
      </PageHero>

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
                      <i className="bi bi-check-circle-fill text-ph-secondary mt-1" />
                      <span>{b}</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp className="lg:order-2">
              <span className="section-eyebrow">Services Provided</span>
              <p className="font-semibold mb-4" style={{ color: 'var(--ph-dark)' }}>
                {service.servicesProvided.intro}
              </p>
              <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.servicesProvided.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <i className="bi bi-check-circle-fill text-ph-secondary mt-1" />
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.1} className="lg:order-1">
              <div className="ph-img-hover rounded-2xl shadow-ph-lg overflow-hidden">
                <img src={service.provideImage} alt={`${service.title} team`} className="w-full h-full object-cover" />
              </div>
            </FadeUp>
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
