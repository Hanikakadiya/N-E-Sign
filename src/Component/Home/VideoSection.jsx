import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../Icons/icons";

export default function VideoSection() {
  return (
    <section className="relative w-full py-5 sm:py-24 font-poppins flex flex-col items-center">
      {/* "See all projects" Button (overlaps previous section) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <button className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full border-1 border-[#ffffff]/20 text-[var(--color-primary)] font-semibold text-sm sm:text-base md:text-lg">
          See all projects
          <Icons.ArrowDownRight
            className="w-5 h-5 animate-bounce-x"
          />
        </button>
      </div>

      <div className="w-full">
        {/* Main Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-[#111] overflow-hidden group shadow-2xl"
        >
          {/* Background Image */}
          <img
            src="/Image/VideoSection/Video-img.png"
            alt="Printer Machine Video Thumbnail"
            className="w-full h-full object-cover "
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Centered Play Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            {/* SVG Blob Image */}
            <img 
              src="/Image/VideoSection/blob-bg-black.png" 
              alt="blob-image" 
              className="w-[100px] sm:w-[150px] md:w-[180px] h-auto object-contain"
            />
            {/* Text inside Blob */}
            <span className="absolute font-bold text-base sm:text-xl md:text-2xl tracking-widest uppercase">
              Play
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
