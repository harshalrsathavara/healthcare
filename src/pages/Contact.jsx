import Seo from '../components/common/Seo';
import FadeUp from '../components/common/FadeUp';
import InquiryForm from '../components/contact/InquiryForm';
import { contactPage } from '../data/siteContent';

const infoCards = [
  {
    icon: 'bi-geo-alt',
    title: 'Our Location',
    body: (
      <>
        {contactPage.address[0]}
        <br />
        {contactPage.address[1]}
      </>
    ),
  },
  {
    icon: 'bi-telephone',
    title: 'Phone & Email',
    body: (
      <>
        <a href={`tel:${contactPage.phoneHref}`}>{contactPage.phone}</a>
        <br />
        <a href={`mailto:${contactPage.email}`}>{contactPage.email}</a>
      </>
    ),
  },
  {
    icon: 'bi-clock',
    title: 'Working Hours',
    body: (
      <>
        {contactPage.hours[0]}
        <br />
        {contactPage.hours[1]}
      </>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with our care team — find our location, hours, and send us a message."
      />

      {/* Text-only page header */}
      <section className="pt-6">
        <div className="container">
          <div className="ph-text-hero">
            <span className="ph-text-hero__glow ph-text-hero__glow--a" aria-hidden="true" />
            <span className="ph-text-hero__glow ph-text-hero__glow--b" aria-hidden="true" />

            <FadeUp className="relative text-center mx-auto" style={{ maxWidth: 760 }}>
              <span className="ph-pill-eyebrow">
                <i className="bi bi-chat-dots" /> Contact Us
              </span>
              <h1 className="ph-text-hero__title">
                We're Here to <span className="ph-text-hero__accent">Help</span>
              </h1>
              <p className="ph-text-hero__sub">
                Reach out to our team — we'll help you find the right care or answer any questions
                about our services.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {infoCards.map((card) => (
              <FadeUp key={card.title} className="ph-card h-full p-6 text-center">
                <div className="ph-card-icon mx-auto mb-3">
                  <i className={`bi ${card.icon}`} />
                </div>
                <h3 className="text-base mb-2">{card.title}</h3>
                <p className="text-sm mb-0" style={{ color: 'var(--ph-muted)' }}>
                  {card.body}
                </p>
              </FadeUp>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeUp className="ph-card overflow-hidden" style={{ height: 460 }}>
              <iframe
                src={contactPage.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic location map"
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <InquiryForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
