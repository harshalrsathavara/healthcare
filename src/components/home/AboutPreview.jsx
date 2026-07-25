import { Link } from 'react-router-dom';
import FadeUp from '../common/FadeUp';
import { aboutPreview, siteName } from '../../data/siteContent';

export default function AboutPreview() {
  return (
    <section className="section-py">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="ph-img-hover rounded-2xl shadow-ph overflow-hidden">
              <img src={aboutPreview.image} alt={`About ${siteName}`} className="w-full rounded-2xl" />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <span className="section-eyebrow">{aboutPreview.eyebrow}</span>
            <h2 className="section-title">{aboutPreview.title}</h2>
            <p className="text-ph-muted mb-6" style={{ color: 'var(--ph-muted)' }}>
              {aboutPreview.content}
            </p>
            <Link to={aboutPreview.ctaLink} className="btn btn-ph-primary">
              {aboutPreview.ctaText}
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
