import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icons } from "../Icons/icons";

export default function LookAtOurServices() {
  // --- CONFIGURATION ---
  // Change this value to adjust the vertical zigzag gap between top and bottom nodes.
  // The custom SVGs will automatically compute their offsets to stay perfectly connected!
  const zigzagGap = "45px";

  const services = [
    {
      // icon: <Icons.Signage className="w-10 h-10 text-black" />,
      image: "/Image/LookAtOurServices/direction_OurServices.png",
      title: "Signage",
      description:
        "High-Impact Signage Printing Solutions Designed To Enhance Visibility And Strengthen Your Brand Presence",
      align: "bottom",
      svg: (
        <svg
          className="absolute left-1/2 -translate-x-1/2 -z-10 pointer-events-none hidden md:block"
          style={{ top: "-10px" }}
          width="300"
          height="80"
          viewBox="0 0 300 80"
          fill="none"
        >
          <defs>
            <linearGradient id="gradient-0" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4338ca" stopOpacity="0"></stop>
              <stop offset="50%" stopColor="#4338ca" stopOpacity="0.6"></stop>
              <stop offset="100%" stopColor="#4338ca" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0 10 C 75 60, 225 60, 300 10"
            stroke="url(#gradient-0)"
            strokeWidth="3"
            fill="none"
          ></path>
        </svg>
      ),
    },
    {
      image: "/Image/LookAtOurServices/cancel_OurServices.png",
      title: "Printing",
      description:
        "High-Quality Customized Printing Solutions To Showcase Your Brand On Every Product",
      align: "top",
      svg: (
        <svg
          className="absolute top-[30px] left-1/2 -translate-x-1/2 -z-10 pointer-events-none hidden md:block"
          width="300"
          height="80"
          viewBox="0 0 300 80"
          fill="none"
        >
          <defs>
            <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0"></stop>
              <stop offset="50%" stopColor="#d97706" stopOpacity="0.6"></stop>
              <stop offset="100%" stopColor="#d97706" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0 60 C 75 10, 225 10, 300 60"
            stroke="url(#gradient-1)"
            strokeWidth="3"
            fill="none"
          ></path>
        </svg>
      ),
    },
    {
      image: "/Image/LookAtOurServices/email_OurServices.png",
      title: "Direct mailing",
      description:
        "This includes exploring new markets, product diversification, and leveraging innovation to drive business",
      align: "bottom",
      svg: (
        <svg
          className="absolute left-1/2 -translate-x-1/2 -z-10 pointer-events-none hidden md:block"
          style={{ top: "-10px" }}
          width="300"
          height="80"
          viewBox="0 0 300 80"
          fill="none"
        >
          <defs>
            <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4338ca" stopOpacity="0"></stop>
              <stop offset="50%" stopColor="#4338ca" stopOpacity="0.6"></stop>
              <stop offset="100%" stopColor="#4338ca" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0 10 C 75 60, 225 60, 300 10"
            stroke="url(#gradient-2)"
            strokeWidth="3"
            fill="none"
          ></path>
        </svg>
      ),
    },
    {
      image: "/Image/LookAtOurServices/landing-page-OurSerives.png",
      title: "Website design",
      description:
        "Creative Website Design Solutions Crafted To Enhance User Experience And Grow Your Business Online",
      align: "top",
      svg: (
        <svg
          className="absolute left-1/2 -translate-x-1/2 -z-10 pointer-events-none hidden md:block"
          style={{ top: "calc(2 * var(--zigzag) - 60px)" }}
          width="300"
          height="80"
          viewBox="0 0 300 80"
          fill="none"
        >
          <defs>
            <linearGradient id="gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0"></stop>
              <stop offset="50%" stopColor="#d97706" stopOpacity="0.6"></stop>
              <stop offset="100%" stopColor="#d97706" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0 60 C 75 10, 225 10, 300 60"
            stroke="url(#gradient-3)"
            strokeWidth="3"
            fill="none"
          ></path>
        </svg>
      ),
    },
    {
      image: "/Image/LookAtOurServices/search_OurServices.png",
      title: "SEO service",
      description:
        "Data-Driven SEO Services Designed To Improve Search Visibility And Drive Consistent Organic Traffic Growth",
      align: "bottom",
      svg: (
        <svg
          className="absolute left-1/2 -translate-x-1/2 -z-10 pointer-events-none hidden md:block"
          style={{ top: "-10px" }}
          width="300"
          height="80"
          viewBox="0 0 300 80"
          fill="none"
        >
          <defs>
            <linearGradient id="gradient-4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4338ca" stopOpacity="0"></stop>
              <stop offset="50%" stopColor="#4338ca" stopOpacity="0.6"></stop>
              <stop offset="100%" stopColor="#4338ca" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0 10 C 75 60, 225 60, 300 10"
            stroke="url(#gradient-4)"
            strokeWidth="3"
            fill="none"
          ></path>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-20 lg:py-32 bg-transparent font-poppins overflow-hidden"
      style={{ "--zigzag": zigzagGap }}
    >
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <div className="flex flex-wrap flex-col items-center justify-center gap-3 sm:gap-5 text-[32px] sm:text-4xl md:text-5xl lg:text-[55px] font-bold  mb-20 md:mb-32">
          <div className="flex gap-10">
            <span>Look at</span>
            <div className="w-24 md:w-50 h-10 md:h-14 bg-gray-300 rounded-full shrink-0"></div>
          </div>
          <div className="flex gap-4 items-center ml-25 ">
            <Link to="/services" className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(237,188,90,0.4)] hover:scale-105 transition-transform duration-300">
              <Icons.ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
            </Link>
            <span>our Services</span>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative w-full">
          {/* Note: The continuous background line has been replaced by individual SVGs in each node */}

          {/* Grid of Nodes */}
          <motion.div
            className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap justify-center items-center md:items-start gap-12 md:gap-4 lg:gap-6 xl:gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col items-center text-center w-full md:w-[240px] lg:w-[260px] xl:w-[300px] shrink-0 ${
                  service.align === "bottom"
                    ? "md:translate-y-[var(--zigzag)]"
                    : "md:-translate-y-[var(--zigzag)]"
                }`}
              >
                {/* Icon Circle */}
                <div className="relative">
                  {service.svg}
                  <div className="group relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full  border-[var(--color-primary)] flex items-center justify-center mb-6 overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-[var(--color-primary)] shrink-0">
                    {/* Pale orange accent circle inside */}
                    <div className="absolute top-1/2 left-1/2 w-full h-full bg-[var(--color-primary)] opacity-20 rounded-full transition-opacity duration-300 group-hover:opacity-0"></div>

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl md:text-[22px] font-medium mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-[13px] md:text-sm font-light leading-[1.6] max-w-[300px] mx-auto px-2">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
