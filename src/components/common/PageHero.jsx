/**
 * Rounded image-card page hero (theme style) for inner pages. Sits below the
 * solid white navbar inside the container, with a centered eyebrow + title and
 * optional children (subtitle, CTA).
 */
export default function PageHero({ eyebrow, title, image, minHeight = 340, children }) {
  return (
    <section className="pt-6">
      <div className="container">
        <div className="ph-rounded-media relative bg-ph-primary" style={{ minHeight }}>
          {image && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
          )}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(100deg, rgba(4,38,43,0.9) 0%, rgba(6,70,76,0.55) 100%)' }}
          />
          <div
            className="relative px-6 sm:px-10 py-16 lg:py-20 text-center flex flex-col items-center justify-center"
            style={{ minHeight }}
          >
            {eyebrow && (
              <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.85)' }}>
                {eyebrow}
              </span>
            )}
            <h1 className="text-white mb-0" style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.25rem)', fontWeight: 800 }}>
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
