import FadeUp from '../common/FadeUp';

/**
 * Vertical process timeline for the featured services. A connecting gradient
 * segment links each numbered node to the next; every step's icon, title, and
 * description sit in a card on the right. Always aligned regardless of card
 * height, and fully responsive — the same single-column layout reads cleanly
 * on mobile and desktop. Driven by `processFlows[flow]` entries:
 * { title, icon, desc }.
 */
export default function ProcessFlow({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <ol className="list-none p-0 m-0 max-w-3xl mx-auto">
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex items-start gap-4 sm:gap-6 pb-6 last:pb-0">
          {/* connecting segment down to the next node */}
          {i < steps.length - 1 && (
            <span
              className="absolute w-[3px] rounded"
              style={{
                left: 22,
                top: 23,
                height: '100%',
                background: 'linear-gradient(180deg, var(--ph-secondary), var(--ph-primary))',
                opacity: 0.3,
              }}
              aria-hidden="true"
            />
          )}

          {/* numbered node */}
          <span
            className="relative z-10 shrink-0 w-[46px] h-[46px] rounded-full flex items-center justify-center text-white font-semibold shadow-ph-sm"
            style={{ background: 'var(--ph-primary)' }}
          >
            {i + 1}
          </span>

          {/* step card */}
          <FadeUp delay={i * 0.05} className="ph-card flex-grow p-4 sm:p-5 flex items-center gap-4">
            <div className="ph-card-icon shrink-0" style={{ width: 48, height: 48, fontSize: '1.25rem' }}>
              <i className={`bi ${step.icon}`} />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-base mb-1" style={{ color: 'var(--ph-dark)' }}>
                {step.title}
              </h4>
              <p className="text-sm mb-0" style={{ color: 'var(--ph-muted)' }}>
                {step.desc}
              </p>
            </div>
          </FadeUp>
        </li>
      ))}
    </ol>
  );
}
