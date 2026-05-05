import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutSection from "../components/AboutSection";
import WhyChoose from "../components/WhyChoose";
import Solutions from "../components/Solutions";
import CTASection from "../components/CTASection";

export const metadata = {
  title: "Industrial Hardware Supply | V Enterprises",
  description:
    "V Enterprises provides industrial safety products, hardware tools, and bulk orders for manufacturing businesses.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <WhyChoose />
      <Solutions />
      <CTASection />
    </>
  );
}