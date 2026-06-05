import React, { useEffect } from "react";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic from "./DirectMailDynamic";
import { Icons } from "../../Icons/icons";

export default function DirectMailCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = DirectMailData.find((c) => c.id === "2");
  if (!data) return null;

  return (
    <>
      {data.featureRight && (
        <DirectMailDynamic
          heroHeading={data.heroHeading || data.title}
          breadcrumbText="Direct Mailing"
          imagePosition="left"
          image={data.featureRight.image}
          heading={data.featureRight.heading}
          description={data.featureRight.subDescription}
          listItems={data.featureRight.features}
          listColumns={1}
          listStyle="bullet"
          benefitsData={data.benefitsLeft}
        >
          {/* Section 3: Popular Direct Mail Marketing Targeting Categories */}
          {data.categories && (
            <div className="container mx-auto px-4 md:px-8 py-20 text-center mt-20">
              <h3 className="text-[20px] font-medium mb-12 uppercase tracking-wide">
                Popular Direct Mail Marketing{" "}
                <span className="font-bold">Targeting Categories</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {data.categories.map((cat, i) => {
                  const IconComp = Icons[cat.icon] || Icons.Check;
                  return (
                    <div
                      key={i}
                      className="w-[170px] h-[170px] bg-white rounded-[24px] flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:-translate-y-2 transition-transform shadow-xl"
                    >
                      <div className="w-[45px] h-[45px] bg-[#f5f5f5] rounded-full flex items-center justify-center mb-3 text-[var(--color-primary)]">
                        <IconComp className="w-6 h-6 text-black" />
                      </div>
                      <span className="text-[#333] font-bold text-[14px] leading-tight">
                        {cat.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 4: Work With Top-Rated Direct Mail Professionals */}
          <div className="container mx-auto px-4 md:px-8 py-20 mt-10 border-t border-[#ffffff1a]">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[32px] md:text-[40px] font-bold mb-6 leading-tight">
                  Work With Top-Rated Direct Mail Professionals Near You
                </h2>
                <p className="text-[18px] mb-6">
                  When you partner with NE Signs, you tap into a heritage of
                  direct mail success spanning more than four decades. Our team
                  takes ownership of your campaign.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-sm"></div>{" "}
                    Data-driven consumer profiling
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-sm"></div>{" "}
                    Postal processing
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-sm"></div>{" "}
                    Equipment specifications
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-sm"></div>{" "}
                    And more!
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-5/12 ml-auto">
                <img
                  src="/Image/Services/DirectMail/CustomerAndBusinessCard/DirectMail-CustomerBusiness.png"
                  alt="Professionals"
                  className="w-full rounded-[32px]"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Expert Marketing Solutions */}
          {data.solutionsGrid && (
            <div className="container mx-auto px-4 md:px-8 py-20 text-center">
              <h2 className="text-[24px] font-bold mb-12 uppercase tracking-wide">
                EXPERT MARKETING SOLUTIONS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {data.solutionsGrid.map((sol, i) => (
                  <div
                    key={i}
                    className="bg-[#1a1a1a] border border-[#ffffff1a] rounded-[24px] p-10 flex flex-col items-center justify-center text-center hover:bg-[#222] transition-colors"
                  >
                    <h3 className="text-[18px] font-bold mb-3 uppercase">
                      {sol.title}
                    </h3>
                    <p className=" text-[14px] leading-relaxed">{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 6: Vertical Timeline */}
          {data.verticalTimeline && (
            <div className="container mx-auto px-4 md:px-8 py-20">
              <h2 className="text-[28px] md:text-[36px] font-bold mb-16 text-center">
                Your Growth Journey Starts Here
              </h2>
              <div className="max-w-[350px] mx-auto flex flex-col items-center">
                {data.verticalTimeline.map((step, i) => (
                  <React.Fragment key={i}>
                    {/* Step Card */}
                    <div className="bg-[#ebf8f8] w-full p-6 rounded-[24px] text-center shadow-lg relative z-10">
                      <h4 className="text-[#333] font-bold text-[16px] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-[#666] text-[13px]">{step.desc}</p>
                    </div>
                    {/* Connecting Line */}
                    {i !== data.verticalTimeline.length - 1 && (
                      <div className="w-[2px] h-[40px] bg-white/20"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </DirectMailDynamic>
      )}
    </>
  );
}
