import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icons } from "../../../Icons/icons";
import SignageData from "../../../Data/SignageData.json";
import { motion } from "framer-motion";

// --- INTERIOR DETAIL COMPONENT (Dynamic View without Sidebar) ---
export function InteriorDetailView({ id }) {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        const categoryData = SignageData.find((c) =>
          c.link.includes("interior-sign"),
        );
        const content = categoryData?.contentDetails?.[id];
        setPageData({ content });
      }, 300);
    };

    setPageData(null);
    fetchData();
  }, [id]);

  if (!pageData || !pageData.content) {
    return (
      <div className="w-full h-screen flex items-center justify-center font-poppins">
        Loading...
      </div>
    );
  }

  return (
    <div className="font-poppins max-w-[1500px] mx-auto 2xl:ml-[200px]">
      <div className="flex flex-col lg:flex-row  mx-auto relative px-4 sm:px-8 lg:px-12 xl:px-20">
        {/* Main Content Area */}
        <div className="w-full lg:py-16">
          {/* Back Arrow */}
          <div className="absolute z-20 top-0">
            <Link
              to="/services/signage/interior-sign"
              className="flex items-center justify-center text-[var(--color-gray)] hover:text-white transition-colors"
              title="Back to Categories"
            >
              <Icons.ArrowRight className="w-6 h-6 rotate-180" />
            </Link>
          </div>

          {/* Dynamic Content Sections */}
          <div className="flex flex-col gap-16 mt-5 lg:mt-0">
            {pageData.content.map((section, sectionIdx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: sectionIdx * 0.1 }}
                className="relative flex flex-col"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center text-center gap-8 mb-5 justify-around">
                  <div className="flex-1 max-w-5xl lg:pl-16">
                    <h3 className="font-bold my-4 tracking-wide text-[24px] md:text-[30px] lg:text-[40px]">
                      {section.mainTitle}
                    </h3>
                    <p className="text-[var(--color-gray)] leading-relaxed text-[10px] sm:text-[18px] font-semibold tracking-widest uppercase">
                      {section.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center lg:items-start">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-l from-[var(--color-dark-orange)] to-[var(--color-primary)] px-6 py-2.5 lg:px-8 lg:py-4 rounded-full text-[13px] lg:text-[16px] font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(247,156,41,0.3)] group text-white"
                    >
                      Contact Us
                      <span className="inline-block animate-bounce-x">
                        <Icons.ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Dynamic Image Layout (Masonry-like) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                  {section.images?.map((imgSrc, idx) => {
                    let colSpan = "md:col-span-1";
                    if (idx === 0 || idx === 6) colSpan = "md:col-span-2";

                    return (
                      <div
                        key={idx}
                        className={`rounded-lg overflow-hidden border border-[#333] shadow-lg relative group h-[200px] sm:h-[300px] lg:h-[350px] ${colSpan}`}
                      >
                        <img
                          src={imgSrc}
                          alt={`${section.mainTitle} image ${idx + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT (Interior Cards Section) ---
export default function InteriorSigns() {
  const { id } = useParams();

  // If there's an ID, render the dynamic details view
  if (id) {
    return <InteriorDetailView id={id} />;
  }

  // Otherwise, render the Cards view using exact same design as Exterior
  const categoryData = SignageData.find((c) =>
    c.link.includes("interior-sign"),
  );
  const cards = categoryData?.subCategories || [];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[600px] sm:h-[600px] bg-[var(--color-primary)]/40 blur-[150px] sm:blur-[250px] rounded-full pointer-events-none"></div>

      <div className="w-full xl:max-w-[85%] 2xl:max-w-[75%] mx-auto px-4 md:px-8 lg:px-10 xl:px-8 relative z-10 pt-3 md:pt-[120px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-5 relative"
        >
          <div className="flex items-center gap-4">
            <Link
              to="/services/signage"
              className="flex items-center justify-center text-[var(--color-gray)] hover:text-white transition-colors"
              title="Back to Categories"
            >
              <Icons.ArrowRight className="w-5 h-5 rotate-180" />
            </Link>

            <div className="flex items-center gap-3 px-4 py-2 rounded-full w-fit shadow-lg border border-white/5">
              <div className="w-3.5 h-3.5 flex items-center justify-center rounded-full border ">
                <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gray)]"></div>
              </div>
              <span className="text-[var(--color-gray)] text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase">
                {categoryData?.title}
              </span>
            </div>
          </div>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium mb-4 font-poppins">
            {categoryData?.title}
          </h1>

          <p className="text-[var(--color-gray)] text-sm md:text-base lg:text-[16px] max-w-xl font-normal">
            Essential for identifying spaces and enhancing branding within your
            building.
          </p>
        </motion.div>

        {/* Cards Section */}
        {cards.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {cards.map((card, idx) => (
              <Link
                key={idx}
                className="group relative w-full h-[340px] sm:h-[380px] lg:h-[430px] rounded-sm overflow-hidden border border-white/20 block"
                to={card.href || "#"}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-b ${card.overlayColor} opacity-85 group-hover:opacity-0 mix-blend-multiply transition-opacity duration-500 z-10`}
                ></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${card.overlayColor} opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-10`}
                ></div>

                <div className="absolute top-0 left-0 p-6 lg:p-7 w-full z-20 flex flex-col transition-opacity duration-500">
                  <h3 className="text-[24px] lg:text-[26px] font-bold mb-3 font-poppins leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-[14px] lg:text-[15px] font-medium leading-relaxed max-w-[95%] group-hover:opacity-0 transition-all duration-500">
                    {card.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[70px] lg:h-[80px] w-full flex items-center px-6 lg:px-7 transition-all duration-500 z-20 cursor-pointer bg-black/70">
                  <div className="flex items-center justify-center gap-3 w-fit border border-white/20 rounded-full px-5 py-2 hover:bg-white/5 transition-all duration-300 group/btn">
                    <span className="text-[#c5a880] lg:text-[16px]">
                      View More
                    </span>
                    <Icons.ArrowRight className="w-4 h-4 text-[#c5a880] transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        ) : (
          <div className="text-gray-400 text-[16px] italic pb-20">
            More content coming soon...
          </div>
        )}
      </div>
    </section>
  );
}
