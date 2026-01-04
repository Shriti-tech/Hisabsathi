import HeroSection from "@/components/home/hero";
import ThirdSection from "@/components/home/thirdSection";
import IndustryLeadersSection from "@/components/home/marquee";
import TestimonialMarquee from "@/components/home/sixthSection";
import FAQAccordion from "@/components/home/faqSection";
import EightSection from "@/components/home/eightSection";
function Home() {
  return (
    <>
      <HeroSection />
      <IndustryLeadersSection />
      <ThirdSection />
      <TestimonialMarquee />
      <FAQAccordion />
      <EightSection />
    </>
  );
}

export default Home;
