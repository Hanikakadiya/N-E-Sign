import React, { useEffect } from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import Signage from "./Component/Services/signage/Signage";
import ExteriorSign from "./Component/Services/signage/ExteriorSign/ExteriorSign";
import BuildingSignData from "./Component/Services/signage/ExteriorSign/BuildingSignData";
import FreeStandingData from "./Component/Services/signage/ExteriorSign/FreeStandingData";
import Footer from "./Component/Footer";
import Lenis from "lenis";
import TemporarySignData from "./Component/Services/signage/ExteriorSign/TemporarySignData";
import DigitalSignage from "./Component/Services/signage/Led-Digital-Board/DigitalSignage";
import InteriorSigns from "./Component/Services/signage/InteriorSigns/InteriorSigns";

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
          element={<ExteriorSign />}
        />
        <Route
          path="/services/signage/exterior-sign/building-sign"
          element={<BuildingSignData />}
        />
        <Route
          path="/services/signage/exterior-sign/free-standing-signs"
          element={<FreeStandingData />}
        />
        <Route
          path="/services/signage/exterior-sign/temporary-sign"
          element={<TemporarySignData />}
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
      </Routes>
      <Footer />
    </>
  );
}
