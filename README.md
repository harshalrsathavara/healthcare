# Fidiviaa

Marketing site for **Fidiviaa**, a B2B healthcare services brand — revenue
cycle management (RCM), medical billing, patient access, HIM & clinical
services, healthcare IT, and RCM automation & analytics for hospitals and
provider organizations.

Built with React 19, Create React App, Tailwind CSS, and GSAP.

## Stack

- **React 19** — functional components and hooks
- **Create React App** (`react-scripts`) — build tooling
- **React Router v7** — client-side routing (`/`, `/about-us`, `/services`,
  `/services/:slug`, `/contact-us`, 404)
- **Tailwind CSS v3** — utilities layered over a small custom design system;
  breakpoints/container widths match Bootstrap's (`sm/md/lg/xl/2xl` =
  576/768/992/1200/1400px)
- **GSAP + ScrollTrigger** — scroll-reveal (`FadeUp`), hero entrance/parallax,
  animated stat counters, and the testimonial carousel
- **Bootstrap Icons** — icon set (npm package)

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000 (hot reload)
npm run build    # static production bundle in build/
```

`build/` can be served by any static host (Netlify, Vercel, S3/CloudFront,
nginx, `npx serve build`, …).

## Project structure

```
src/
├── components/
│   ├── common/       BrandLogo, SectionHeading, CtaBanner, FadeUp, Seo
│   ├── layout/       Layout, Navbar, Footer, ScrollProgress, BackToTop
│   ├── home/         Hero, AboutPreview, ServicesSection, WhyChooseUsSection,
│   │                 StatsSection, StatItem, TestimonialsSection
│   ├── services/     ServiceCard (compact), ProcessFlow (step timeline)
│   ├── whyChooseUs/  WhyChooseCard
│   ├── testimonials/ TestimonialCard, TestimonialCarousel
│   └── contact/      InquiryForm
├── pages/            Home, About, Services, ServiceDetail, Contact, NotFound
├── data/             services (+ processFlows), stats, testimonials,
│                     whyChooseUs, siteContent
├── hooks/            useScrollNavbar
├── utils/            scrollTriggerRefresh
├── App.jsx           route definitions
└── index.js          entry point (CRA requires this filename)
```

## Service catalog

Content lives in `src/data/services.js` as a flat array with two tiers:

- **Standard** (`type: 'standard'`) — compact category cards, each with a
  detail page: Patient Access, HIM & Clinical, IT Services, Patient Financial.
- **Featured** (`type: 'featured'`) — flagship services with a step-by-step
  process diagram: **Medical Billing** and **RCM Automation & Analytics**.
  Their diagrams are defined in the `processFlows` map and rendered by
  `components/services/ProcessFlow.jsx` (a responsive vertical timeline).

Each service carries its own copy (`overview`, `servicesProvided`), imagery,
and icon. Service detail pages (`pages/ServiceDetail.jsx`) render a hero,
Overview, and Services Provided section, plus the process flow for featured
services.

## Notable implementation notes

- **Design tokens** live in `src/index.css` as CSS custom properties and
  component classes (`.ph-hero`, `.ph-navbar`, `.ph-card`, `.btn-ph-primary`,
  …). The color system is derived from the logo (navy `#001b52`, teal
  `#00a8a8`, orange `#f88000`, magenta `#880070`) and mirrored into
  `tailwind.config.js`.
- **Brand lockup** — the header/footer logo (`components/common/BrandLogo.jsx`)
  is a horizontal lockup composed from the official artwork, with two variants
  that swap by background: a light wordmark for the transparent navbar and dark
  footer, and a navy wordmark for the scrolled/white navbar
  (`public/images/logo-lockup*.png`).
- **Scroll behavior** — `Layout` resets scroll to the top on every route
  change (before paint, overriding CSS smooth scroll) and takes over history
  scroll restoration so navigations always land at the top.
- **Imagery** — photos are curated Unsplash URLs (referenced in
  `src/data/*.js`); the logo assets are local in `public/images/`.
- **Inquiry form** (`components/contact/InquiryForm.jsx`) does client-side
  validation only; the submit handler has a marked spot to wire a real API:
  ```js
  // await fetch('/api/inquiries', { method: 'POST', ... })
  ```

## Deploying

`npm run build` produces a static SPA. Configure your host to serve
`index.html` for unknown routes so client-side routing works (e.g. a Netlify
`_redirects` rule `/* /index.html 200`, or the equivalent rewrite).
