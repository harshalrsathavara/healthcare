import SectionHeading from '../common/SectionHeading';
import WhyChooseCard from '../whyChooseUs/WhyChooseCard';
import whyChooseUs from '../../data/whyChooseUs';

export default function WhyChooseUsSection() {
  return (
    <section className="section-py">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Providers Hand Us This Work"
          subtitle="No platform to buy, no migration, and metrics you can verify against your own system."
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
