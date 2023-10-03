import About from "@/components/HomeComponents/About/About";
import Calculate from "@/components/HomeComponents/Calculate/Calculate";
import FeaturedClass from "@/components/HomeComponents/FeaturedClass/FeaturedClass";
import Gallery from "@/components/HomeComponents/Gallery/Gallery";
import Hero from "@/components/HomeComponents/Hero/Hero";
import Pricing from "@/components/HomeComponents/Pricing/Pricing";
import WhyChoose from "@/components/HomeComponents/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedClass />
      <WhyChoose />
      <Gallery />
      <Calculate />
      <Pricing />
    </>
  );
}
