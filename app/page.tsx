import Comprehensive from "@/components/Comprehensive";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import OurCoreValue from "@/components/OurCoreValue";
import Portfolio from "@/components/Portfolio";
import Solutions from "@/components/Solutions";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <div className="mt-[50px] flex flex-col gap-[50px]">
      <Hero />
      <WhoWeAre />
      <OurCoreValue />
      <Comprehensive />
      <Portfolio />
      <HowWeWork />
      <Solutions />
      <div className="h-[200px]"></div>
    </div>
  );
}
