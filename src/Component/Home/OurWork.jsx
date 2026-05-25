import React from "react";

export default function OurWork() {
  return (
    <>
      <section className="relative bg-black w-full min-h-[60vh] py-24 sm:py-32 lg:py-48 flex items-center justify-center overflow-hidden">
        {/* Soft Background Glow on the right */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#8B7355]/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none"></div>

        {/* Circular Lines Pattern (SVG) */}
        <div
          className="absolute right-[5%] -translate-y-1/2 opacity-20 md:opacity-30 pointer-events-none w-[250px] md:w-[400px]"
          style={{ top: "calc(1 / 2 * 85%)" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-auto">
            <defs>
              <pattern
                id="lines"
                width="100"
                height="4"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="2"
                  x2="100"
                  y2="2"
                  stroke="white"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#lines)" />
            <circle cx="50" cy="50" r="25" fill="black" />
          </svg>
        </div>

        {/* Text Container */}
        <div className="relative inline-block px-10 sm:px-16 md:px-24 z-10 w-full mx-auto flex flex-col items-center ">
          <div className="relative inline-block w-full max">
            {/* Top Left Quote */}
            <div className="absolute -top-8 -left-2 sm:-top-12 sm:-left-8 md:-top-16 md:-left-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#8B7355"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 opacity-90"
              >
                <path d="M4 4h7l-3 16H4V4zm9 0h7l-3 16h-4V4z" />
              </svg>
            </div>
            <div className="p-5">
              {/* Main Typography */}
              <h1 className="text-white text-[26px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[90px] font-poppins font-extrabold leading-tight tracking-tight flex flex-wrap items-center justify-center md:justify-start gap-x-2 sm:gap-x-4">
                <span
                  style={{ textShadow: "0 4px 20px rgba(255,255,255,0.4)" }}
                >
                  PRINT THAT MAKES
                </span>
                <span
                  className="text-dark-orange"
                  style={{ textShadow: "0 4px 30px rgba(239,180,81,0.8)" }}
                >
                  YOUR BRAND
                </span>
              </h1>

              {/* Sub Heading (Outline Text) */}
              <div className="flex justify-center  float-right mt-2 sm:mt-4 ">
                <h2
                  className="text-transparent font-poppins text-6xl md:text-7xl lg:text-8xl tracking-wider float-right "
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  STAND OUT
                </h2>
              </div>
            </div>
            {/* Bottom Right Quote */}
            <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 md:-right-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#8B7355"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 opacity-90 rotate-180"
              >
                <path d="M4 4h7l-3 16H4V4zm9 0h7l-3 16h-4V4z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-[20px] right-[-40px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 blur-[100px] md:blur-[110px] rounded-full pointer-events-none"></div>
        </div>
      </section>
    </>
  );
}
