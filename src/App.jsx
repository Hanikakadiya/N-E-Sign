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
import LEDNeonSigns from "./Component/Services/signage/LED-neon/LED-NeonSigns";
import VehicleService from "./Component/Services/signage/VehicalGraphics/VehicleService";
import DirectMail from "./Component/Services/DirectMail/DirectMail";
import Apparel from "./Component/Apparel/Apparel";
import PromotionalProducts from "./Component/PromotionalProducts/PromotionalProducts";
import OurWork from "./Component/OurWork/OurWork"
import ContectHeroSection from "./Component/ContactUs/ContectHeroSection";
import WhyContactUs from "./Component/ContactUs/WhyContactUs";
import EDDMServicesCard from "./Component/Services/DirectMail/EDDMServicesCard";
import DirectMailCard from "./Component/Services/DirectMail/DirectMailCard";
import PoliticalMail from "./Component/Services/DirectMail/PoliticalMail";
import CustomerAndBusinessMailCard from "./Component/Services/DirectMail/CustomerAndBusinessMailCard";
import VariableDataCard from "./Component/Services/DirectMail/VariableDataCard";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();

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
      <main className="pt-[80px] md:pt-[100px] w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Apparel" element={<Apparel />} />
          <Route path="/promotional-products" element={<PromotionalProducts />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route 
            path="/contact" 
            element={
              <div className="min-h-screen">
                <ContectHeroSection />
                <WhyContactUs />
              </div>
            } 
          />
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
          <Route path="/services/signage/neon-sign" element={<LEDNeonSigns />} />
          <Route
            path="/services/signage/vehicle-graphics"
            element={<VehicleService />}
          />
          <Route
            path="/services/signage/vehicle-graphics/:subCategory"
            element={<VehicleService />}
          />
          <Route path="/services/direct-mailing" element={<DirectMail />} />
          <Route
            path="/services/direct-mailing/eddm-service-every-door-direct-mail-"
            element={<EDDMServicesCard />}
          />
          <Route
            path="/services/direct-mailing/direct-mail"
            element={<DirectMailCard />}
          />
          <Route
            path="/services/direct-mailing/political-mail"
            element={<PoliticalMail />}
          />
          <Route
            path="/services/direct-mailing/customer-and-business-mailing-list"
            element={<CustomerAndBusinessMailCard />}
          />
          <Route
            path="/services/direct-mailing/variable-data"
            element={<VariableDataCard />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
