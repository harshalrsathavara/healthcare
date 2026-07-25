import FadeUp from '../common/FadeUp';

export default function WhyChooseCard({ item, delay = 0 }) {
  return (
    <FadeUp delay={delay} className="ph-card h-full p-6">
      <div className="ph-card-icon mb-3">
        <i className={`bi ${item.icon}`} />
      </div>
      <h3 className="text-base mb-2">{item.title}</h3>
      <p className="text-sm mb-0" style={{ color: 'var(--ph-muted)' }}>
        {item.description}
      </p>
    </FadeUp>
  );
}
