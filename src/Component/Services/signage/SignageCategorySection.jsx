import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../Icons/icons";
import SignageData from "../../Data/SignageData.json";
import { motion } from "framer-motion";

export default function SignageCategorySection() {
  const [activeCard, setActiveCard] = useState(null);

  const categories = SignageData;

  return (
    <section className="w-full pb-20 pt-32 overflow-hidden">
      <div className="max-w-[83%] w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[var(--color-primary)]"></div>
            <span className="text-[var(--color-primary)] tracking-widest text-sm uppercase font-semibold">
              Category
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold max-w-xl leading-tight font-poppins">
            Find the Right Signage for Your Business
          </h2>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:h-[500px] gap-6 lg:gap-6"
          onMouseLeave={() => window.innerWidth >= 1024 && setActiveCard(null)}
        >
          {categories.map((cat, idx) => {
            const isActive = activeCard === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() =>
                  window.innerWidth >= 1024 && setActiveCard(idx)
                }
                className={`relative rounded-xl overflow-hidden transition-all duration-700 ease-in-out flex flex-col items-center justify-between min-w-0 min-h-0 h-[320px] lg:h-full ${
                  isActive
                    ? "lg:flex-[4] shadow-2xl"
                    : "lg:flex-[1] shadow-lg lg:opacity-80 lg:hover:opacity-100 lg:cursor-pointer"
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? "lg:scale-105" : ""
                  }`}
                />

                {/* Color Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${cat.gradient} transition-opacity duration-700 ${
                    isActive ? "opacity-0" : "opacity-40"
                  }`}
                ></div>

                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col items-center justify-between z-10 cursor-pointer">
                  {/* Closed State Content (Hidden on mobile) */}
                  <div
                    className={`hidden lg:flex flex-col items-center h-full w-full justify-between pb-0 pt-0 transition-opacity duration-300 ${isActive ? "opacity-0 absolute inset-0 pointer-events-none" : "opacity-100"}`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-[1px] h-20 bg-white/50"></div>
                      <div
                        className="text-xl tracking-wider font-medium whitespace-nowrap mt-2"
                        style={{ writingMode: "vertical-rl" }}
                      >
                        {cat.title}
                      </div>
                    </div>
                    <div className="font-bold text-transparent [-webkit-text-stroke:2px_white] text-6xl">
                      {cat.number}
                    </div>
                  </div>

                  {/* Open State Content (Always visible on mobile) */}
                  <div
                    className={`absolute bottom-0 left-0 p-6 md:p-8 lg:p-8 xl:p-10 flex flex-col items-start w-full lg:w-[320px] xl:w-[600px] transition-all duration-500 opacity-100 translate-y-0 visible ${
                      isActive
                        ? "lg:opacity-100 lg:translate-y-0 lg:visible lg:delay-100"
                        : "lg:opacity-0 lg:translate-y-4 lg:invisible lg:delay-0 lg:pointer-events-none"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 xl:mb-4">
                      <div className="w-8 xl:w-10 h-[1px] bg-white"></div>
                      <span className="text-xs lg:text-[11px] xl:text-sm font-bold tracking-widest uppercase">
                        Signage
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-bold mb-3 xl:mb-5 whitespace-nowrap">
                      {cat.title}
                    </h3>
                    <p className="text-sm lg:text-xs xl:text-base font-normal leading-relaxed mb-6 lg:mb-4 xl:mb-8 max-w-[280px] lg:max-w-full">
                      {cat.description}
                    </p>
                    <Link
                      to={cat.link}
                      className="flex items-center gap-2 xl:gap-3 px-6 lg:px-5 xl:px-8 py-2.5 lg:py-2 xl:py-3 rounded-full border border-white transition-all duration-300 cursor-pointer hover:bg-white/10 w-fit"
                    >
                      <span className="text-[#c5a880] text-xs lg:text-[10px] xl:text-sm font-semibold uppercase tracking-wider">
                        View More
                      </span>
                      <Icons.ArrowRight className="w-5 h-5 lg:w-4 lg:h-4 xl:w-6 xl:h-6 text-[#c5a880] transition-colors duration-300 animate-bounce-x" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
