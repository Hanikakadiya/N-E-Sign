import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

export default function ContectHeroSection() {
  return (
    <div
      className="relative min-h-screen overflow-hidden pt-32 pb-24 flex flex-col justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Image/ContactUs/HeroSectionimg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Section: Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-24">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight">
              Get in Touch With <span className="text-[var(--color-primary)]">NE Signs</span>
            </h1>

            <div className="space-y-6 text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              <p>
                Looking for reliable printing and signage services? Have
                questions about your next project? The team at NE Signs is here
                to help. We are committed to providing fast responses, expert
                support, and outstanding customer service.
              </p>

              <p className="text-base">
                Whether you need expert guidance, a custom quote, or more
                details about our services, reach out to us today and our team
                will respond quickly.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex justify-center items-center">
            {/* Dark circle behind the avatar to match the design */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-white/[0.04] border border-white/[0.05] rounded-full z-0"></div>

            {/* The avatar image */}
            <img
              src="/Image/ContactUs/HeroProfile.png"
              alt="Customer Support"
              className="relative z-10 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] object-cover rounded-[3rem] shadow-2xl shadow-black/60 border border-white/5"
            />
          </div>
        </div>

        {/* Bottom Section: Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.05] rounded-2xl p-10 flex flex-col items-center text-center transition-all hover:border-white/[0.1] hover:bg-white/[0.05] duration-300 shadow-2xl shadow-black/40 backdrop-blur-sm group">
            <FiPhoneCall className="text-[var(--color-primary)] text-[2.5rem] mb-6 transition-transform group-hover:scale-110 duration-300" />
            <p className="text-gray-400 text-[20px] mb-3 tracking-wide">Call Us</p>
            <p className="font-semibold text-lg md:text-[24px] tracking-wide">
              +1 (123) 456-7890
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.05] rounded-2xl p-10 flex flex-col items-center text-center transition-all hover:border-white/[0.1] hover:bg-white/[0.05] duration-300 shadow-2xl shadow-black/40 backdrop-blur-sm group">
            <FiMail className="text-[var(--color-primary)] text-[2.5rem] mb-6 transition-transform group-hover:scale-110 duration-300" />
            <p className="text-gray-400 text-[20px] mb-3 tracking-wide">
              Email Support
            </p>
            <p className="font-semibold text-lg md:text-[24px] tracking-wide">
              support@nesigns.com
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.05] rounded-2xl p-10 flex flex-col items-center text-center transition-all hover:border-white/[0.1] hover:bg-white/[0.05] duration-300 shadow-2xl shadow-black/40 backdrop-blur-sm group">
            <FiMapPin className="text-[var(--color-primary)] text-[2.5rem] mb-6 transition-transform group-hover:scale-110 duration-300" />
            <p className="text-gray-400 text-[20px] mb-3 tracking-wide">
              Visit Our Office
            </p>
            <p className="font-semibold text-base md:text-[24px] leading-snug">
              2220 Ogden avenue, Unit B,
              Downers grove, IL 60515
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
