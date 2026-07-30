import { Link } from 'react-router-dom';
import FadeUp from './FadeUp';
import { footerContent } from '../../data/siteContent';

const defaultImage =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop';

export default function CtaBanner({
  eyebrow = 'Get Started',
  heading = 'Ready to take the next step toward better health?',
  subheading = 'Our care team is here to help you book an appointment at a time that works for you.',
  ctaText = 'Contact Us Today',
  ctaLink = '/contact-us',
  image = defaultImage,
}) {
  return (
    <section className="section-py">
      <div className="container">
        <FadeUp className="ph-cta rounded-ph-xl overflow-hidden shadow-ph-lg">
          <div className="grid lg:grid-cols-5 items-stretch">
            {/* Content panel */}
            <div className="lg:col-span-3 relative overflow-hidden px-8 py-16 lg:px-14 lg:py-20">
              {/* gradient base + pattern + colour glows */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, var(--ph-primary) 0%, var(--ph-primary-dark) 100%)' }}
              />
              <div className="ph-plus-pattern absolute inset-0" />
              <div
                className="absolute -top-16 -left-10 w-64 h-64 rounded-full"
                style={{ background: 'var(--ph-accent)', opacity: 0.25, filter: 'blur(70px)' }}
              />
              <div
                className="absolute -bottom-20 right-0 w-72 h-72 rounded-full"
                style={{ background: 'var(--ph-accent-2)', opacity: 0.22, filter: 'blur(80px)' }}
              />

              <div className="relative z-10 text-white text-center lg:text-left">
                <span
                  className="section-eyebrow"
                  style={{ color: 'rgba(255,255,255,0.9)' }}
                >
                  {eyebrow}
                </span>
                <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.6rem)', fontWeight: 800 }}>
                  {heading}
                </h2>
                <p className="mb-8 mx-auto lg:mx-0" style={{ maxWidth: 520, color: 'rgba(255,255,255,.9)' }}>
                  {subheading}
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link to={ctaLink} className="btn btn-ph-light btn-lg">
                    {ctaText}
                  </Link>
                  <a href={`tel:${footerContent.phoneHref}`} className="btn btn-lg ph-btn-ghost">
                    <i className="bi bi-telephone-fill" /> {footerContent.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Image panel */}
            <div className="lg:col-span-2 relative hidden lg:block" style={{ minHeight: 320 }}>
              <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(90deg, var(--ph-primary) 0%, rgba(0,165,176,0.35) 30%, rgba(0,165,176,0) 70%)' }}
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
