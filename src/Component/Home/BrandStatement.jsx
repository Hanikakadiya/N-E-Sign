import React from "react";
import { motion } from "framer-motion";

export default function BrandStatement() {
  // Animation variant for heading transform
  const headingAnim = {
    hidden: { x: -30, scale: 0.8, opacity: 0 },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, type: "spring", stiffness: 100 },
    },
  };

  // Sub-heading animation: two‑step zoom/fade with repeat
  const subHeadingAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 1, 0, 1],
      scale: [0.8, 1.2, 1, 1],
      transition: {
        duration: 1.2,
        times: [0, 0.3, 0.6, 1],
        ease: "easeInOut",
        repeat: 2,
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-48 flex items-center justify-center">
      {/* Soft Background Glow on the right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[600px] sm:h-[600px] bg-[var(--color-primary)]/30 blur-[150px] sm:blur-[250px] rounded-full pointer-events-none"></div>

      {/* Text Container */}
      <div className="relative inline-block px-4 sm:px-8 md:px-16 lg:px-30 z-10 w-full max-w-[1720px] mx-auto flex flex-col items-center">
        <div className="relative inline-block w-full">
          {/* Top Left Quote */}
          <div className="absolute -top-8 -left-2 sm:-top-12 sm:-left-4 md:-top-16 md:-left-8 lg:-top-20 lg:-left-16 xl:-top-24 xl:-left-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#8B7355"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 opacity-90"
            >
              <path d="M4 4h7l-3 16H4V4zm9 0h7l-3 16h-4V4z" />
            </svg>
          </div>
          <div className="p-2 sm:p-5 flex flex-col xl:flex-row items-center xl:items-start justify-center">
            {/* Main Typography */}
            <div className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[90px] font-poppins font-extrabold leading-[1.1] tracking-tight flex flex-col xl:flex-row items-center xl:items-baseline justify-center text-center xl:text-left w-full">
              {/* Line 1 */}
              <motion.div
                variants={headingAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex justify-center xl:justify-start w-full xl:w-auto"
              >
                <span
                  className="mr-0 xl:mr-5 mb-2 xl:mb-0 block whitespace-nowrap"
                  style={{ textShadow: "0 4px 20px rgba(255,255,255,0.4)" }}
                >
                  PRINT THAT MAKES
                </span>
              </motion.div>

              {/* Line 2 (Mobile: Side-by-side, Desktop: Stacked) */}
              <div className="flex flex-row xl:flex-col relative w-fit items-center xl:items-end justify-center mx-auto xl:mx-0 gap-3 md:gap-5 xl:gap-0 mt-3 md:mt-4 xl:mt-0">
                {/* Background Pattern for Line 2 */}
                <div className="absolute top-0 xl:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 md:opacity-30 pointer-events-none w-[180px] sm:w-[300px] md:w-[500px] lg:w-[650px] xl:w-[450px] z-[-9]">
                  <svg viewBox="0 0 100 100" className="w-full h-auto">
                    <defs>
                      <pattern
                        id="lines"
                        width="100"
                        height="3"
                        patternUnits="userSpaceOnUse"
                      >
                        <line
                          x1="0"
                          y1="1.5"
                          x2="100"
                          y2="1.5"
                          stroke="white"
                          strokeWidth="0.2"
                        />
                      </pattern>
                      <mask id="donutMask">
                        <circle cx="50" cy="50" r="48" fill="white" />
                        <circle cx="50" cy="50" r="32" fill="black" />
                      </mask>
                    </defs>
                    <circle
                      cx="50"
                      cy="50"
                      r="49"
                      fill="url(#lines)"
                      mask="url(#donutMask)"
                    />
                  </svg>
                </div>

                <motion.div
                  variants={headingAnim}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-center justify-center xl:justify-end relative z-10 w-full"
                >
                  <span
                    className="text-[var(--color-dark-orange)] block whitespace-nowrap"
                    style={{ textShadow: "0 4px 30px rgba(239,170,100,0.5)" }}
                  >
                    YOUR BRAND
                  </span>
                </motion.div>

                {/* Sub Heading (Outline Text) */}
                <motion.div
                  className="flex items-center justify-center xl:justify-end relative z-10 w-full xl:mt-[-0.2em]"
                  variants={subHeadingAnim}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h1
                    className="text-transparent font-poppins text-[19px] sm:text-[28px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[75px] tracking-widest whitespace-nowrap leading-tight"
                    style={{ WebkitTextStroke: "1px white" }}
                  >
                    STAND OUT
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Bottom Right Quote */}
          <div className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-4 md:-bottom-14 md:-right-8 lg:-bottom-20 lg:-right-16 xl:-bottom-24 xl:-right-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#8B7355"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 opacity-90 rotate-180"
            >
              <path d="M4 4h7l-3 16H4V4zm9 0h7l-3 16h-4V4z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
