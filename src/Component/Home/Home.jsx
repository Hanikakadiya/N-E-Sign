import React from "react";
import HeroSection from "./HeroSection";
import BrandStatement from "./BrandStatement";
import AboutCompany from "./AboutCompany";
import OurWork from "./OurWork";
import LookAtOurServices from "./LookAtOurServices";
import LatestDesigns from "./LatestDesigns";
import VideoSection from "./VideoSection";
import TestimonialSection from "./TestimonialSection";
import LatestNews from "./LatestNews";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <HeroSection />
      <BrandStatement />
      <div className="max-w-[1720px] mx-auto">
        <OurWork />
        <AboutCompany />
        <LookAtOurServices />
        <LatestDesigns />
      </div>
      <VideoSection />
      <TestimonialSection />
      <LatestNews />
    </div>
  );
}
