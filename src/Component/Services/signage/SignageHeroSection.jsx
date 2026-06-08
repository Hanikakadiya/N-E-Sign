import React, { useState } from "react";
import { Icons } from "../../Icons/icons";
import { motion } from "framer-motion";

export default function SignageHeroSection() {
  const signageCards = [
    { src: "/Image/signage/signage-aesthetic.jpg", title: "Exterior Sign" },
    { src: "/Image/signage/signage-burgers.jpg", title: "Restaurant Signs" },
    {
      src: "/Image/signage/signage-digital-board.jpg",
      title: "Digital Boards",
    },
    { src: "/Image/signage/signage-neon-signs.jpg", title: "Neon Signs" },
    { src: "/Image/signage/signage-wall-graphics.jpg", title: "Wall Graphics" },
    {
      src: "/Image/signage/signage-vehicle-graphics.jpg",
      title: "Vehicle Graphics",
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="min-h-[90vh] w-full flex items-center justify-center pb-20 pt-32 overflow-hidden">
      <div className="max-w-[98%] w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start max-w-[700px]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-20 bg-[var(--color-primary)]"></div>
              <span className="text-[var(--color-primary)] tracking-[0.15em] text-[14px] uppercase">
                Signage
              </span>
            </div>

            <h1 className="text-[40px] sm:text-[48px] lg:text-[50px] xl:text-[52px] font-medium font-poppins leading-[1.2] mb-8">
              Get your Business Signage in Best Price.
            </h1>

            <p className="text-gray-400 font-normal text-[16px] sm:text-[19px] leading-[1.3] mb-6">
              Get high-quality business signage designed to attract attention
              and build trust. We offer durable, visually striking signs at the
              best prices, tailored to fit your brand and business needs.
            </p>

            <p className="text-gray-400 font-normal text-[16px] sm:text-[19px] leading-[1.3]">
              Make your business stand out with affordable, eye-catching
              signage. From design to installation, we deliver quality signs
              that fit your budget without compromising on style.
            </p>
          </motion.div>

          {/* Right Content - Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full"
          >
            {/* Glow Spot Behind Cards */}
            <div className="absolute top-[20px] right-[-40px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-primary)] opacity-30 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-stretch gap-4 sm:gap-6 lg:gap-4 lg:h-[500px] w-full lg:justify-end mt-10 lg:mt-0">
              {/* Gallery Cards */}
              {signageCards.map((item, index) => {
                const isActive = activeCard === index;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => window.innerWidth >= 1024 && setActiveCard(index)}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-500 group flex min-w-0 min-h-0 h-[250px] sm:h-[300px] lg:h-auto ${
                      isActive
                        ? "lg:flex-[5] shadow-2xl"
                        : "lg:flex-[1] lg:opacity-80 lg:hover:opacity-100 shadow-xl lg:cursor-pointer"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? "scale-105" : "group-hover:scale-105"}`}
                    />

                    {/* Gradient Overlay for Text */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500 block ${isActive ? "lg:opacity-100" : "lg:opacity-0"}`}
                    ></div>

                    {/* Closed State Title */}
                    <div
                      className={`hidden lg:flex absolute inset-0 items-center justify-center p-4 transition-opacity duration-300 ${
                        isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    >
                    </div>

                    {/* Card Content */}
                    <div
                      className={`absolute bottom-0 left-0 p-6 sm:p-8 w-full lg:w-[280px] xl:w-[350px] flex flex-col items-start transition-opacity duration-500 opacity-100 pointer-events-auto ${isActive ? "lg:opacity-100 lg:pointer-events-auto lg:delay-100" : "lg:opacity-0 lg:pointer-events-none"}`}
                    >
                      <h3 className="text-white text-[22px] lg:text-[18px] xl:text-[22px] font-bold mb-4 whitespace-nowrap">
                        {item.title}
                      </h3>
                      <button className="bg-[var(--color-dark-orange)] text-[12px] lg:text-[10px] xl:text-[12px] font-bold px-5 lg:px-4 xl:px-5 py-2.5 lg:py-2 xl:py-2.5 rounded-md uppercase tracking-[0.1em] flex items-center gap-2 transition-colors cursor-pointer w-fit">
                        Know Your Sign
                        <Icons.ArrowRight className="w-5 h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 ml-5 lg:ml-2 xl:ml-5 transition-colors duration-300 animate-bounce-x" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
