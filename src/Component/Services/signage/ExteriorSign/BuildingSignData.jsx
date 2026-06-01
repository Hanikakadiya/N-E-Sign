import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import SignageData from "../../../Data/SignageData.json";
import { Icons } from "../../../Icons/icons";
import Sidebar from "../../../Sidebar";

export default function BuildingSignData() {
  const [searchParams] = useSearchParams();
  const activeId = searchParams.get('tab') || 'channel-letters';
  const lookupId = activeId;

  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    // Simulating API fetch with loading state
    const fetchData = async () => {
      setTimeout(() => {
        const buildingSignData = SignageData.find(c => c.title === "Exterior sign")?.subCategories.find(s => s.title === "Building Signs");
        
        const data = {
          sidebar: buildingSignData?.sidebar,
          content: buildingSignData?.contentDetails[lookupId]
        };
        setPageData(data);
      }, 500);
    };

    // Reset data to trigger loading state when tab changes
    setPageData(null);
    fetchData();
  }, [lookupId]);

  if (!pageData || !pageData.content) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black font-poppins text-white">
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
          links={pageData.sidebar.links} 
          activeId={activeId} 
        />

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
            {pageData.content.map((section) => (
              <div
                key={section.id}
                className="relative flex flex-col"
              >
                <h3 className="text-3xl lg:text-[48px] font-bold mb-4 tracking-wide text-white">
                  {section.highlightTitle && <span className="text-[var(--color-primary)] mr-2">{section.highlightTitle}</span>}
                  {section.mainTitle}
                </h3>
                <p className="text-gray-400 text-[15px] lg:text-[20px] leading-relaxed max-w-6xl mb-12">
                  {section.description}
                </p>

                {/* Dynamic Image Layout */}
                <div 
                  className={
                    activeId === "channel-letters"
                      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6"
                      : "columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6"
                  }
                >
                  {section.images.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className={`rounded-lg overflow-hidden border border-[#333] shadow-lg relative group ${
                        activeId === "channel-letters" ? "aspect-[3/4]" : "break-inside-avoid"
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`${section.mainTitle} image ${idx + 1}`}
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                          activeId === "channel-letters" ? "h-full" : "h-auto"
                        }`}
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
