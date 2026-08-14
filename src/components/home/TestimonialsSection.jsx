import SectionHeading from '../common/SectionHeading';
import FadeUp from '../common/FadeUp';
import TestimonialCard from '../testimonials/TestimonialCard';
import testimonials from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-ph-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Client Voices"
          title="What our partners say"
          subtitle="Real experiences from the provider organizations we support across the revenue cycle."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.id} delay={i * 0.08} className="h-full">
              <TestimonialCard testimonial={t} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
