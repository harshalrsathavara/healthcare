import SectionHeading from '../common/SectionHeading';
import TestimonialCarousel from '../testimonials/TestimonialCarousel';
import testimonials from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-ph-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          subtitle="Real experiences from the people we've had the privilege to care for."
        />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
