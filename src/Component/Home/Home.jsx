import React from "react";
import HeroSection from "./HeroSection";
import BrandStatement from "./BrandStatement";
import AboutCompany from "./AboutCompany";
import OurWork from "./OurWork";
import LookAtOurServices from "./LookAtOurServices";

export default function Home() {
  return (
    <div className="max-w-[1720px] mx-auto w-full h-full px-4">
      <HeroSection />
      <BrandStatement />
      <OurWork />
      <AboutCompany />
      <LookAtOurServices />
    </div>
  );
}
