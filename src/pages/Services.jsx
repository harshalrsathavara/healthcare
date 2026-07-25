import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import FadeUp from '../components/common/FadeUp';
import SectionHeading from '../components/common/SectionHeading';
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

      <section
        className="ph-hero"
        style={{ minHeight: '40vh', backgroundImage: `url('${servicesIndexHero.image}')` }}
      >
        <div className="container text-center">
          <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,.15)', color: '#fff' }}>
            Our Services
          </span>
          <h1 className="mb-0">Revenue Cycle &amp; Health IT Services That Perform</h1>
        </div>
      </section>

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

          <div className="flex flex-col gap-16">
            {featured.map((service, i) => {
              const reverse = i % 2 === 1;
              return (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <FadeUp className={reverse ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="ph-img-hover rounded-2xl shadow-ph overflow-hidden" style={{ maxHeight: 380 }}>
                      <img
                        src={service.overviewImage || service.bannerImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        style={{ maxHeight: 380 }}
                      />
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.1} className={reverse ? 'lg:order-1' : 'lg:order-2'}>
                    <span className="section-eyebrow">Featured Service</span>
                    <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                      {service.title}
                    </h3>
                    <p className="mb-4" style={{ color: 'var(--ph-muted)' }}>
                      {service.overview.paragraphs[0]}
                    </p>
                    <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.servicesProvided.bullets.slice(0, 6).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <i className="bi bi-check-circle-fill text-ph-secondary mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${service.slug}`} className="btn btn-ph-primary ph-service-link">
                      Explore {service.title} <i className="bi bi-arrow-right" />
                    </Link>
                  </FadeUp>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
