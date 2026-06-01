import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Elisa Grant",
    role: "Legacy Solutions Engineer",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: "/Image/Testimonial/testimonial-Img-1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Product Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/Image/Testimonial/testimonial-Img-2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Smith",
    role: "Creative Director",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    image: "/Image/Testimonial/testimonial-Img-3.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Lead Developer",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.",
    image: "/Image/Testimonial/testimonial-Img-4.png",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Reset timer if user manually clicks a dot
  }, [currentIndex]);

  return (
    <section className="relative container mx-auto py-16 sm:py-24 flex flex-col items-center font-poppins">
      {/* Background Glow */}
      <div className="absolute right-[5%] md:right-[15%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 z-10 mt-10 sm:mt-16 md:mt-24">
        <div className="w-full max-w-[1138px] mx-auto relative">
          {/* Top Left Quote */}
          <div className="absolute -top-12 -left-2 md:-top-16 md:-left-8 lg:-top-24 lg:-left-12 xl:-top-35 xl:-left-20 z-0 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffffff46"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-70 lg:opacity-90"
            >
              <path d="M4 4h7l-3 16H4V4zm9 0h7l-3 16h-4V4z" />
            </svg>
          </div>

          {/* Bottom Right Quote */}
          <div className="absolute -bottom-10 -right-2 md:-bottom-12 md:-right-8 lg:-bottom-16 lg:-right-12 xl:-bottom-20 xl:-right-20 z-0 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffffff46"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 opacity-70 lg:opacity-90 rotate-180"
            >
              <path d="M4 4h7l-3 16H4V4zm9 0h7l-3 16h-4V4z" />
            </svg>
          </div>  

          {/* Card Container with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full relative"
          >
            {/* Slider Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-center justify-center relative w-full px-4 sm:px-8 md:px-12 lg:px-0"
              >
                {/* Left Image */}
                <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[320px] xl:w-[350px] flex-shrink-0 flex items-center justify-center z-10 relative mb-[-20px] lg:mb-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-[350px] sm:h-[400px] lg:h-[450px] object-cover rounded-2xl lg:rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] relative z-10"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full sm:w-[80%] md:w-[70%] lg:w-auto lg:flex-1 h-auto lg:h-[350px] xl:h-[380px] flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-16 bg-[#1a1a1a] border border-[#333] lg:border-l-0 rounded-2xl lg:rounded-l-none lg:rounded-r-2xl shadow-2xl relative z-0 pt-12 lg:pt-12">
                  {/* Grey Tab below the text box */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-16 w-[120px] sm:w-[150px] h-[30px] sm:h-[45px] bg-[#4d4d4d] rounded-b-xl border-x border-b border-[#333] border-t-0 hidden sm:block"></div>

                  {/* Stars */}
                  <div className="flex gap-2 mb-10">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? "text-white" : "text-gray-600"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base sm:text-lg lg:text-[18px] leading-[1.6] max-w-[650px] mb-4 sm:mb-6 font-light tracking-wide">
                    {testimonials[currentIndex].text}
                  </p>

                  {/* Author Info */}
                  <div className="flex flex-col">
                    <span className="text-[#8a9df0] font-semibold text-lg sm:text-xl">
                      {testimonials[currentIndex].name}
                    </span>
                    <span className="text-[#8a9df0] text-sm sm:text-base mt-1">
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12 relative z-20">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  currentIndex === idx
                    ? "bg-[var(--color-primary)]"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
