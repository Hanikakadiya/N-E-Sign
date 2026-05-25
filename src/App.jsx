import React from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import ServiceHeroSection from "./Component/Services/ServiceHeroSection";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceHeroSection />} />
      </Routes>
    </>
  );
}
