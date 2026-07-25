import { Link } from 'react-router-dom';
import FadeUp from './FadeUp';

export default function CtaBanner({
  heading = 'Ready to take the next step toward better health?',
  subheading = 'Our care team is here to help you book an appointment at a time that works for you.',
  ctaText = 'Contact Us Today',
  ctaLink = '/contact-us',
}) {
  return (
    <section className="section-py">
      <div className="container">
        <FadeUp className="ph-cta bg-ph-gradient text-white text-center py-16 px-6 lg:px-16">
          <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            {heading}
          </h2>
          <p className="mb-6 mx-auto" style={{ maxWidth: 560, color: 'rgba(255,255,255,.85)' }}>
            {subheading}
          </p>
          <Link to={ctaLink} className="btn btn-ph-light btn-lg">
            {ctaText}
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
