import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import services from '../../data/services';

export default function ServicesSection() {
  return (
    <section className="section-py bg-ph-alt">
      <div className="container">
        <SectionHeading
          eyebrow="What We Offer"
          title="End-to-End Revenue Cycle Services"
          subtitle="From patient access to medical billing, HIM, healthcare IT, and RCM automation — specialized teams that protect revenue and reduce cost-to-collect for provider organizations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 0.06} />
          ))}
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
