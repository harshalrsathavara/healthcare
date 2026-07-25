import { useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo';
import useScrollNavbar from '../../hooks/useScrollNavbar';

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

  return (
    <nav ref={navbarRef} className={`ph-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
            <BrandLogo />
          </Link>

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

          <div className={`navbar-collapse ${open ? 'block' : 'hidden'} lg:!block absolute lg:static left-0 right-0 top-full lg:top-auto mx-3 lg:mx-0`}>
            <ul className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-0 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `nav-link block py-2 lg:py-0 ${
                        (item.to === '/services' ? isServicesActive : isActive) ? 'active' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="lg:ml-2 mt-2 lg:mt-0">
                <Link to="/contact-us" onClick={() => setOpen(false)} className="btn btn-ph-primary btn-sm btn-pulse inline-block">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
