import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../Icons/icons";
import "../../index.css";

export default function ServiceHeroSection() {
  const services = [
    { name: "SIGNAGE", link: "/services/signage" },
    { name: "DIRECT MAILING", link: "/services/direct-mailing" },
    { name: "PRINTING", link: "/services/printing" },
    { name: "WEB DESIGNING", link: "/services/web-designing" },
    { name: "SEO", link: "/services/seo" },
  ];

  return (
    <section className="bg-black min-h-screen w-full pt-[200px] pb-24 font-poppins">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-start gap-16">
        {/* Left Column - Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Top Coffee Image */}
          <div className="w-full h-[240px] rounded-[32px] overflow-hidden">
            <img
              src="/Image/Services/service-hero-coffee.png"
              alt="Coffee Signage"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-[1.05] hover:scale-100"
            />
          </div>

          {/* Bottom Printer & Lightbulb */}
          <div className="w-full relative">
            {/* Printer Image */}
            <div className="w-full h-[510px] rounded-[32px] overflow-hidden">
              <img
                src="/Image/Services/service-hero-print.jpg"
                alt="Printing Services"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out scale-[1.09] hover:scale-100"
              />
            </div>

            {/* Lightbulb Cutout (Shifted Left) */}
            <div className="absolute bottom-[-10px] left-[-20px] sm:left-[-50px] bg-black pt-6 pr-6 pb-4 rounded-tr-[40px] z-10">
              <div className="w-[180px] h-[180px] sm:w-[290px] sm:h-[290px] rounded-[28px] overflow-hidden">
                <img
                  src="/Image/Services/service-hero-light.png"
                  alt="Creative Idea"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-[1.05] hover:scale-100"
                />
              </div>
            </div>

            {/* Get in Touch Button Cutout */}
            <div className="absolute bottom-0 right-[0%] bg-black p-4 sm:p-5 z-10">
              <Link
                to="/contact"
                className="flex items-center gap-3 px-7 py-3 border border-[#333] rounded-full transition-colors duration-300"
              >
                <span className="text-sm font-medium text-[var(--color-primary)]">
                  Get in Touch
                </span>
                <Icons.ArrowRight className="w-5 h-5 ml-5 transition-colors duration-300 animate-bounce-x group-hover:text-[var(--color-primary)]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Section Subtitle */}
          <div className="flex items-center gap-2 text-[var(--color-primary)] mb-6">
            <span className="text-[13px] font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
            <Icons.ArrowDownRight className="w-5 h-5 animate-bounce-x" />
          </div>

          {/* Section Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold text-white leading-[1.15] mb-16 tracking-tight">
            Professional Services <br />
            with{" "}
            <span className="text-[var(--color-primary)]">
              Unmatched Quality
            </span>
          </h1>

          {/* Services List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-0">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="border-b border-[var(--color-primary)] py-6 flex items-center group cursor-pointer transition-all duration-300"
              >
                <span className="text-white font-semibold text-[18px] tracking-wide group-hover:text-[var(--color-primary)] transition-colors">
                  {service.name}
                </span>
                <Icons.ArrowUpRight className="w-5 h-5 ml-5 transition-colors duration-300 animate-bounce-x group-hover:text-[var(--color-primary)]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
