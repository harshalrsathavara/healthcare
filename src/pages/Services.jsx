import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import FadeUp from '../components/common/FadeUp';
import SectionHeading from '../components/common/SectionHeading';
import PageHero from '../components/common/PageHero';
import ServiceCard from '../components/services/ServiceCard';
import CtaBanner from '../components/common/CtaBanner';
import services from '../data/services';
import { servicesIndexHero } from '../data/siteContent';

export default function Services() {
  const standard = services.filter((s) => s.type === 'standard');
  const featured = services.filter((s) => s.type === 'featured');

  return (
    <>
      <Seo
        title="Our Services"
        description="End-to-end revenue cycle management, medical billing, HIM, patient access, and healthcare IT services for hospitals and provider organizations."
      />

      <PageHero
        eyebrow="Our Services"
        title="Revenue Cycle & Health IT Services That Perform"
        image={servicesIndexHero.image}
        minHeight={360}
      />

      {/* Standard service categories — compact cards */}
      <section className="section-py">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Core Service Lines"
            subtitle="Specialized teams across the revenue cycle and health IT — engaged individually or as a fully managed partnership."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standard.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured / flagship services — larger blocks */}
      <section className="section-py bg-ph-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Flagship Solutions"
            title="Featured Services"
            subtitle="Our most comprehensive offerings — full-lifecycle billing and the automation and analytics that power a modern revenue cycle."
          />

          <div className="flex flex-col gap-10">
            {featured.map((service, i) => {
              const reverse = i % 2 === 1;
              return (
                <FadeUp key={service.id} className="ph-card overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                    {/* Image side */}
                    <div className={`ph-img-hover relative min-h-[300px] lg:min-h-[420px] ${reverse ? 'lg:order-2' : ''}`}>
                      <img
                        src={service.overviewImage || service.bannerImage}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(160deg, rgba(0,165,176,0.35) 0%, rgba(14,46,51,0.35) 100%)' }}
                      />
                      <span
                        className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
                        style={{ background: 'rgba(14,46,51,0.55)', backdropFilter: 'blur(4px)' }}
                      >
                        <i className={`bi ${service.icon}`} /> Flagship Service
                      </span>
                      <span
                        className="absolute bottom-2 right-6 font-heading font-extrabold leading-none"
                        style={{ fontSize: 'clamp(4rem, 9vw, 7rem)', color: 'rgba(255,255,255,0.16)' }}
                      >
                        0{i + 1}
                      </span>
                    </div>

                    {/* Content side */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
                      <span className="section-eyebrow">Featured Service</span>
                      <h3 className="section-title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)' }}>
                        {service.title}
                      </h3>
                      <p className="mb-5" style={{ color: 'var(--ph-muted)' }}>
                        {service.overview.paragraphs[0]}
                      </p>
                      <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-7">
                        {service.servicesProvided.bullets.slice(0, 6).map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm">
                            <i className="bi bi-check-circle-fill text-ph-secondary mt-1" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <Link to={`/services/${service.slug}`} className="btn btn-ph-primary ph-service-link">
                          Explore {service.title} <i className="bi bi-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
