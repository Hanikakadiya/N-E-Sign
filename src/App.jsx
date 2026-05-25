import React from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Component/Home/HeroSection"; 

export default function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}
