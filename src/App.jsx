import React from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Component/Home/HeroSection";
import OurWork from "./Component/Home/OurWork";
import ServiceHeroSection from "./Component/Services/ServiceHeroSection";

export default function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <OurWork />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<ServiceHeroSection />} />
      </Routes>
    </>
  );
}
