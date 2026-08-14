/**
 * Rounded image-card page hero (theme style) for inner pages. Sits below the
 * solid white navbar inside the container, with a background image, a teal
 * gradient overlay, and a centered eyebrow + title (plus optional children).
 */
export default function PageHero({ eyebrow, title, image, minHeight = 360, children }) {
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
            style={{
              background:
                'linear-gradient(120deg, rgba(4,38,43,0.90) 0%, rgba(5,64,70,0.72) 55%, rgba(8,90,96,0.45) 100%)',
            }}
          />

          <div
            className="relative px-6 sm:px-10 py-16 lg:py-20 text-center flex flex-col items-center justify-center"
            style={{ minHeight }}
          >
            {eyebrow && (
              <span
                className="section-eyebrow"
                style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '0.75rem' }}
              >
                {eyebrow}
              </span>
            )}
            <h1
              className="text-white mb-0"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, maxWidth: 820, lineHeight: 1.12 }}
            >
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
