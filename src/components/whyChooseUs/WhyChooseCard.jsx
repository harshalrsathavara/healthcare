import FadeUp from '../common/FadeUp';

/**
 * Standalone "why choose us" card: an icon tile that fills on hover, a title,
 * and a short description. Sits in a gapped grid (no shared border strip).
 */
export default function WhyChooseCard({ item, delay = 0 }) {
  return (
    <FadeUp delay={delay} className="ph-why-card h-full">
      <span className="ph-why-card__icon">
        <i className={`bi ${item.icon}`} />
      </span>
      <h3 className="text-lg mt-5 mb-2">{item.title}</h3>
      <p className="text-sm mb-0" style={{ color: 'var(--ph-muted)', lineHeight: 1.6 }}>
        {item.description}
      </p>
    </FadeUp>
  );
}
