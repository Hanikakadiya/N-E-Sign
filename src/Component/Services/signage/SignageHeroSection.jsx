import React, { useState } from "react";

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
    <section className="min-h-[90vh] w-full bg-[#0a0a0a] flex items-center justify-center py-20 overflow-hidden">
      <div className="max-w-[98%] w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-[700px]">
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
          </div>

          {/* Right Content - Gallery */}
          <div className="relative w-full">
            {/* Glow Spot Behind Cards */}
            <div className="absolute top-[20px] right-[-40px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-primary)] opacity-30 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 flex items-stretch gap-3 sm:gap-4 h-[400px] sm:h-[500px] w-full justify-end">
              {/* Gallery Cards */}
              {signageCards.map((item, index) => {
                const isActive = activeCard === index;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveCard(index)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0 group ${
                      isActive
                        ? "w-[320px] md:w-[350px] flex-grow opacity-100 shadow-2xl"
                        : "w-[40px] sm:w-[50px] md:w-[60px] lg:w-[65px] flex-grow-0 opacity-80 hover:opacity-100 shadow-xl"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? "scale-105" : "group-hover:scale-105"}`}
                    />

                    {/* Gradient Overlay for Text */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                    ></div>

                    {/* Card Content */}
                    <div
                      className={`absolute bottom-0 left-0 p-6 sm:p-8 min-w-[320px] md:min-w-[350px] flex flex-col items-start transition-opacity duration-500 delay-100 ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    >
                      <h3 className="text-white text-[22px] font-bold mb-4 whitespace-nowrap">
                        {item.title}
                      </h3>
                      <button className="bg-[var(--color-dark-orange)] text-[12px] font-bold px-5 py-2.5 rounded-md uppercase tracking-[0.1em] flex items-center gap-2 transition-colors cursor-pointer">
                        Know Your Sign
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
