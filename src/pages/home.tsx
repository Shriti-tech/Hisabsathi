import HeroSection from "@/components/home/hero";
import AnimatedLogoCloud from "@/components/home/logo-cloud";
import Features from "@/components/home/features";
import TestimonialMarquee from "@/components/home/testimonial";
import FAQAccordion from "@/components/home/faqSection";
import EightSection from "@/components/home/eightSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedLogoCloud />
      <Features/>
      <TestimonialMarquee />
      <FAQAccordion />
      <EightSection />
    </>
  );
}

export default Home;
