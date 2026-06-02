import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../../Icons/icons";
import SignageData from "../../../Data/SignageData.json";

export default function ExteriorHeroSection() {
  const cards = SignageData.find(c => c.title === "Exterior sign")?.subCategories || [];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[600px] sm:h-[600px] bg-[var(--color-primary)]/40 blur-[150px] sm:blur-[250px] rounded-full pointer-events-none"></div>

      {/* Optional Topo Graphic */}
      <img
        src="/Image/Wave.png"
        alt="Topo graphic"
        className="absolute  right-0 opacity-20 w-[400px] md:w-[450px] object-cover mix-blend-screen pointer-events-none z-0"
      />

      <div className="w-full xl:max-w-[85%] 2xl:max-w-[75%] mx-auto px-4 md:px-8 lg:px-10 xl:px-8 relative z-10 pt-[80px] md:pt-[120px]">
        {/* Header Section */}
        <div className="flex flex-col items-start mb-16 relative">
          <div className="flex items-center gap-4 mb-8">
            {/* Back Arrow */}
            <Link
              to="/services/signage"
              className="flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              title="Back to Categories"
            >
              <Icons.ArrowRight className="w-5 h-5 rotate-180" />
            </Link>

            {/* Exterior Sign Badge */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a1a1a] w-fit shadow-lg border border-white/5">
              <div className="w-3.5 h-3.5 flex items-center justify-center rounded-full border ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-300"></div>
              </div>
              <span className="text-gray-300 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase">
                Exterior Sign
              </span>
            </div>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-[54px] font-medium mb-5 font-poppins">
            Exterior Signage
          </h1>

          <p className="text-gray-400 text-sm md:text-base lg:text-[16px] max-w-xl font-normal">
            Signs mounted directly on the building for branding and visibility.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <Link
              key={idx}
              className="group relative w-full h-[340px] sm:h-[380px] lg:h-[430px] lg:w-[350px] rounded-sm overflow-hidden border border-white block"
              to={card.href || "#"}
            >
              {/* Background Image spans full height */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay - mix blend mode to get that exact rich color look */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.overlayColor} opacity-85 group-hover:opacity-0 mix-blend-multiply transition-opacity duration-500 z-10`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.overlayColor} opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-10`}
              ></div>

              {/* Content */}
              <div className="absolute top-0 left-0 p-6 lg:p-7 w-full z-20 flex flex-col transition-opacity duration-500">
                <h3 className="text-[24px] lg:text-[26px] font-bold mb-3 font-poppins leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/90 text-[14px] lg:text-[15px] font-medium leading-relaxed max-w-[95%] group-hover:opacity-0 transition-all duration-500">
                  {card.description}
                </p>
              </div>

              {/* Bottom half with button - Solid normally, Glassy on hover */}
              <div className="absolute bottom-0 left-0 h-[70px] lg:h-[80px] w-full bg-[#181818] group-hover:bg-[#181818]/60 group-hover:backdrop-blur-md flex items-center px-6 lg:px-7 transition-all duration-500 z-20 cursor-pointer">
                <div className="flex items-center justify-center gap-3 w-fit border rounded-full px-5 py-2 hover:bg-white/5 transition-all duration-300 group/btn">
                  <span className="text-[#c5a880] text-xs lg:text-[13px] font-medium">
                    View More
                  </span>
                  <Icons.ArrowRight className="w-4 h-4 text-[#c5a880] transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
