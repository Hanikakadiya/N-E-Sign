import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChannelLatterData } from "./ChannelLatterData";
import { Icons } from "../../../../Icons/icons";

export default function BuildingSign() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating API fetch
    const fetchData = async () => {
      // In a real scenario, this would be a fetch() call.
      // We simulate network delay here for realism.
      setTimeout(() => {
        setData(ChannelLatterData);
      }, 500);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black  font-poppins">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] font-poppins pt-[100px]">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 lg:sticky lg:top-[100px] lg:left-0 lg:h-[calc(100vh-100px)] self-start overflow-y-auto custom-scrollbar px-4 lg:px-8 py-8 lg:border-r border-[#222] bg-[#0a0a0a] z-40">
          <h2 className="text-[var(--color-primary)] text-2xl lg:text-[24px] font-bold mb-6 ml-5">
            {data.sidebar.title}
          </h2>
          <div className="flex flex-col gap-2">
            {data.sidebar.links.map((link) => (
              <button
                key={link.id}
                className={`text-left px-4 py-3 rounded-md text-[15px] font-medium transition-colors ${
                  link.isActive
                    ? "bg-[#2a2a2a]"
                    : "text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <Link
            to="/services/signage/exterior-sign"
            className="mt-8 flex items-center justify-center gap-2 px-6 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-full text-sm font-medium hover:bg-white/5 w-max group"
          >
            <span className="inline-block animate-[bounce-x_1.5s_infinite_reverse]">
              <Icons.ArrowRight className="w-4 h-4 rotate-180" />
            </span>{" "}
            Go Back
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 px-4 sm:px-8 lg:px-12 xl:px-20 py-8 lg:py-16">
          {/* Top Header - Contact Button */}
          <div className="flex justify-end mb-10">
            <Link
              to="/contact"
              className="bg-gradient-to-l from-[var(--color-dark-orange)] to-[var(--color-primary)] px-6 py-5 rounded-full text-[15px] font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(247,156,41,0.3)] group"
            >
              Contact Now{" "}
              <span className="inline-block animate-bounce-x">
                <Icons.ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Dynamic Content Sections */}
          <div className="flex flex-col gap-16">
            {data.content.map((section) => (
              <div
                key={section.id}
                className={`relative flex flex-col ${
                  section.hasBorder ? "p-6 lg:p-8 border-2  rounded-xl" : ""
                }`}
              >
                <h3 className="text-3xl lg:text-[48px] font-bold mb-4 tracking-wide">
                  <span className="text-[var(--color-primary)]">
                    {section.highlightTitle}
                  </span>{" "}
                  <span className="">{section.mainTitle}</span>
                </h3>
                <p className="text-gray-400 text-[15px] lg:text-[20px] leading-relaxed max-w-6xl mb-8">
                  {section.description}
                </p>

                {/* Images Grid */}
                <div className="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-6">
                  {section.images.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="w-[305px] h-[410px] rounded-lg overflow-hidden border border-[#333] shadow-lg"
                    >
                      <img
                        src={imgSrc}
                        alt={`${section.highlightTitle} image ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
