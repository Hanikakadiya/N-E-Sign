import React from "react";
import vectorImg from "../../assets/Image/OurWork/vector.png";
import workImg1 from "../../assets/Image/OurWork/OurWork-First-Img.png";
import hoverImg1 from "../../assets/Image/OurWork/OurWork-img-hover-first.png";
import WorkImg2 from "../../assets/Image/OurWork/OurWork-Second-Img.png";
import hoverImg2 from "../../assets/Image/OurWork/OurWork-img-hover-second.png";
import WorkImg3 from "../../assets/Image/OurWork/OurWork-Third-Img.png";
import hoverImg3 from "../../assets/Image/OurWork/OurWork-img-hover-third.png";

export default function OurWork() {
  return (
    <section className="relative w-full py-16 sm:py-24 mx-auto overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-0">
        {/* Section Heading */}
        <div className="relative flex items-center mb-16">
          <img
            src={vectorImg}
            alt="Vector Img"
            className="absolute left-[-40px] sm:left-[-80px] md:left-[-100px] top-[-10px] sm:top-[-20px] md:top-[-30px] w-[120px] sm:w-[180px] md:w-[220px] h-auto z-0 opacity-50"
          />
          <h1 className="relative z-10 text-[var(--color-dark-orange)] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-poppins font-bold tracking-[0.2em] uppercase">
            OUR WORK
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Left Column (Image 1 + Experience Stats + Paragraph) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="relative group overflow-hidden rounded-[20px] shadow-lg w-full aspect-[777/387]">
              <img
                src={workImg1}
                alt="WorkImg"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
              />
              <img
                src={hoverImg1}
                alt="WorkImg Hover"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col gap-6">
              {/* 25 Years Experience */}
              <div className="flex items-center gap-2 sm:gap-4 w-fit">
                <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter">
                  25
                </h1>
                <h2 className="flex flex-col text-[var(--color-primary)] font-bold uppercase text-xl sm:text-3xl md:text-4xl">
                  <span
                    className="text-transparent text-4xl sm:text-8xl tracking-[5px] "
                    style={{ WebkitTextStroke: "1px #8B7355" }}
                  >
                    YEAR
                  </span>
                  <span className="text-[var(--color-dark-orange)] tracking-widest text-2xl sm:text-5xl">
                    EXPERIENCE
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Middle Column (Image 2) */}
          <div className="lg:col-span-3 w-full flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-[20px] shadow-lg w-full aspect-[416/578]">
              <img
                src={WorkImg2}
                alt="WorkImg"
                className="absolute inset-0 object-cover transition-opacity duration-1000 group-hover:opacity-0 w-full h-full"
              />
              <img
                src={hoverImg2}
                alt="WorkImg Hover"
                className="absolute inset-0 object-cover opacity-0 transition-opacity duration-1000 group-hover:opacity-100 w-full h-full"
              />
            </div>
           
          </div>
          
          {/* Right Column (150+ Projects + Image 3) */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="text-center flex flex-col justify-center items-center  lg:mt-8">
              <h1 className="text-[var(--color-dark-orange)] text-5xl sm:text-6xl md:text-[80px] font-bold mb-2">
                150+
              </h1>
              <p className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase whitespace-normal md:whitespace-nowrap">
                PROJECT DONE
              </p>
            </div>
            <div className="relative group overflow-hidden rounded-[20px] shadow-lg w-full aspect-[447/317]">
              <img
                src={WorkImg3}
                alt="WorkImg"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
              />
              <img
                src={hoverImg3}
                alt="WorkImg Hover"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
              />
            </div>
          </div>
        </div> <div className="w-full px-4 sm:px-8 lg:px-0">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-[20px] leading-relaxed">
                Over The Years, We've Turned Countless Ideas Into High-Quality
                Prints That Leave A Lasting Impression. From Small Personal
                Projects To Large Corporate Campaigns, Our Team Blends
                Creativity With Precision To Deliver Outstanding Results Every
                Time.
              </p>
            </div>
      </div>
    </section>
  );
}
