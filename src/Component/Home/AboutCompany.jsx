import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../Icons/icons";

export default function AboutCompany() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-10 sm:py-28 lg:py-40 flex items-center justify-center">
      {/* Background Glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[var(--color-primary)]/20 blur-[130px] rounded-full pointer-events-none z-0"></div> */}

      {/* Left Vector (Squiggly Line) */}
      <div className="absolute left-[2%] md:left-[5%] top-[40%] -translate-y-1/2 w-[100px] sm:w-[130px] md:w-[180px] pointer-events-none z-0 opacity-60">
        <img
          src="/Image/OurWork/Vector.png"
          alt="Vector Pattern"
          className="w-full h-auto object-contain transform -rotate-12"
        />
      </div>

      {/* Right Graphic - Wave.png */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] lg:w-[550px] h-[250px] sm:h-[400px] lg:h-[550px] pointer-events-none z-0 opacity-80">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <motion.img
            src="/Image/AboutCompany/Wave.png"
            alt="Wave Pattern"
            className="w-full h-full object-contain"
            animate={{ scale: [0.8, 1.2] }}
            transition={{ duration: 4, ease: "easeOut", repeat: Infinity }}
          />
        </motion.div>
      </div>
      {/* Bottom Left Orange Spot */}
      <div className="absolute bottom-32 start-[-45px] translate-y-1/2 w-[300px] md:w-[900px] h-[300px] md:h-[700px] bg-[var(--color-primary)]/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Bottom Left Graphic - Wave.png */}
      <div className="absolute left-0 bottom-0 translate-y-1/2 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] pointer-events-none z-0 opacity-50">
        <div className="w-full h-full transform rotate-45">
          <img
            src="/Image/AboutCompany/Wave.png"
            alt="Wave Pattern Bottom"
            className="w-full h-full object-contain transform -scale-x-100 hidden md:block"
          />
        </div>
      </div>

      <div className="relative w-full flex flex-col items-end justify-center z-10 px-4 sm:px-8 md:px-16 max-w-[1720px] mx-auto text-left">
        <motion.div
          className="flex flex-col items-start w-full max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Subheading Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-start gap-2 mb-6 sm:mb-8"
          >
            <span className="text-[var(--color-primary)] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
              About Company
            </span>
            <Icons.ArrowDownRight
              className="w-5
             h-5 text-[var(--color-primary)] animate-bounce-x"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[50px] font-poppins font-bold leading-[1.1] mb-2 text-white tracking-tight"
          >
            Customized Printing to
          </motion.h2>
          <motion.h2
            variants={itemVariants}
            className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[50px] font-poppins font-bold leading-[1.1] mb-8 sm:mb-10 text-[var(--color-dark-orange)] tracking-tight"
          >
            Achieve Your Business Goals
          </motion.h2>

          {/* Paragraph */}
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-start pl-0 md:pl-6"
          >
            <p className="text-gray-200 text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-[1.6] max-w-4xl font-medium">
              We create tailored printing solutions designed to make your brand
              stand out and communicate your message with clarity. From
              eye-catching designs to premium-quality materials, every print is
              crafted to support your marketing goals, engage your audience, and
              deliver real results for your business.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
