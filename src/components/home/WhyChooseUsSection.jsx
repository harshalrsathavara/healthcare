import SectionHeading from '../common/SectionHeading';
import WhyChooseCard from '../whyChooseUs/WhyChooseCard';
import whyChooseUs from '../../data/whyChooseUs';

export default function WhyChooseUsSection() {
  return (
    <section className="section-py">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care Built Around You"
          subtitle="From same-day appointments to a team that listens, here's what sets our clinic apart."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, i) => (
            <WhyChooseCard key={item.id} item={item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
