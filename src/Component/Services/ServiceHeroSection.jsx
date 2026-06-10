import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../Icons/icons";
import "../../index.css";
import { motion } from "framer-motion";

export default function ServiceHeroSection() {
  const services = [
    { name: "SIGNAGE", link: "/services/signage" },
    { name: "DIRECT MAILING", link: "/services/direct-mailing" },
    { name: "PRINTING", link: "/services/printing" },
    { name: "WEB DESIGNING", link: "/services/web-designing" },
    { name: "SEO", link: "/services/seo" },
  ];

  return (
    <section className="w-full font-poppins mt-5">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-24 flex flex-col lg:flex-row items-start gap-10 xl:gap-16">
        {/* Left Column - Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          {/* Top Coffee Image */}
          <div className="w-full h-[180px] xl:h-[200px] rounded-[32px] overflow-hidden">
            <img
              src="/Image/Services/service-hero-coffee.png"
              alt="Coffee Signage"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-[1.05] hover:scale-100"
            />
          </div>

          {/* Bottom Printer & Lightbulb */}
          <div className="w-full relative">
            {/* Printer Image */}
            <div className="w-full h-[280px] sm:h-[320px] xl:h-[360px] rounded-[32px] overflow-hidden">
              <img
                src="/Image/Services/service-hero-print.jpg"
                alt="Printing Services"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out scale-[1.09] hover:scale-100"
              />
            </div>

            {/* Lightbulb Cutout (Shifted Left) */}
            <div className="absolute bottom-[-10px] left-[-15px] sm:left-[-30px] lg:left-[-20px] xl:left-[-30px] bg-black pt-5 pr-5 pb-3 sm:pt-6 sm:pr-6 sm:pb-4 rounded-tr-[30px] sm:rounded-tr-[40px] z-10">
              <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] xl:w-[210px] xl:h-[210px] rounded-[24px] sm:rounded-[28px] overflow-hidden">
                <img
                  src="/Image/Services/service-hero-light.png"
                  alt="Creative Idea"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-[1.05] hover:scale-100"
                />
              </div>
            </div>

            {/* Get in Touch Button Cutout */}
            <div className="absolute bottom-0 right-[0%] bg-black p-3 sm:p-5 z-10">
              <Link
                to="/contact"
                className="flex items-center gap-3 px-5 sm:px-7 py-2.5 sm:py-3 border border-[#333] rounded-full transition-colors duration-300"
              >
                <span className="text-sm font-medium text-[var(--color-primary)]">
                  Get in Touch
                </span>
                <Icons.ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-5 transition-colors duration-300 animate-bounce-x group-hover:text-[var(--color-primary)]" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          {/* Section Subtitle */}
          <div className="flex items-center gap-2 text-[var(--color-primary)] mb-6">
            <span className="text-[13px] font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
            <Icons.ArrowDownRight className="w-5 h-5 animate-bounce-x" />
          </div>

          {/* Section Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[52px] font-poppins font-bold text-white leading-[1.15] mb-12 xl:mb-16 tracking-tight">
            Professional Services <br />
            with{" "}
            <span className="text-[var(--color-primary)]">
              Unmatched Quality
            </span>
          </h1>

          {/* Services List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-0">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="border-b border-[var(--color-primary)] py-5 xl:py-6 flex items-center group cursor-pointer transition-all duration-300"
              >
                <span className="text-white font-semibold text-[16px] xl:text-[18px] tracking-wide group-hover:text-[var(--color-primary)] transition-colors">
                  {service.name}
                </span>
                <Icons.ArrowUpRight className="w-5 h-5 ml-5 transition-colors duration-300 animate-bounce-x group-hover:text-[var(--color-primary)]" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
