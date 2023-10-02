import About from "@/components/HomeComponents/About/About";
import FeaturedClass from "@/components/HomeComponents/FeaturedClass/FeaturedClass";
import Hero from "@/components/HomeComponents/Hero/Hero";
import WhyChoose from "@/components/HomeComponents/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedClass />
      <WhyChoose />
    </>
  );
}
