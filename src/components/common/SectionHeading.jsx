import FadeUp from './FadeUp';

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <FadeUp className={`mb-12 ${center ? 'text-center mx-auto' : ''}`} style={center ? { maxWidth: 680 } : undefined}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {center && <div className="ph-divider mx-auto mb-3" />}
      {subtitle && <p className={`section-subtitle ${center ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </FadeUp>
  );
}
