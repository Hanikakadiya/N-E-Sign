import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

function Counter({ from = 0, to, duration = 2, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function OurWork() {
  return (
    <>
      <section className="relative w-full py-5 container mx-auto">
        <div className="absolute top-1/2 right-[-20%] md:right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[600px] sm:h-[600px] bg-[var(--color-primary)]/50 blur-[150px] sm:blur-[250px] rounded-full pointer-events-none z-0"></div>

        <div className="w-full p-2 relative z-10 max-w-[1720px] mx-auto">
          {/* Vector Background Graphic inside relative container */}
          <img
            src="/Image/OurWork/Vector.png"
            alt="Vector Img"
            className="absolute left-[-20px] sm:left-[-40px] md:left-[-70px] top-[20px] sm:top-[30px] md:top-[40px] w-[120px] sm:w-[180px] md:w-[220px] h-auto opacity-100 z-0 pointer-events-none"
          />
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center mb-10 md:mb-16"
          >
            <h1 className="relative z-10 text-[var(--color-dark-orange)] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-poppins font-bold tracking-[0.2em] uppercase">
              OUR WORK
            </h1>
          </motion.div>

          {/* Main Content Grid (1 col mobile, 2 col tablet, 12 cols laptop/desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-6 lg:gap-8 xl:gap-10">
            {/* Left Column (Image 1 + Experience Stats + Paragraph) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="sm:col-span-1 lg:col-span-5 flex flex-col gap-6 md:gap-10"
            >
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
                    <Counter to={25} />
                  </h1>
                  <h2 className="flex flex-col text-[var(--color-primary)] font-bold uppercase text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
                    <span
                      className="text-transparent text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl tracking-[3px] xl:tracking-[5px]"
                      style={{ WebkitTextStroke: "1px #8B7355" }}
                    >
                      YEAR
                    </span>
                    <span className="text-[var(--color-dark-orange)] tracking-widest text-2xl sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl">
                      EXPERIENCE
                    </span>
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Middle Column (Image 2) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="sm:col-span-1 lg:col-span-3 w-full flex flex-col gap-6"
            >
              <div className="relative group overflow-hidden rounded-[20px] shadow-lg w-full aspect-[416/578]">
                <img
                  src="/Image/OurWork/OurWork-Second-img.png"
                  alt="WorkImg"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:opacity-0"
                />
                <img
                  src="/Image/OurWork/OurWork-img-hover-second.png"
                  alt="WorkImg Hover"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                />
              </div>
            </motion.div>

            {/* Right Column (150+ Projects + Image 3) */}
            {/* On tablet (sm), it spans 2 cols, but uses flex-row so Image 3 is only 50% width! */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 md:gap-10 items-center"
            >
              <div className="text-center flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-full md:mt-4 lg:mt-8">
                <h1 className="text-[var(--color-dark-orange)] text-5xl sm:text-[40px] md:text-[50px] lg:text-[50px] xl:text-[70px] font-bold mb-2">
                  <Counter to={150} suffix="+" />
                </h1>
                <p className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-3xl font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase whitespace-normal xl:whitespace-nowrap text-center">
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full mt-[30px] lg:mt-[50px] text-center lg:text-left flex justify-center lg:justify-start"
          >
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              Over The Years, We've Turned Countless Ideas Into High-Quality
              Prints That Leave A Lasting Impression. From Small Personal
              Projects To Large Corporate Campaigns, Our Team Blends Creativity
              With Precision To Deliver Outstanding Results Every Time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
