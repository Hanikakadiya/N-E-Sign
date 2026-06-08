import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../Icons/icons";

export default function LatestDesigns() {
  const designs = [
    {
      image: "/Image/LatestDesigns/image-1-glow.png",
      hoverImage: "/Image/LatestDesigns/image-1-hover.png",
      category: "Signage",
      title: "LED Neon Signage",
    },
    {
      image: "/Image/LatestDesigns/portfolio_business_cards.png",
      hoverImage: "/Image/LatestDesigns/image-4-book.png",
      category: "Printing",
      title: "BUSINESS CARDS",
    },
    {
      image: "/Image/LatestDesigns/image-3-tag.png",
      hoverImage: "/Image/OurWork/OurWork-img-hover-second.png",
      category: "Printing",
      title: "DOOR HANGERS",
    },
    {
      image: "/Image/LatestDesigns/portfolio_magazine.png",
      hoverImage: "/Image/LatestDesigns/OurWork-img-hover-first.png",
      category: "Printing",
      title: "MAGAZINES PRINTING",
    },
  ];

  return (
    <section className="relative container mx-auto w-full py-16 sm:py-24 font-poppins">
      <div className="w-full px-4 sm:px-8 lg:px-0 mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center md:items-start max-w-4xl mx-auto xl:mx-0 xl:pl-[312px] text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="text-[var(--color-primary)] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
              PORTFOLIO
            </span>
            <Icons.ArrowDownRight className="w-5 h-5 text-[var(--color-primary)] animate-bounce-x" />
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight text-white max-w-xl">
            Our latest Awesome Designs
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col w-full"
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden w-full ${
                  index === 0 || index === 3
                    ? "aspect-[4/3] sm:aspect-[16/12]"
                    : "aspect-[4/5] sm:aspect-[16/14]"
                }`}
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${design.hoverImage ? "group-hover:opacity-0" : ""}`}
                />
                {design.hoverImage && (
                  <img
                    src={design.hoverImage}
                    alt={design.title + " Hover"}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Footer */}
              <div className="bg-[#111111] border-t border-[#222] p-6 flex items-center justify-between transition-colors duration-300">
                <div className="flex flex-col gap-1">
                  <span className="text-[var(--color-gray)] text-xs tracking-wider uppercase">
                    {design.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {design.title}
                  </h3>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-transparent">
                  <img
                    src="/Image/LatestDesigns/ArrowUpRight.png"
                    alt="Arrow"
                    className="w-6 h-6 md:w-8 md:h-8 animate-bounce-x"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
