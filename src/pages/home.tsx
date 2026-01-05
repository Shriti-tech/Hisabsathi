import HeroSection from "@/components/home/hero";
import FeatureOne from "@/components/home/featureOne";
import AnimatedLogoCloud from "@/components/home/logo-cloud";
import TestimonialMarquee from "@/components/home/testimonial";
import FAQAccordion from "@/components/home/faqSection";
import EightSection from "@/components/home/eightSection";
import FeatureTwo from "@/components/home/featureTwo";
import FeatureThree from "@/components/home/featureThree";
function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedLogoCloud />
      < FeatureOne/>
      < FeatureTwo />
      <FeatureThree />
      <TestimonialMarquee />
      <FAQAccordion />
      <EightSection />
    </>
  );
}

export default Home;
