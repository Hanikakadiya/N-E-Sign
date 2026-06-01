import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import SignageData from "../../../Data/SignageData.json";
import { Icons } from "../../../Icons/icons";
import Sidebar from "../../../Sidebar";

export default function TemporarySignData() {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab");

  const [pageData, setPageData] = useState(null);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        const temporaryData = SignageData.find(
          (c) => c.title === "Exterior sign"
        )?.subCategories.find((s) => s.title === "Temporary Signs");

        const currentActiveId = activeTab || temporaryData?.sidebar?.links?.[0]?.id;
        setActiveId(currentActiveId);

        const data = {
          sidebar: temporaryData?.sidebar,
          content: temporaryData?.contentDetails?.[currentActiveId],
        };
        setPageData(data);
      }, 500);
    };

    setPageData(null);
    fetchData();
  }, [activeTab]);

  if (!pageData || !pageData.content) {
    return (
      <div className="w-full h-screen flex items-center justify-center font-poppins text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] font-poppins pt-[100px]">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Universal Left Sidebar */}
        <Sidebar
          title={pageData.sidebar.title}
          links={pageData.sidebar.links?.map((link) => ({
            ...link,
            href: `?tab=${link.id}`,
          }))}
          activeId={activeId}
        />

        {/* Main Content Area */}
        <div className="flex-1 px-4 sm:px-8 lg:px-12 xl:px-20 py-8 lg:py-16">
          <div className="flex flex-col gap-16">
            {pageData.content.map((section) => (
              <div key={section.id} className="relative flex flex-col">
                {/* Header Row: Title/Description on Left, Button on Right */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
                  <div className="flex-1">
                    <h3 className="text-3xl lg:text-[48px] font-bold mb-4 tracking-wide text-white">
                      {section.highlightTitle && (
                        <span className="text-[var(--color-primary)] mr-2">
                          {section.highlightTitle}
                        </span>
                      )}
                      {section.mainTitle}
                    </h3>
                    <p className="text-gray-400 text-[15px] lg:text-[20px] leading-relaxed max-w-4xl">
                      {section.description}
                    </p>
                  </div>
                  
                  <div className="shrink-0 flex items-center lg:items-start">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-l from-[var(--color-dark-orange)] to-[var(--color-primary)] px-8 py-4 rounded-full text-[16px] font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(247,156,41,0.3)] group text-white"
                    >
                      Contact Now{" "}
                      <span className="inline-block animate-bounce-x">
                        <Icons.ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Dynamic Image Layout */}
                {activeId === "sandwich-boards" || activeId === "banners" || activeId === "custom-pop-up-tents" || activeId === "flags" && section.images?.length >= 7 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 items-center">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                      <div className="rounded-2xl overflow-hidden shadow-lg group relative">
                        <img src={section.images[0]} alt="" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="flex flex-col gap-4 lg:gap-6">
                      <div className="rounded-2xl overflow-hidden shadow-lg group relative">
                        <img src={section.images[1]} alt="" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-lg group relative">
                        <img src={section.images[2]} alt="" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    </div>

                    {/* Column 3 (Center Tall) */}
                    <div className="flex flex-col gap-4 h-full hidden md:flex col-span-2 md:col-span-1">
                      <div className="rounded-2xl overflow-hidden shadow-lg group relative h-full">
                        <img src={section.images[3]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[300px] xl:min-h-[400px]" />
                      </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-4 lg:gap-6 hidden xl:flex">
                      <div className="rounded-2xl overflow-hidden shadow-lg group relative">
                        <img src={section.images[4]} alt="" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-lg group relative">
                        <img src={section.images[5]} alt="" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    </div>

                    {/* Column 5 */}
                    <div className="flex flex-col gap-4 hidden xl:flex">
                      <div className="rounded-2xl overflow-hidden shadow-lg group relative">
                        <img src={section.images[6]} alt="" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
                    {section.images?.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg overflow-hidden border border-[#333] shadow-lg relative group break-inside-avoid"
                      >
                        <img
                          src={imgSrc}
                          alt={`${section.mainTitle} image ${idx + 1}`}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
