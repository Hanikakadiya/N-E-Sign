import React from "react";
import HeroSection from "./HeroSection";
import BrandStatement from "./BrandStatement";
import OurWork from "./OurWork";

export default function Home() {
  return (
    <div className="max-w-[1720px] mx-auto w-full h-full px-4">
      <HeroSection />
      <BrandStatement />
      <OurWork />
    </div>
  );
}
