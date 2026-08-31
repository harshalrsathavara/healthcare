import Seo from '../components/common/Seo';
import FadeUp from '../components/common/FadeUp';
import SectionHeading from '../components/common/SectionHeading';
import WhyChooseCard from '../components/whyChooseUs/WhyChooseCard';
import CtaBanner from '../components/common/CtaBanner';
import whyChooseUs from '../data/whyChooseUs';
import { aboutPage, siteName } from '../data/siteContent';

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Who Fidiviaa is, how we work with provider organizations, and what we take off your billing office."
      />

      {/* Text-only page header */}
      <section className="pt-6">
        <div className="container">
          <div className="ph-text-hero">
            <span className="ph-text-hero__glow ph-text-hero__glow--a" aria-hidden="true" />
            <span className="ph-text-hero__glow ph-text-hero__glow--b" aria-hidden="true" />

            <FadeUp className="relative text-center mx-auto" style={{ maxWidth: 780 }}>
              <span className="ph-pill-eyebrow">
                <i className="bi bi-heart-pulse" /> About Us
              </span>
              <h1 className="ph-text-hero__title">
                The Back Office{' '}
                <span className="ph-text-hero__accent">Behind Your Front Line</span>
              </h1>
              <p className="ph-text-hero__sub">
                We run revenue cycle operations for hospitals, physician groups, and specialty
                practices, so your staff can stop working claims after hours.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <img src={aboutPage.introImage} alt="Our clinic" className="rounded-2xl shadow-ph-lg w-full" />
            </FadeUp>
            <FadeUp delay={0.1}>
              <span className="section-eyebrow">Who We Are</span>
              <h2 className="section-title">Built by People Who Have Worked the Queue</h2>
              <p className="mb-3" style={{ color: 'var(--ph-muted)' }}>
                {siteName} started because the same problems kept showing up at every provider organization we
                worked with. Claims going out with errors that were caught too late. Denials nobody had time to
                appeal. An aging report that grew every month while everyone stayed busy. The clinical side was
                fine. The money side was leaking.
              </p>
              <p className="mb-0" style={{ color: 'var(--ph-muted)' }}>
                So we built teams to do that work properly: credentialed coders, billing specialists, access
                staff, and health IT engineers who have spent their careers provider-side. They log into your
                systems, work your accounts, and report back numbers you can check yourself.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-py bg-ph-alt">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[aboutPage.mission, aboutPage.vision, aboutPage.values].map((block) => (
              <FadeUp key={block.title} className="ph-card h-full p-6">
                <div className="ph-card-icon mb-3">
                  <i className={`bi ${block.icon}`} />
                </div>
                <h3 className="text-lg mb-2">{block.title}</h3>
                <p className="text-sm mb-0" style={{ color: 'var(--ph-muted)' }}>
                  {block.text}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Philosophy */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp className="order-2 lg:order-2">
              <img src={aboutPage.philosophyImage} alt="Our philosophy" className="rounded-2xl shadow-ph-lg w-full" />
            </FadeUp>
            <FadeUp delay={0.1} className="order-1 lg:order-1">
              <span className="section-eyebrow">Our Philosophy</span>
              <h2 className="section-title">Fewer Surprises at Month Close</h2>
              <p className="mb-0" style={{ color: 'var(--ph-muted)' }}>
                Most vendors report on the work they did. We would rather report on what it moved: days in A/R,
                first-pass clean claim rate, denial rate by payer, dollars recovered from underpayments. If a
                number goes the wrong way, you hear about it from us in that week&rsquo;s call, not from your CFO
                three months later.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-py bg-ph-alt">
        <div className="container">
          <SectionHeading eyebrow="Why Choose Us" title="What Sets Us Apart" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => (
              <WhyChooseCard key={item.id} item={item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* <CtaBanner
        heading="Want to see what your denials actually cost you?"
        subheading="Send us a recent A/R aging report and we will walk through it with you."
      /> */}
    </>
  );
}
