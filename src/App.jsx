import React, { useEffect } from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import Signage from "./Component/Services/signage/Signage";
import ExteriorSigns from "./Component/Services/signage/ExteriorSign/ExteriorSigns";
import InteriorSigns from "./Component/Services/signage/InteriorSigns/InteriorSigns";
import Footer from "./Component/Footer";
import Lenis from "lenis";
import DigitalSignage from "./Component/Services/signage/Led-Digital-Board/DigitalSignage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/signage" element={<Signage />} />
        <Route
          path="/services/signage/exterior-sign"
          element={<ExteriorSigns />}
        />
        <Route
          path="/services/signage/exterior-sign/:id"
          element={<ExteriorSigns />}
        />
        <Route
          path="/services/signage/digital-board"
          element={<DigitalSignage />}
        />
        <Route
          path="/services/signage/digital-board/:subCategory"
          element={<DigitalSignage />}
        />
        <Route
          path="/services/signage/interior-sign"
          element={<InteriorSigns />}
        />
        <Route
          path="/services/signage/interior-sign/:id"
          element={<InteriorSigns />}
        />
      </Routes>
      <Footer />
    </>
  );
}
