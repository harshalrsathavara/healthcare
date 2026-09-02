import SectionHeading from '../common/SectionHeading';
import WhyChooseCard from '../whyChooseUs/WhyChooseCard';
import whyChooseUs from '../../data/whyChooseUs';

export default function WhyChooseUsSection() {
  return (
    <section className="section-py">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Your Revenue. Our Expertise."
          subtitle="From accurate billing to faster payments, here's what sets our RCM expertise apart."
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
