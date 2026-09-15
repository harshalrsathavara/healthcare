import Seo from '../components/common/Seo';
import FadeUp from '../components/common/FadeUp';
import SectionHeading from '../components/common/SectionHeading';
import WhyChooseCard from '../components/whyChooseUs/WhyChooseCard';
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
                <i className="bi bi-buildings" /> About Us
              </span>
              <h1 className="ph-text-hero__title">
                Dedicated to Better Revenue,{' '}
                <span className="ph-text-hero__accent">Every Step of the Way</span>
              </h1>
              <p className="ph-text-hero__sub">
                Integrated, coordinated revenue cycle solutions built around every provider we
                serve &mdash; combining industry expertise with a reliable, technology-driven
                approach.
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
              <img src={aboutPage.introImage} alt="Fidiviaa revenue cycle team at work" className="rounded-2xl shadow-ph-lg w-full" />
            </FadeUp>
            <FadeUp delay={0.1}>
              <span className="section-eyebrow">Who We Are</span>
              <h2 className="section-title">A Team Committed to Revenue Cycle Excellence</h2>
              <p className="mb-3" style={{ color: 'var(--ph-muted)' }}>
                {siteName} was founded on a simple belief: healthcare organizations deserve reliable,
                efficient, and transparent revenue cycle support. Our billing, coding, and revenue cycle
                specialists work as one team to support providers through every stage of the financial
                journey, combining industry expertise with modern technology and the kind of attentive
                service that keeps operations running smoothly.
              </p>
              <p className="mb-0" style={{ color: 'var(--ph-muted)' }}>
                Today, we support healthcare organizations across a full range of specialties &mdash; from
                front-end patient access to claims, denials, and A/R management &mdash; backed by a
                philosophy that puts financial performance, operational efficiency, and long-term
                partnership first.
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
              <h2 className="section-title">Revenue Cycle That Works Smarter</h2>
              <p className="mb-0" style={{ color: 'var(--ph-muted)' }}>
                We believe the best financial outcomes come from partnership, not processes alone. That means
                taking the time to understand each organization&rsquo;s revenue cycle, identifying opportunities
                for improvement, and supporting every stage from patient access through final reimbursement.
                It&rsquo;s a philosophy of partnership that strengthens the entire revenue cycle &mdash; not just
                one part of it.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-py bg-ph-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Your Revenue. Our Expertise."
            subtitle="From accurate billing to faster payments, here's what sets our RCM expertise apart."
          />
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
