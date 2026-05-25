import React from "react";
import { Link } from "react-router-dom";
import CoffeeImage from "../../assets/Image/Services/service-hero-coffee.png";
import LightImage from "../../assets/Image/Services/service-hero-light.png";
import PrintImage from "../../assets/Image/Services/service-hero-print.jpg";

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
              src={CoffeeImage}
              alt="Coffee Signage"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-[1.05] hover:scale-100"
            />
          </div>

          {/* Bottom Printer & Lightbulb */}
          <div className="w-full relative">
            {/* Printer Image */}
            <div className="w-full h-[510px] rounded-[32px] overflow-hidden bg-[#111]">
              <img
                src={PrintImage}
                alt="Printing Services"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out scale-[1.09] hover:scale-100"
              />
            </div>

            {/* Lightbulb Cutout (Shifted Left) */}
            <div className="absolute bottom-[-10px] left-[-20px] sm:left-[-50px] bg-black pt-6 pr-6 pb-4 rounded-tr-[40px] z-10">
              <div className="w-[180px] h-[180px] sm:w-[290px] sm:h-[290px] rounded-[28px] overflow-hidden">
                <img
                  src={LightImage}
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
                <span className="text-sm font-medium text-primary">
                  Get in Touch
                </span>
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Section Subtitle */}
          <div className="flex items-center gap-2 text-primary mb-6">
            <span className="text-[13px] font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 animate-bounce-x"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          {/* Section Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold text-white leading-[1.15] mb-16 tracking-tight">
            Professional Services <br />
            with <span className="text-primary">Unmatched Quality</span>
          </h1>

          {/* Services List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-0">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="border-b border-primary py-6 flex items-center group cursor-pointer transition-all duration-300"
              >
                <span className="text-white font-semibold text-[18px] tracking-wide group-hover:text-primary transition-colors">
                  {service.name}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-5 text-gray-500 group-hover:text-primary transition-colors animate-bounce-x"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
