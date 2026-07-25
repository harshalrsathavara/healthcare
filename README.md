# Fidiviaa — React Frontend

A pixel-parity React rebuild of the Laravel/Bootstrap Fidiviaa healthcare
website (`../healthcare`). Same layout, colors, typography, spacing,
imagery, icons, section order, and responsive behavior — recreated with
React, Create React App, Tailwind CSS, and GSAP. This project is fully
independent of the Laravel app: it does not read from or write to it.

## Stack

- **React 19** (functional components, hooks)
- **Create React App** (`react-scripts`) — build tool, per project requirements
- **React Router v7** — client-side routing (`/`, `/about-us`, `/services`,
  `/services/:slug`, `/contact-us`)
- **Tailwind CSS v3** — utility classes, configured with Bootstrap-matching
  breakpoints/container widths so responsive behavior lines up with the
  Laravel site
- **GSAP + ScrollTrigger** — scroll-reveal animations, hero entrance,
  parallax, animated stat counters, testimonial carousel transitions
- **Bootstrap Icons** (npm package) — same icon set as the Laravel site, so
  every glyph matches exactly

## Project Structure

```
src/
├── assets/            (reserved; imagery is served from /public/images)
├── components/
│   ├── common/         BrandLogo, SectionHeading, CtaBanner, FadeUp, Seo, Accordion
│   ├── layout/          Navbar, Footer, ScrollProgress, BackToTop, Layout
│   ├── home/             Hero, AboutPreview, ServicesSection, WhyChooseUsSection,
│   │                     StatsSection, StatItem, TestimonialsSection
│   ├── services/         ServiceCard
│   ├── whyChooseUs/      WhyChooseCard
│   ├── testimonials/     TestimonialCard, TestimonialCarousel
│   └── contact/          InquiryForm
├── pages/               Home, About, Services, ServiceDetail, Contact, NotFound
├── data/                Static content mirroring the Laravel DB seed data
│                        (services, testimonials, why-choose-us, stats, site copy)
├── hooks/               useScrollNavbar
├── utils/               scrollTriggerRefresh (re-measures GSAP ScrollTrigger
│                        positions after images/fonts load)
├── App.jsx              Route definitions
└── index.js             Entry point (CRA requires this exact filename; see note below)
```

## Running the project

This app is fully independent — it does **not** require the Laravel app,
PHP, or MySQL to be running.

```bash
cd healthcare-react
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000) with hot reload.

**Production build:**

```bash
npm run build
```

Outputs a static, deployable bundle to `build/`. Serve it with any static
host (Netlify, Vercel, S3/CloudFront, nginx, `npx serve build`, etc).

## Notable implementation notes

- **CRA instead of Vite**: per project requirements. One consequence of
  using CRA (not ejected) is that the app entry point must stay
  `src/index.js` — CRA's webpack config hardcodes that filename and doesn't
  expose a way to rename it to `main.jsx` without ejecting. Everything else
  (`App.jsx`, all components/pages) uses `.jsx`.
- **Design tokens** (`src/index.css`) are ported 1:1 from the Laravel app's
  `public/css/app.css` — same CSS custom properties, same component classes
  (`.ph-hero`, `.ph-navbar`, `.ph-card`, `.btn-ph-primary`, etc). Tailwind is
  layered on top for spacing/grid/flex utilities and the responsive
  breakpoints are set to match Bootstrap's (`sm/md/lg/xl/2xl` =
  576/768/992/1200/1400px) so the two sites break at the same widths.
- **Images**: static images (logo, service photos, testimonial photos,
  homepage banner) are copied into `public/images/` from the Laravel app's
  `public/images/` and `storage/app/public/`. Stock photography that the
  Laravel site hotlinks from Unsplash is kept as the same hotlinked URLs
  for an exact visual match.
- **Content**: services, testimonials, "why choose us" items, stats, and
  page copy are hardcoded in `src/data/*.js`, mirroring exactly what's
  currently seeded in the Laravel database. There is no admin panel on the
  React side — this is a frontend-only rebuild.
- **GSAP usage**: replaces every animation the Laravel site had —
  IntersectionObserver-based scroll reveals (`FadeUp` component +
  ScrollTrigger), the eased stat counters, the hero's staggered entrance,
  the hero parallax, and the testimonial carousel's slide transition.
  Purely decorative CSS-only loops (floating hero blobs, button pulse,
  bounce cue) were left as plain CSS `@keyframes`, since GSAP wouldn't
  visibly change that behavior.
- **Inquiry form** (`src/components/contact/InquiryForm.jsx`): Name,
  Mobile Number, Email, Subject, Message. Client-side validation only
  (required fields, email format, mobile format, minimum message length).
  The submit handler has a clearly marked spot to swap in a real API call:
  ```js
  // await fetch('/api/inquiries', { method: 'POST', ... })
  ```

## Known limitation

External Unsplash-hosted images (used on the About/Services/Contact hero
banners, matching the Laravel site) depend on that network request
completing — same as the Laravel version. No local fallback is bundled for
those, by design, to stay pixel-identical to the original.
