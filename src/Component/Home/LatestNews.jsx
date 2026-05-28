import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../Icons/icons";

const newsData = [
  {
    id: 1,
    date: "February - 20th 2024",
    title: "Will you be attending Affiliate Summit Europe?",
    description:
      "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
    image: "/Image/LatestNews/LatestNews-1.png",
  },
  {
    id: 2,
    date: "February - 20th 2024",
    title: "Will you be attending Affiliate Summit Europe?",
    description:
      "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
    image: "/Image/LatestNews/LatestNews-2.png",
  },
  {
    id: 3,
    date: "February - 20th 2024",
    title: "Will you be attending Affiliate Summit Europe?",
    description:
      "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection.",
    image: "/Image/LatestNews/LatestNews-3.png",
  },
];

export default function LatestNews() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="container mx-auto py-16 sm:py-24 bg-[#111] font-poppins relative">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-[var(--color-primary)] text-[16px] font-normal uppercase tracking-widest text-sm sm:text-base">
            BLOG & NEWS
          </span>
          <Icons.ArrowDownRight className="w-5 h-5 animate-bounce-x text-[var(--color-primary)]" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold leading-tight max-w-[800px] mx-auto">
          Our Latest News & Blog Get
          <br className="hidden md:block" /> Every Updates
        </h2>
      </div>

      {/* News Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start"
      >
        {newsData.map((news) => (
          <motion.div
            key={news.id}
            variants={itemVariants}
            className="relative h-[300px] sm:h-[340px] z-10 hover:z-20"
          >
            <div className="absolute top-0 left-0 w-full flex flex-col bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#333] hover:border-[#4d4d4d] transition-all duration-300 group shadow-lg">
              {/* Text Content (Top) */}
              <div className="p-6 md:p-8 flex flex-col gap-2 relative z-10 bg-[#1a1a1a]">
                <span className="text-gray-400 text-xs sm:text-sm tracking-wide">
                  {news.date}
                </span>
                <h3 className="text-sm sm:text-lg md:text-xl font-medium leading-snug">
                  {news.title}
                </h3>

                {/* Expanding Description */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="text-gray-400 mt-3 leading-relaxed text-[12px] sm:text-[14px] md:text-[16px]">
                      {news.description}
                    </p>
                  </div>
                </div>

                {/* Yellow Arrow Button */}
                <div className="absolute right-6 bottom-0 translate-y-1/2 w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 cursor-pointer shadow-lg">
                  <Icons.ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Image Content (Bottom) */}
              <div className="w-full h-[180px] sm:h-[180px] overflow-hidden z-0">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-[180px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
