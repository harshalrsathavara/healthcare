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
        description="Learn about our mission, vision, and the values that guide the care we provide."
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
                Dedicated to Your Health,{' '}
                <span className="ph-text-hero__accent">Every Step of the Way</span>
              </h1>
              <p className="ph-text-hero__sub">
                Compassionate, coordinated care built around every patient we serve — combining
                clinical expertise with a warm, personal touch.
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
              <h2 className="section-title">A Team Committed to Whole-Person Care</h2>
              <p className="mb-3" style={{ color: 'var(--ph-muted)' }}>
                {siteName} was founded on a simple belief: healthcare should be accessible, personal, and built on
                trust. Our physicians, nurses, and support staff work as one team to guide patients through every
                stage of their health journey, combining modern clinical expertise with the kind of attentive care
                that makes people feel truly heard.
              </p>
              <p className="mb-0" style={{ color: 'var(--ph-muted)' }}>
                Today, we serve thousands of patients across a full range of specialties &mdash; from preventive
                checkups to advanced treatment &mdash; all under one roof, backed by a philosophy that puts people
                before procedures.
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
              <h2 className="section-title">Medicine That Listens First</h2>
              <p className="mb-0" style={{ color: 'var(--ph-muted)' }}>
                We believe the best outcomes come from partnership, not prescriptions alone. That means taking the
                time to understand each patient's story, involving them in every decision, and following up long
                after the appointment ends. It's a philosophy of care that treats the whole person &mdash; not just
                the symptom.
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
        heading="Have questions about our care philosophy?"
        subheading="We'd love to walk you through how our team can support your health goals."
      /> */}
    </>
  );
}
