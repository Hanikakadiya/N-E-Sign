import React from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Component/Home/HeroSection"; 
import OurWork from "./Component/Home/OurWork";

export default function App() {
  return (
    <>

      <NavBar />
      <HeroSection />
      <OurWork />
    </>
  );
}
