import Seo from '../components/common/Seo';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaBanner from '../components/common/CtaBanner';
import { homeBanner } from '../data/siteContent';

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <Hero
        heading={homeBanner.heading}
        subheading={homeBanner.subheading}
        ctaText={homeBanner.ctaText}
        ctaLink={homeBanner.ctaLink}
        image={homeBanner.image}
      />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
