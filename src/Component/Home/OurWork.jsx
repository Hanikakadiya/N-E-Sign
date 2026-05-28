import React from "react";

export default function OurWork() {
  return (
    <>
      <section className="relative w-full py-16 sm:py-24 mx-auto overflow-hidden">
        {/* Vector Background Graphic inside relative section */}
        <img
          src="/Image/OurWork/Vector.png"
          alt="Vector Img"
          className="absolute left-[-20px] sm:left-[-40px] md:left-[-70px] top-[20px] sm:top-[30px] md:top-[40px] w-[120px] sm:w-[180px] md:w-[220px] h-auto opacity-100 z-0 pointer-events-none"
        />
        <div className="w-full px-4 sm:px-8 lg:px-0 relative z-10 max-w-[1720px] mx-auto">
          {/* Section Heading */}
          <div className="relative flex items-center mb-10 md:mb-16">
            <h1 className="relative z-10 text-[var(--color-dark-orange)] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-poppins font-bold tracking-[0.2em] uppercase">
              OUR WORK
            </h1>
          </div>
          
          {/* Main Content Grid (1 col mobile, 2 col tablet, 12 cols laptop/desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-4 lg:gap-6">
            
            {/* Left Column (Image 1 + Experience Stats + Paragraph) */}
            <div className="sm:col-span-1 lg:col-span-5 flex flex-col gap-6 md:gap-10">
              <div className="relative group overflow-hidden rounded-[20px] shadow-lg w-full aspect-[777/387]">
                <img
                  src="/Image/OurWork/OurWork-First-Img.png"
                  alt="WorkImg"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
                />
                <img
                  src="/Image/OurWork/OurWork-img-hover-first.png"
                  alt="WorkImg Hover"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-col gap-6">
                {/* 25 Years Experience - Centered on mobile, left on sm+ */}
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 w-full sm:w-fit">
                  <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tighter">
                    25
                  </h1>
                  <h2 className="flex flex-col text-[var(--color-primary)] font-bold uppercase text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
                    <span
                      className="text-transparent text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl tracking-[5px]"
                      style={{ WebkitTextStroke: "1px #8B7355" }}
                    >
                      YEAR
                    </span>
                    <span className="text-[var(--color-dark-orange)] tracking-widest text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
                      EXPERIENCE
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Middle Column (Image 2) */}
            <div className="sm:col-span-1 lg:col-span-3 w-full flex flex-col gap-6">
              <div className="relative group overflow-hidden rounded-[20px] shadow-lg w-full aspect-[416/578]">
                <img
                  src="/Image/OurWork/OurWork-Second-img.png"
                  alt="WorkImg"
                  className="absolute inset-0 object-cover transition-opacity duration-1000 group-hover:opacity-0 w-full h-full"
                />
                <img
                  src="/Image/OurWork/OurWork-img-hover-second.png"
                  alt="WorkImg Hover"
                  className="absolute inset-0 object-cover opacity-0 transition-opacity duration-1000 group-hover:opacity-100 w-full h-full"
                />
              </div>
            </div>

            {/* Right Column (150+ Projects + Image 3) */}
            {/* On tablet (sm), it spans 2 cols, but uses flex-row so Image 3 is only 50% width! */}
            <div className="sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 md:gap-10 items-center">
              <div className="text-center flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-full md:mt-4 lg:mt-8">
                <h1 className="text-[var(--color-dark-orange)] text-5xl sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold mb-2">
                  150+
                </h1>
                <p className="text-lg sm:text-base md:text-lg lg:text-2xl xl:text-4xl font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase whitespace-normal xl:whitespace-nowrap">
                  PROJECT DONE
                </p>
              </div>
              <div className="relative group overflow-hidden rounded-[20px] shadow-lg w-full sm:w-1/2 lg:w-full aspect-[447/317]">
                <img
                  src="/Image/OurWork/OurWork-Third-Img.png"
                  alt="WorkImg"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
                />
                <img
                  src="/Image/OurWork/OurWork-img-hover-third.png"
                  alt="WorkImg Hover"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                />
              </div>
            </div>
            
          </div>
          
          <div className="w-full mt-[30px] text-center sm:text-left">
            <p className="text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed  mx-auto sm:mx-0">
              Over The Years, We've Turned Countless Ideas Into High-Quality
              Prints That Leave A Lasting Impression. From Small Personal
              Projects To Large Corporate Campaigns, Our Team Blends Creativity
              With Precision To Deliver Outstanding Results Every Time.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
