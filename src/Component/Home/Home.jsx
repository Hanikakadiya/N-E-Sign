import React from "react";
import HeroSection from "./HeroSection";
import OurWork from "./OurWork";
// Container removed; using inline div wrapper

export default function Home() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 sm:px-4 flex flex-col items-center">
      <HeroSection />
      <OurWork />
    </div>
  );
}
