import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../../../Icons/icons";
import SignageData from "../../../Data/SignageData.json";

export default function InteriorSigns() {
  const cards = SignageData.find(c => c.title === "Interior sign")?.subCategories || [];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[600px] sm:h-[600px] bg-[var(--color-primary)]/40 blur-[150px] sm:blur-[250px] rounded-full pointer-events-none"></div>

      {/* Optional Topo Graphic */}
      <img
        src="/Image/Wave.png"
        alt="Topo graphic"
        className="absolute right-0 opacity-20 w-[400px] md:w-[450px] object-cover mix-blend-screen pointer-events-none z-0"
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

            {/* Interior Sign Badge */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a1a1a] w-fit shadow-lg border border-white/5">
              <div className="w-3.5 h-3.5 flex items-center justify-center rounded-full border ">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-300"></div>
              </div>
              <span className="text-gray-300 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase">
                Interior Sign
              </span>
            </div>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-[54px] font-medium mb-3 font-poppins">
            Interior Signage
          </h1>

          <p className="text-gray-400 text-sm md:text-base lg:text-[16px] max-w-xl font-normal">
            Essential for identifying spaces and enhancing branding within your building.
          </p>
        </div>

        {/* Cards Section */}
        {cards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.15 }}
                className="w-full h-full"
              >
                <Link
                  className="group relative w-full h-[320px] sm:h-[350px] lg:h-[380px] rounded-sm overflow-hidden border border-white/20 block bg-[#111]"
                  to={card.href || "#"}
                >
                  {/* Background Image spans full height */}
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.target.style.display = 'none';
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${card.overlayColor} opacity-70 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-multiply`}
                ></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${card.overlayColor} opacity-50 group-hover:opacity-20 transition-opacity duration-500 z-10`}
                ></div>

                {/* Content */}
                <div className="absolute top-0 left-0 p-5 w-full z-20 flex flex-col transition-opacity duration-500">
                  <h3 className="text-[20px] lg:text-[22px] font-bold mb-3 font-poppins leading-tight text-white drop-shadow-md">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-[13px] lg:text-[14px] font-medium leading-relaxed drop-shadow-md group-hover:opacity-90 transition-all duration-500">
                    {card.description}
                  </p>
                </div>

                {/* Bottom half with button */}
                <div className="absolute bottom-0 left-0 h-[60px] w-full bg-[#181818] flex items-center px-5 transition-all duration-500 z-20 cursor-pointer">
                  <div className="flex items-center justify-center gap-2 w-fit border border-[#555] rounded-full px-4 py-1.5 hover:bg-white/10 transition-all duration-300 group/btn">
                    <span className="text-[#c5a880] text-[12px] font-medium">
                      View More
                    </span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 text-[#c5a880] transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-gray-400 text-[16px] italic pb-20">
            More content coming soon...
          </div>
        )}
      </div>
    </section>
  );
}
