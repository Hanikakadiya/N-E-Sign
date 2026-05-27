import React, { useEffect } from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import Signage from "./Component/Services/signage/Signage";
import Lenis from "lenis";



export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/signage" element={<Signage />} />
      </Routes>
    </>
  );
}
