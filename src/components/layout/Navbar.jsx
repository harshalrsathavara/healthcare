import { useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo';
import useScrollNavbar from '../../hooks/useScrollNavbar';
import { footerContent } from '../../data/siteContent';

const navItems = [
  { label: 'Home', to: '/', end: true },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact-us' },
];

export default function Navbar() {
  const navbarRef = useRef(null);
  const scrolled = useScrollNavbar(navbarRef);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isServicesActive = pathname.startsWith('/services');
  const isHome = pathname === '/';
  // Transparent only while resting over the home banner; solid everywhere else,
  // once scrolled, or while the mobile menu is open.
  const solid = !isHome || scrolled || open;
  const linkClass = ({ isActive }, to) =>
    `nav-link block py-2 lg:py-0 ${(to === '/services' ? isServicesActive : isActive) ? 'active' : ''}`;

  return (
    <nav ref={navbarRef} className={`ph-navbar ${solid ? 'solid' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="navbar-brand shrink-0" onClick={() => setOpen(false)}>
            <BrandLogo light={!solid} />
          </Link>

          {/* Desktop: centered nav */}
          <ul className="hidden lg:flex items-center justify-end ml-auto gap-4 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={(s) => linkClass(s, item.to)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop: phone + CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a href={`tel:${footerContent.phoneHref}`} className="group flex items-center gap-3">
              {/* <span className="w-11 h-11 rounded-full flex items-center justify-center bg-ph-primary/10 text-ph-primary group-hover:bg-ph-primary group-hover:text-white transition-colors">
                <i className="bi bi-telephone-fill text-lg" />
              </span> */}
              {/* <span className="flex flex-col leading-tight"> */}
              {/* <span className="text-[0.68rem] uppercase tracking-wider" style={{ color: 'var(--ph-muted)' }}>
                  Call us anytime
                </span> */}
              {/* <span className="font-semibold group-hover:text-ph-primary transition-colors" style={{ color: 'var(--ph-dark)' }}>
                  {footerContent.phone}
                </span> */}
              {/* </span> */}
            </a>
            {/* <Link to="/contact-us" className="btn btn-ph-primary btn-sm btn-pulse">
              <i className="bi bi-calendar2-check" /> Book Appointment
            </Link> */}
          </div>

          {/* Mobile toggler */}
          <button
            type="button"
            className="navbar-toggler lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="flex flex-col gap-[5px] w-[22px]">
              <span className="navbar-toggler-icon-bar block h-[2px] w-full rounded" />
              <span className="navbar-toggler-icon-bar block h-[2px] w-full rounded" />
              <span className="navbar-toggler-icon-bar block h-[2px] w-full rounded" />
            </span>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="navbar-collapse lg:hidden mt-3">
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={() => setOpen(false)}
                    className={(s) => linkClass(s, item.to)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-3">
              <a href={`tel:${footerContent.phoneHref}`} className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-ph-primary/10 text-ph-primary">
                  <i className="bi bi-telephone-fill" />
                </span>
                <span className="font-semibold" style={{ color: 'var(--ph-dark)' }}>{footerContent.phone}</span>
              </a>
              <Link to="/contact-us" onClick={() => setOpen(false)} className="btn btn-ph-primary btn-sm w-full">
                <i className="bi bi-calendar2-check" /> Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
