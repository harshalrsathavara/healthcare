import { Link } from 'react-router-dom';
import FadeUp from './FadeUp';
import { footerContent } from '../../data/siteContent';

export default function CtaBanner({
  eyebrow = 'Get Started',
  heading = 'Ready to take the next step toward better health?',
  subheading = 'Our care team is here to help you book an appointment at a time that works for you.',
  ctaText = 'Contact Us Today',
  ctaLink = '/contact-us',
}) {
  return (
    <section className="section-py">
      <div className="container">
        <FadeUp
          className="ph-cta rounded-ph-xl overflow-hidden shadow-ph relative px-6 py-8 lg:px-10 lg:py-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          style={{ background: 'linear-gradient(120deg, var(--ph-primary) 0%, var(--ph-primary-dark) 100%)' }}
        >
          <div className="text-white text-center lg:text-left">
            <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '0.4rem' }}>
              {eyebrow}
            </span>
            <h2 className="text-white mb-0" style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 800, lineHeight: 1.2 }}>
              {heading}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-end shrink-0">
            <Link to={ctaLink} className="btn btn-ph-light">
              {ctaText}
            </Link>
            <a href={`tel:${footerContent.phoneHref}`} className="btn ph-btn-ghost">
              <i className="bi bi-telephone-fill" /> {footerContent.phone}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
