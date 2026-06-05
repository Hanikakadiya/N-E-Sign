import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function WhyContactUs() {
  return (
    <div
      className="relative min-h-screen overflow-hidden pt-32 pb-24 flex flex-col justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Image/ContactUs/WhyContactUs.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10 pointer-events-none"></div>
      <div className="w-full bg-transparent py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Card 1: Why Contact Us */}
            <div className="bg-white/[0.03] border border-white/[0.05] border-l-[4px] border-l-[var(--color-primary)] rounded-xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              <h2 className="text-[24px] font-bold mb-8 text-white tracking-wide">
                Why Contact Us?
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <FiCheckCircle className="text-[var(--color-primary)] text-[1.35rem] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base leading-snug">
                    Expert printing and signage solutions
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <FiCheckCircle className="text-[var(--color-primary)] text-[1.35rem] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base leading-snug">
                    Custom quotes and competitive pricing
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <FiCheckCircle className="text-[var(--color-primary)] text-[1.35rem] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base leading-snug">
                    Fast turnaround with reliable delivery
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <FiCheckCircle className="text-[var(--color-primary)] text-[1.35rem] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base leading-snug">
                    High-quality materials and professional craftsmanship
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2: Customer Support You Can Trust */}
            <div className="bg-[#120D0A]/50 border border-white/[0.02] rounded-2xl p-8 text-center shadow-2xl backdrop-blur-sm mt-4">
              <h3 className="text-lg md:text-[20px] font-bold mb-3 text-white">
                Customer Support You Can Trust
              </h3>
              <p className="text-gray-400 text-[14px] leading-relaxed max-w-[95%] mx-auto">
                At <span className="text-[var(--color-primary)] font-medium">NE Signs</span>,
                customer satisfaction is our priority. We deliver responsive,
                transparent, and reliable printing services tailored to your
                business needs.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/[0.03] border border-white/[0.05] rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-md">
            <h2 className="text-3xl md:text-[30px] font-bold mb-3 tracking-tight">
              Send Us a Message
            </h2>
            <p className="text-gray-400 text-base mb-10">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2.5">
                  <label className="text-[14px] font-medium tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#1A1410]/60 border border-white/5 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-primary)]/50 focus:bg-[#1A1410]/80 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2.5">
                  <label className="text-[14px] font-medium tracking-wide">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#1A1410]/60 border border-white/5 rounded-xl px-5 py-4 text-sm placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-primary)]/50 focus:bg-[#1A1410]/80 transition-all"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="space-y-2.5">
                <label className="text-[14px] font-medium tracking-wide">
                  Project Category
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-[#1A1410]/60 border border-white/5 rounded-xl px-5 py-4 text-sm appearance-none focus:outline-none focus:border-[var(--color-primary)]/50 focus:bg-[#1A1410]/80 transition-all cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-500">
                      Select Category
                    </option>
                    <option value="signage" className="bg-[#1A1410]">
                      Signage
                    </option>
                    <option value="printing" className="bg-[#1A1410]">
                      Printing
                    </option>
                    <option value="apparel" className="bg-[#1A1410]">
                      Apparel
                    </option>
                    <option value="other" className="bg-[#1A1410]">
                      Other
                    </option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="var(--color-gray)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2.5">
                <label className="text-[14px] font-medium tracking-wide">
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your project requirements..."
                  rows="5"
                  className="w-full bg-[#1A1410]/60 border border-white/5 rounded-xl px-5 py-4 text-sm placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-primary)]/50 focus:bg-[#1A1410]/80 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-[18px] tracking-wide cursor-pointer text-black font-bold  py-4 rounded-xl mt-4 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
