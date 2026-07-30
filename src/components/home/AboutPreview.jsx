import { Link } from 'react-router-dom';
import FadeUp from '../common/FadeUp';
import { aboutPreview, siteName } from '../../data/siteContent';
import stats from '../../data/stats';

const points = [
  'HIPAA-compliant, security-first delivery',
  'Certified coding, billing & clinical teams',
  'Automation and analytics that cut cost-to-collect',
];

export default function AboutPreview() {
  const highlight = stats[0];

  return (
    <section className="section-py">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <FadeUp className="relative">
            <div className="ph-rounded-media ph-img-hover shadow-ph-lg">
              <img
                src={aboutPreview.image}
                alt={`About ${siteName}`}
                className="w-full object-cover"
                style={{ maxHeight: 480 }}
              />
            </div>
            <div
              className="hidden sm:block absolute -bottom-6 -left-6 bg-ph-primary text-white rounded-ph p-6 shadow-ph-lg"
              style={{ maxWidth: 220 }}
            >
              <div className="font-heading font-extrabold" style={{ fontSize: '2.4rem', lineHeight: 1 }}>
                {highlight.value.toLocaleString()}
                {highlight.suffix}
              </div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,.85)' }}>
                {highlight.label}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <span className="section-eyebrow">{aboutPreview.eyebrow}</span>
            <h2 className="section-title mb-4">{aboutPreview.title}</h2>
            <p className="mb-5" style={{ color: 'var(--ph-muted)' }}>
              {aboutPreview.content}
            </p>
            <ul className="list-none p-0 m-0 mb-7 flex flex-col gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill text-ph-secondary mt-1" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to={aboutPreview.ctaLink} className="btn btn-ph-primary">
              {aboutPreview.ctaText}
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
