import React from "react";
import OurServices from "./OurServices";
import ServiceHeroSection from "./ServiceHeroSection";

export default function Services() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 sm:px-4 ">
      <ServiceHeroSection />
      <OurServices />
    </div>
  );
}
