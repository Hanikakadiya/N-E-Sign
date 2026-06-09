import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Icons } from "../../../Icons/icons";
import SignageData from "../../../Data/SignageData.json";
import Sidebar from "../../../Sidebar";
import { motion } from "framer-motion";

// --- EXTERIOR DETAIL COMPONENT (Dynamic View with Sidebar) ---
export function ExteriorDetailView({ id }) {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        const categoryData = SignageData.find((c) =>
          c.link.includes("exterior-sign"),
        );
        const subCat = categoryData?.subCategories.find((s) =>
          s.href.includes(id),
        );

        const sidebar = subCat?.sidebar;
        const activeTab = tab || sidebar?.links?.[0]?.id;
        const content = subCat?.contentDetails?.[activeTab];

        setPageData({ content, sidebar });
      }, 300);
    };

    setPageData(null);
    fetchData();
  }, [id, tab]);

  if (!pageData || !pageData.content) {
    return (
      <div className="w-full h-screen flex items-center justify-center font-poppins">
        Loading...
      </div>
    );
  }

  const activeTab = tab || pageData.sidebar?.links?.[0]?.id;

  return (
    <div className="w-full min-h-screen font-poppins pt-[100px] md:pt-[120px]">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Sidebar */}
        {pageData.sidebar && (
          <Sidebar
            title={pageData.sidebar.title}
            links={pageData.sidebar.links?.map((link) => ({
              ...link,
              href: `?tab=${link.id}`,
            }))}
            activeId={activeTab}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 px-4 sm:px-8 lg:px-12 xl:px-20 py-8 lg:py-16 relative">
          {/* Back Arrow */}
          <div className="absolute z-20 top-4 sm:top-8 left-4 sm:left-8">
            <Link
              to="/services/signage/exterior-sign"
              className="flex items-center justify-center text-[var(--color-gray)] hover:text-white transition-colors"
              title="Back to Categories"
            >
              <Icons.ArrowRight className="w-6 h-6 rotate-180" />
            </Link>
          </div>

          {/* Dynamic Content Sections */}
          <div className="flex flex-col gap-16 mt-12 lg:mt-0">
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
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
                  <div className="flex-1 max-w-4xl">
                    <h3 className="font-bold mb-4 tracking-wide text-3xl lg:text-[48px]">
                      {section.highlightTitle && (
                        <span className="text-[var(--color-primary)] mr-2">
                          {section.highlightTitle}
                        </span>
                      )}
                      {section.mainTitle}
                    </h3>
                    <p className="text-[var(--color-gray)] leading-relaxed text-[15px] lg:text-[20px]">
                      {section.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center lg:items-start">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-l from-[var(--color-dark-orange)] to-[var(--color-primary)] px-6 py-2.5 lg:px-8 lg:py-4 rounded-full text-[13px] lg:text-[16px] font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(247,156,41,0.3)] group text-white"
                    >
                      Contact Now
                      <span className="inline-block animate-bounce-x">
                        <Icons.ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Dynamic Image Layout */}
                <div
                  className={
                    activeTab === "channel-letters"
                      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6"
                      : "columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6"
                  }
                >
                  {section.images?.map((imgSrc, idx) => {
                    let containerClass =
                      "rounded-lg overflow-hidden border border-[#333] shadow-lg relative group";
                    let imgClass =
                      "w-full object-cover transition-transform duration-700 group-hover:scale-110";

                    if (activeTab === "channel-letters") {
                      containerClass += " aspect-[3/4]";
                      imgClass += " h-full";
                    } else {
                      containerClass += " break-inside-avoid";
                      imgClass += " h-auto";
                    }

                    return (
                      <div key={idx} className={containerClass}>
                        <img
                          src={imgSrc}
                          alt={`${section.mainTitle} image ${idx + 1}`}
                          loading="lazy"
                          className={imgClass}
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

// --- MAIN COMPONENT (Exterior Cards Section) ---
export default function ExteriorSigns() {
  const { id } = useParams();

  // If there's an ID, render the dynamic details view
  if (id) {
    return <ExteriorDetailView id={id} />;
  }

  // Otherwise, render the Cards view
  const categoryData = SignageData.find((c) =>
    c.link.includes("exterior-sign"),
  );
  const cards = categoryData?.subCategories || [];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[600px] sm:h-[600px] bg-[var(--color-primary)]/40 blur-[150px] sm:blur-[250px] rounded-full pointer-events-none"></div>

      <img
        src="/Image/Wave.png"
        alt="Topo graphic"
        className="absolute right-0 opacity-20 w-[400px] md:w-[450px] object-cover mix-blend-screen pointer-events-none z-0"
      />

      <div className="w-full xl:max-w-[85%] 2xl:max-w-[75%] mx-auto px-4 md:px-8 lg:px-10 xl:px-8 relative z-10 pt-[80px] md:pt-[120px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-16 relative"
        >
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/services/signage"
              className="flex items-center justify-center text-[var(--color-gray)] hover:text-white transition-colors"
              title="Back to Categories"
            >
              <Icons.ArrowRight className="w-5 h-5 rotate-180" />
            </Link>

            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a1a1a] w-fit shadow-lg border border-white/5">
              <div className="w-3.5 h-3.5 flex items-center justify-center rounded-full border ">
                <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gray)]"></div>
              </div>
              <span className="text-[var(--color-gray)] text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase">
                {categoryData?.title}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-medium mb-5 font-poppins">
            {categoryData?.title}
          </h1>

          <p className="text-[var(--color-gray)] text-sm md:text-base lg:text-[16px] max-w-xl font-normal">
            Signs mounted directly on the building for branding and visibility.
          </p>
        </motion.div>

        {/* Cards Section */}
        {cards.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-6 lg:gap-8"
          >
            {cards.map((card, idx) => (
              <Link
                key={idx}
                className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[350px] h-[340px] sm:h-[380px] lg:h-[430px] rounded-sm overflow-hidden border border-white/20 block shrink-0"
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
                  className={`absolute inset-0 bg-gradient-to-b ${card.overlayColor}h opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-10`}
                ></div>

                <div className="absolute top-0 left-0 p-6 lg:p-7 w-full z-20 flex flex-col transition-opacity duration-500">
                  <h3 className="text-[24px] lg:text-[26px] font-bold mb-3 font-poppins leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-[14px] lg:text-[15px] font-medium leading-relaxed max-w-[95%] group-hover:opacity-0 transition-all duration-500">
                    {card.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[70px] lg:h-[80px] w-full flex items-center px-6 lg:px-7 transition-all duration-500 z-20 cursor-pointer bg-black/80">
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
          <div className="text-[var(--color-gray)] text-[16px] italic pb-20">
            More content coming soon...
          </div>
        )}
      </div>
    </section>
  );
}
