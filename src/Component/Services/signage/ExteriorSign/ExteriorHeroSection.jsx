import React from "react";
import { Icons } from "../../../Icons/icons";

export default function ExteriorHeroSection() {
  const cards = [
    {
      title: "Building Signs",
      description:
        "Signs mounted directly on the buildings for branding and visibility",
      image: "/Image/signage/Exterior-sign-01.png", // Using closest match
      overlayColor: "from-[#852170] to-[#CF414B]", // Purple to pinkish
    },
    {
      title: "Freestanding Signs",
      description:
        "Standalone signs designed for visibility form a distance or near entrances",
      image: "/Image/signage/Digital-Board-03.png", // Using closest match
      overlayColor: "from-[#EDBC5A] to-[#F79C29]", // Yellow to orange
    },
    {
      title: "Temporary Signs",
      description:
        "Flexible signage for short-term use, promotions, and events",
      image: "/Image/signage/Wall-Graphics-05.png", // Using closest match
      overlayColor: "from-[#4FE6F1] to-[#2472FC]", // Light blue to blue
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black pt-32 pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#c5a880]/15 blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      {/* Optional Topo Graphic */}
      <img 
        src="/Image/Wave.png" 
        alt="Topo graphic" 
        className="absolute top-0 right-0 opacity-20 w-[400px] md:w-[600px] object-cover mix-blend-screen pointer-events-none z-0" 
      />

      <div className="max-w-[85%] w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-start mb-16 relative">
          <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-transparent w-fit">
            <div className="w-3 h-3 flex items-center justify-center rounded-full border border-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
            <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              Exterior Sign
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-poppins">
            Exterior Signage
          </h1>

          <p className="text-gray-300 text-sm md:text-base lg:text-[17px] max-w-xl font-light">
            Signs mounted directly on the building for branding and visibility.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[380px] sm:h-[420px] lg:h-[450px] rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay - mix blend mode to get that exact rich color look */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.overlayColor} opacity-85 mix-blend-multiply transition-opacity duration-500`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.overlayColor} opacity-40 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-white text-2xl sm:text-[28px] font-bold mb-4 font-poppins leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/95 text-sm sm:text-[15px] font-medium leading-snug">
                    {card.description}
                  </p>
                </div>

                <button className="flex items-center justify-center gap-3 w-fit border border-white/50 rounded-full px-5 py-2 hover:bg-white/10 transition-colors duration-300">
                  <span className="text-white text-xs sm:text-[13px] font-medium">
                    View More
                  </span>
                  <Icons.ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
