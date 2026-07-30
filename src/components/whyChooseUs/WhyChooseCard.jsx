import FadeUp from '../common/FadeUp';

/**
 * A single cell in the bordered feature strip (theme value-row pattern):
 * thin line icon, title, description. Meant to sit inside `.ph-feature-strip`.
 */
export default function WhyChooseCard({ item, delay = 0 }) {
  return (
    <FadeUp delay={delay} className="ph-feature-cell">
      <div className="ph-line-icon mb-4">
        <i className={`bi ${item.icon}`} />
      </div>
      <h3 className="text-lg mb-2">{item.title}</h3>
      <p className="text-sm mb-0" style={{ color: 'var(--ph-muted)' }}>
        {item.description}
      </p>
    </FadeUp>
  );
}
