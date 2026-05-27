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
    <section className="relative w-full min-h-[60vh] py-24 sm:py-32 lg:py-48 flex items-center justify-center overflow-hidden">
      {/* Soft Background Glow on the right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[var(--color-primary)]/30 blur-[150px] sm:blur-[250px] rounded-full pointer-events-none"></div>

      {/* Text Container */}
      <div className="relative inline-block px-10 sm:px-16 md:px-30 z-10 w-full mx-auto flex flex-col items-center ">
        <div className="relative inline-block w-full max">
          {/* Top Left Quote */}
          <div className="absolute -top-16 -left-2 sm:-top-12 sm:-left-8 md:-top-25 md:-left-35">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#8B7355"
              className="w-20 h-20 sm:w-30 sm:h-30 md:w-35 md:h-35 opacity-90"
            >
              <path d="M4 4h7l-3 16H4V4zm9 0h7l-3 16h-4V4z" />
            </svg>
          </div>
          <div className="p-5 flex flex-col md:flex-row items-center md:items-start justify-center">
            {/* Main Typography */}
            <div className="text-3xl sm:text-5xl md:text-[80px] lg:text-[100px] font-poppins font-extrabold leading-none tracking-tight flex flex-col md:flex-row items-center md:items-baseline justify-center">
              <motion.div
                variants={headingAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
              >
                <span
                  className="mr-3 md:mr-5 whitespace-nowrap mb-4 md:mb-0 block md:inline-block"
                  style={{ textShadow: "0 4px 20px rgba(255,255,255,0.4)" }}
                >
                  PRINT THAT MAKES
                </span>
              </motion.div>

              <div className="flex flex-col relative w-fit items-end">
                <div className="absolute top-1/6 right-0 translate-x-[15%] md:translate-x-[25%] -translate-y-1/2 opacity-25 md:opacity-30 pointer-events-none w-[250px] md:w-[350px] z-[-9]">
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
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex flex-col items-end w-full relative z-10"
                >
                  <span
                    className="text-[var(--color-dark-orange)] whitespace-nowrap block"
                    style={{ textShadow: "0 4px 30px rgba(239,170,100,0.5)" }}
                  >
                    YOUR BRAND
                  </span>
                </motion.div>

                {/* Sub Heading (Outline Text) perfectly width-matched */}
                <motion.div
                  className="w-full mt-1 md:mt-[-0.2em] flex justify-end relative z-10"
                  variants={subHeadingAnim}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <h1
                    className="text-transparent font-poppins text-3xl sm:text-5xl md:text-[70px] lg:text-[85px] tracking-[0.1em] sm:tracking-widest whitespace-nowrap leading-loose"
                    style={{ WebkitTextStroke: "1px white" }}
                  >
                    STAND OUT
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Bottom Right Quote */}
          <div className="absolute -bottom-6 -right-6 sm:-bottom-12 sm:-right-12 md:-bottom-18 md:-right-35">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#8B7355"
              className="w-20 h-20 sm:w-30 sm:h-30 md:w-35 md:h-35 opacity-90 rotate-180"
            >
              <path d="M4 4h7l-3 16H4V4zm9 0h7l-3 16h-4V4z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
