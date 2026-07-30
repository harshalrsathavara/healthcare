import { Link } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo';
import services from '../../data/services';
import { footerContent, siteName } from '../../data/siteContent';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact-us' },
];

const socialLinks = [
  { icon: 'bi-facebook', href: '#' },
  { icon: 'bi-instagram', href: '#' },
  { icon: 'bi-twitter-x', href: '#' },
  { icon: 'bi-linkedin', href: '#' },
];

export default function Footer() {
  return (
    <footer className="ph-footer pt-16 pb-0">
      <span className="ph-footer-watermark" aria-hidden="true">{siteName.toLowerCase()}</span>
      <div className="container relative z-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8">
          <div className="lg:col-span-4">
            <BrandLogo light className="mb-3" />
            <p className="text-sm mb-3 mt-3 max-w-sm">{footerContent.description}</p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10"
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-base mb-3">Quick Links</h5>
            <ul className="list-none p-0 text-sm flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-base mb-3">Services</h5>
            <ul className="list-none p-0 text-sm flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-base mb-3">Get in Touch</h5>
            <ul className="list-none p-0 text-sm flex flex-col gap-2">
              <li>
                <i className="bi bi-geo-alt mr-2" /> {footerContent.address}
              </li>
              <li>
                <i className="bi bi-telephone mr-2" />{' '}
                <a href={`tel:${footerContent.phoneHref}`}>{footerContent.phone}</a>
              </li>
              <li>
                <i className="bi bi-envelope mr-2" /> <a href={`mailto:${footerContent.email}`}>{footerContent.email}</a>
              </li>
              <li>
                <i className="bi bi-clock mr-2" /> {footerContent.hours}
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-white/15" />
        <p className="text-sm text-center mb-0 pt-4">
          &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
      </div>
      {/* space below the content where the oversized watermark shows */}
      <div className="ph-footer-wm-band" aria-hidden="true" />
    </footer>
  );
}
