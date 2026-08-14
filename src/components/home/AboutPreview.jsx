import { Link } from 'react-router-dom';
import FadeUp from '../common/FadeUp';
import { aboutPreview, siteName } from '../../data/siteContent';
import stats from '../../data/stats';

const points = [
  { icon: 'bi-shield-check', text: 'HIPAA-compliant, security-first delivery' },
  { icon: 'bi-people', text: 'Certified coding, billing & clinical teams' },
  { icon: 'bi-graph-up-arrow', text: 'Automation and analytics that cut cost-to-collect' },
];

export default function AboutPreview() {
  return (
    <section className="section-py">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Media column */}
          <FadeUp className="relative">
            {/* Decorative accent behind the image */}
            <span
              aria-hidden="true"
              className="hidden sm:block absolute -z-10"
              style={{
                inset: '-14px auto auto -14px',
                width: 160,
                height: 160,
                borderRadius: 'var(--ph-radius-lg)',
                background: 'var(--ph-bg-soft)',
              }}
            />
            <span
              aria-hidden="true"
              className="hidden sm:block absolute -z-10"
              style={{
                right: -18,
                bottom: 48,
                width: 120,
                height: 120,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle at 30% 30%, rgba(0,165,176,0.18), rgba(0,165,176,0))',
              }}
            />

            <div className="ph-rounded-media ph-img-hover shadow-ph-lg">
              <img
                src={aboutPreview.image}
                alt={`Compassionate care at ${siteName}`}
                className="w-full object-cover"
                style={{ height: 520 }}
              />
            </div>
          </FadeUp>

          {/* Copy column */}
          <FadeUp delay={0.1}>
            <span className="section-eyebrow">{aboutPreview.eyebrow}</span>
            <h2 className="section-title mb-4">{aboutPreview.title}</h2>
            <p className="mb-7" style={{ color: 'var(--ph-muted)', fontSize: '1.05rem' }}>
              {aboutPreview.content}
            </p>

            <ul className="list-none p-0 m-0 mb-8 flex flex-col gap-3">
              {points.map((p) => (
                <li
                  key={p.text}
                  className="flex items-center gap-4"
                  style={{
                    background: 'var(--ph-bg-alt)',
                    border: '1px solid var(--ph-border)',
                    borderRadius: 'var(--ph-radius)',
                    padding: '14px 18px',
                  }}
                >
                  <span
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'var(--ph-bg-soft)',
                      color: '#000000',
                    }}
                  >
                    <i className={`bi ${p.icon}`} style={{ fontSize: '1.25rem' }} />
                  </span>
                  <span style={{ color: 'var(--ph-dark)', fontWeight: 500 }}>{p.text}</span>
                </li>
              ))}
            </ul>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.slice(1).map((stat) => (
                <div key={stat.id}>
                  <div
                    className="font-heading font-extrabold leading-none"
                    style={{ color: 'var(--ph-primary)', fontSize: '2rem' }}
                  >
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-sm mt-1" style={{ color: 'var(--ph-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </FadeUp>
        </div>
      </div>
    </section>
  );
}
