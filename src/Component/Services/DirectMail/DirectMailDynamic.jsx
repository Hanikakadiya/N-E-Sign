import React from "react";
import { Icons } from "../../Icons/icons";
import { section } from "framer-motion/client";

export default function DirectMailDynamic({ 
  imagePosition = "left", 
  image, 
  heading, 
  description, 
  listItems = [] 
}) {
  return (
    <section>
    <div className="w-full mx-auto px-4 md:px-8 py-16 lg:py-24 ">
        <img src="/Image/Services/DirectMail/Shape.png" alt="shape" className="absolute top-20 left-0 right-0 z-0  max-xl:hidden" />
    </div>
    <div className={`flex flex-col ${imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center lg:items-start gap-12 lg:gap-20`}>
        
        Left/Right Image Section
        <div className={`w-full lg:w-5/12 relative flex justify-center ${imagePosition === "left" ? "lg:justify-start" : "lg:justify-end"}`}>
          {/* Sparkles */}
          <div className={`absolute -top-12 z-10 text-[var(--color-primary)] ${imagePosition === "left" ? "-left-4 lg:-left-8" : "-right-4 lg:-right-8"}`}>
            <Icons.Star className="absolute top-0 left-12 w-12 h-12" />
            <Icons.Star className="absolute top-12 left-0 w-8 h-8" />
          </div>

          {/* Image Container */}
          <div className={`w-full max-w-[450px] aspect-[4/5] sm:h-[550px] overflow-hidden relative z-0 border border-white/5 
            ${imagePosition === "left" ? "rounded-tl-[64px] rounded-tr-[64px] rounded-bl-[24px] rounded-br-[24px]" : "rounded-tr-[160px] rounded-tl-[24px] rounded-bl-[24px] rounded-br-none"}`}>
            {image && <img src={image} alt={heading} className="w-full h-full object-cover" />}
            
            {/* Colored Corner Triangle */}
            <div className={`absolute bottom-0 w-24 h-24 bg-[var(--color-primary)] ${imagePosition === "left" ? "left-0" : "right-0"}`}
                 style={{ clipPath: imagePosition === "left" ? 'polygon(0 0, 0% 100%, 100% 100%)' : 'polygon(100% 0, 0% 100%, 100% 100%)' }}>
            </div>
          </div>
        </div>

        {/* Right/Left Text Section */}
        <div className="w-full lg:w-7/12 flex flex-col pt-4 lg:pt-10">
          <h2 className="text-[32px] md:text-4xl lg:text-[46px] font-bold leading-[1.2] mb-6 text-white font-poppins">
            {heading}
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 leading-relaxed mb-10 font-normal whitespace-pre-line">
            {description}
          </p>

          {/* List Items */}
          {listItems && listItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-[var(--color-primary)]">
                    <Icons.Check className="w-[20px] h-[20px]" />
                  </div>
                  <span className="text-[15px] lg:text-[16px] text-white/90 font-light leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
