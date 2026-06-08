import React, { useEffect } from "react";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic, { ContentBlock } from "./DirectMailDynamic";
import { Icons } from "../../Icons/icons";
import { Link } from "react-router-dom";

export default function CustomerAndBusinessMailCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = DirectMailData.find((c) => c.id === "4");
  if (!data) return null;

  return (
    <>
      {data.featureLeft && (
        <DirectMailDynamic
          heroHeading={data.heroHeading || data.title}
          breadcrumbText="Direct Mailing"
          imagePosition="left"
          image={data.featureLeft.image}
          heading={data.featureLeft.heading}
          description={data.featureLeft.subDescription}
          listItems={data.featureLeft.features}
          benefitsData={
            data.stackedFeatureLeft || data.howItWorks || data.benefitsLeft
          }
        >
          <div className=" py-20 px-4 md:px-8 font-sans relative z-10">
            <div className="max-w-[1200px] mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h2 className="text-[36px] md:text-[36px] font-bold mb-4">
                  Reach Your Ideal Audience
                </h2>
                <p className="text-white/60 text-[16px] md:text-[20px] max-w-[600px] mx-auto">
                  Find your perfect mailing strategy through our guided
                  selection process.
                </p>
              </div>

              {/* Marketing Goal Section */}
              <div className="mb-24">
                <h3 className="text-center text-[20px] font-semibold mb-8">
                  What is your primary marketing goal?
                </h3>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <button className="bg-[#1a1a1a] hover:bg-[#222] transition-colors border border-white/5 rounded-xl p-6 flex items-start gap-4 text-left w-full md:w-[400px]">
                    <div className="bg-white/5 p-3 rounded-lg flex-shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-primary, #F9A826)"
                        strokeWidth="2"
                      >
                        <path
                          d="M3 21h18M5 21V7l8-4 8 4v14M9 11v10M15 11v10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[18px] mb-1">
                        Local Saturation
                      </h4>
                      <p className="text-white/50 text-[14px]">
                        I want to reach every home in a specific area.
                      </p>
                    </div>
                  </button>
                  <button className="bg-[#1a1a1a] hover:bg-[#222] transition-colors border border-white/5 rounded-xl p-6 flex items-start gap-4 text-left w-full md:w-[400px]">
                    <div className="bg-white/5 p-3 rounded-lg flex-shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-primary, #F9A826)"
                        strokeWidth="2"
                      >
                        <path
                          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[18px] mb-1">
                        Specific Demographics
                      </h4>
                      <p className="text-white/50 text-[14px]">
                        I want to reach people based on data/traits.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Compare Benefits Section */}
              <div className="mb-32">
                <h3 className="text-center text-[20px] font-semibold mb-8">
                  Compare the strategic benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* EDDM Card */}
                  <div className="bg-[#1c1c1c] rounded-2xl p-8 md:p-10 border border-white/5">
                    <div className="bg-[var(--color-primary)] text-[12px] font-bold px-3 py-1 rounded inline-block mb-6 uppercase tracking-wider">
                      EDDM
                    </div>
                    <h3 className="text-[24px] font-bold mb-4">
                      Every Door Direct Mail
                    </h3>
                    <p className="text-white/60 mb-8 text-[15px] leading-relaxed">
                      Best for high-volume local awareness where "Current
                      Resident" messaging is effective.
                    </p>
                    <ul className="space-y-6">
                      {[
                        {
                          title: "Lowest Postage:",
                          desc: "Maximum savings on postage rates per piece.",
                        },
                        {
                          title: "Zero Data Costs:",
                          desc: "No need to purchase or manage mailing lists.",
                        },
                        {
                          title: "Route Saturation:",
                          desc: "Reach every single mailbox in selected routes.",
                        },
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <Icons.Check className="w-5 h-5 text-[var(--color-primary,#F9A826)] flex-shrink-0" />
                          <p className="text-[15px] text-white/80">
                            <span className="font-bold">{item.title}</span>{" "}
                            {item.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Targeted Card */}
                  <div className="bg-[#1c1c1c] rounded-2xl p-8 md:p-10 border border-white/5">
                    <div className="bg-[var(--color-primary)] text-[12px] font-bold px-3 py-1 rounded inline-block mb-6 uppercase tracking-wider">
                      TARGETED
                    </div>
                    <h3 className="text-[24px] font-bold mb-4">
                      Targeted Mailing Lists
                    </h3>
                    <p className="text-white/60 mb-8 text-[15px] leading-relaxed">
                      Best for data-driven campaigns targeting specific ages,
                      incomes, or consumer behaviors.
                    </p>
                    <ul className="space-y-6">
                      {[
                        {
                          title: "Named Delivery:",
                          desc: "Personalized mail addressed to specific individuals.",
                        },
                        {
                          title: "High Precision:",
                          desc: "Filter by income, age, homeownership, and more.",
                        },
                        {
                          title: "Superior ROI:",
                          desc: "Higher conversion rates by reaching the most likely buyers.",
                        },
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <Icons.Check className="w-5 h-5 text-[var(--color-primary,#F9A826)] flex-shrink-0" />
                          <p className="text-[15px] text-white/80">
                            <span className="font-bold text-white">
                              {item.title}
                            </span>{" "}
                            {item.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Geographic Targeting Options */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-[var(--color-primary)/10] border border-white/10 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                  <span className="text-[12px] font-bold text-[var(--color-primary)] tracking-widest uppercase">
                    Geospatial Intelligence
                  </span>
                </div>
                <h2 className="text-[36px] md:text-[60px] font-bold mb-6">
                  Geographic{" "}
                  <span className="text-[var(--color-primary)]">Targeting</span>{" "}
                  Options
                </h2>
                <p className="text-white/60 text-[15px] md:text-[16px] max-w-[700px] mx-auto leading-relaxed">
                  Harness high-fidelity location data to deploy
                  precision-engineered mailing lists. Our platform maps audience
                  density with sub-meter accuracy across three core tiers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 flex flex-col h-full">
                  <div className="w-12 h-12  bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-8">
                    {/* <svg className="w-6 h-6 text-[var(--color-primary,#F9A826)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> */}
                    <Icons.roundLocation className="w-6 h-6" />
                  </div>
                  <div className="text-white/40 text-[10px] font-bold tracking-[0.2em] mb-3 uppercase opacity-90">
                    Tier 01 // Hyper-Local
                  </div>
                  <h3 className="text-[24px] font-bold mb-4">
                    ZIP Code & Radius
                  </h3>
                  <p className="text-white/50 text-[16px] leading-relaxed mb-8 flex-grow">
                    Deploy laser-focused campaigns using{" "}
                    <span className="text-white/80 font-semibold">
                      ZIP code mailing lists
                    </span>{" "}
                    and radial coordinates. Optimized for regional service hubs
                    and micro-markets.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 text-[10px] font-bold tracking-wider">
                    <span className="text-white/40">PRECISION: HIGH</span>
                    <span className="text-[var(--color-primary,#F9A826)]">
                      ACTIVE: ANALYZE
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 flex flex-col h-full">
                  <div className="w-12 h-12  bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-8">
                    {/* <svg className="w-6 h-6 text-[var(--color-primary,#F9A826)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg> */}
                    <Icons.Earth className="w-6 h-6" />
                  </div>
                  <div className="text-white/40 text-[10px] font-bold tracking-[0.2em] mb-3 uppercase opacity-90">
                    Tier 02 // Regional Coverage
                  </div>
                  <h3 className="text-[24px] font-bold mb-4">
                    City, County & State
                  </h3>
                  <p className="text-white/50 text-[16px] leading-relaxed mb-8 flex-grow">
                    Broad-spectrum{" "}
                    <span className="text-white/80 font-semibold">
                      macro-targeting
                    </span>{" "}
                    across major metropolitan clusters. Ideal for statewide
                    initiatives and multi-city rollouts.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 text-[10px] font-bold tracking-wider">
                    <span className="text-white/40">SCALE: UNLIMITED</span>
                    <span className="text-[var(--color-primary,#F9A826)]">
                      ACTIVE: NETWORK
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 flex flex-col h-full">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-8">
                    {/* <svg className="w-6 h-6 text-[var(--color-primary,#F9A826)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg> */}
                    <Icons.UpDownArrow className="w-6 h-6" />
                  </div>
                  <div className="text-white/40 text-[10px] font-bold tracking-[0.2em] mb-3 uppercase opacity-90">
                    Tier 03 // Neighborhood
                  </div>
                  <h3 className="text-[24px] font-bold mb-4">Carrier Route</h3>
                  <p className="text-white/50 text-[16px] leading-relaxed mb-8 flex-grow">
                    Maximum saturation via{" "}
                    <span className="text-white/80 font-semibold">
                      USPS carrier route data
                    </span>
                    . Target specific mail paths for extreme cost efficiency and
                    neighborhood-level reach.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 text-[10px] font-bold tracking-wider">
                    <span className="text-white/40">EFFICIENCY: MAX</span>
                    <span className="text-[var(--color-primary,#F9A826)]">
                      ROUTING: USPS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Manually placed Secondary Content Block to control its position */}
          <ContentBlock
            imagePosition="right"
            image={data.benefitsLeft?.image}
            heading={data.benefitsLeft?.heading}
            description={data.benefitsLeft?.subDescription}
            listItems={data.benefitsLeft?.features}
            imageTheme="standard"
          />
        </DirectMailDynamic>
      )}

      {/* Static Footer Sections (Outside DirectMailDynamic) */}
      {data.featureLeft && (
        <div className=" text-white pb-20 px-4 md:px-8 font-sans relative z-10">
          <div className="max-w-[1400px] mx-auto">
            {/* What's Included Section */}
            <div className="mt-32 border-t border-white/10 pt-20">
             <div className="pl-6 border-l-4 border-[var(--color-primary,#F9A826)] mb-4">
                    <p className="text-[var(--color-primary,#F9A826)] text-[14px] font-bold tracking-[0.2em] uppercase mb-2">
                      What's Included In Service
                    </p>
                    <h2 className="text-[32px] md:text-[48px] font-bold leading-tight">
                      WHAT'S INCLUDED WITH OUR <br />
                      <span className="text-[var(--color-primary,#F9A826)]">
                        TARGETED MAILING SERVICE
                      </span>
                    </h2>
                  </div>
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column */}
                <div className="lg:w-5/12 flex flex-col gap-8">
                 

                  <div className="w-full h-full min-h-[400px] bg-[#1a232c] rounded-[24px] relative overflow-hidden shadow-xl">
                    <img
                      src="/Image/Services/DirectMail/targeted_mail_mailbox.png"
                      alt="Mailbox Illustration"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1 bg-[#1c1c1c] rounded-xl p-5 border border-white/5">
                      <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1">
                        Data Integrity
                      </p>
                      <h4 className="text-[20px] font-bold mb-3">99.98%</h4>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--color-primary,#F9A826)] w-[99.98%]"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#1c1c1c] rounded-xl p-5 border border-white/5">
                      <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1">
                        Network Reach
                      </p>
                      <h4 className="text-[20px] font-bold mb-3">50 States</h4>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--color-primary,#F9A826)] w-[100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (Grid) */}
                <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
                  {/* Grid Card 1 */}
                  <div className="bg-[#1c1c1c] rounded-xl p-6 border border-white/5 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#111] rounded-lg border border-white/10 flex items-center justify-center">
                        {/* <svg
                          className="w-5 h-5 text-[var(--color-primary,#F9A826)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg> */}
                        <Icons.database className="w-5 h-5 text-[var(--color-primary,#F9A826)]"/>
                      </div>
                      <h4 className="text-[14px] font-bold uppercase tracking-wide">
                        Audience & Area Analysis
                      </h4>
                    </div>
                    <p className="text-white/60 text-[14px] leading-relaxed mb-2 flex-grow h-fit">
                      Size your market by{" "}
                      <span className="text-white"> ZIP, radius, or city </span>{" "}
                      using high-precision USPS mailing lists.
                    </p>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-white/40 text-[10px] font-bold tracking-widest">
                        PRECISION SCALE
                      </span>
                      <span className="text-[var(--color-primary,#F9A826)] text-[10px] font-bold">
                        HIGH
                      </span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-primary,#F9A826)] w-[85%]"></div>
                    </div>
                  </div>

                  {/* Grid Card 2 */}
                  <div className="bg-[#1c1c1c] rounded-xl p-6 border border-white/5 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#111] rounded-lg border border-white/10 flex items-center justify-center">
                        <Icons.database className="w-5 h-5 text-[var(--color-primary,#F9A826)]"/>

                      </div>
                      <h4 className="text-[14px] font-bold uppercase tracking-wide">
                        Data Hygiene
                      </h4>
                    </div>
                    <p className="text-white/60 text-[13px] leading-relaxed mb-8 flex-grow">
                      B2B & Consumer lists. CASS/NCOA updated and DPV validated
                      to eliminate duplicates.
                    </p>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-white/40 text-[10px] font-bold tracking-widest">
                        CLEAN RATE
                      </span>
                      <span className="text-[var(--color-primary,#F9A826)] text-[10px] font-bold">
                        OPTIMIZED
                      </span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-primary,#F9A826)] w-[95%]"></div>
                    </div>
                  </div>

                  {/* Grid Card 3 */}
                  <div className="bg-[#1c1c1c] rounded-xl p-6 border border-white/5 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#111] rounded-lg border border-white/10 flex items-center justify-center">
                       <Icons.Printing className="w-5 h-5 text-[var(--color-primary,#F9A826)]"/>
                      </div>
                      <h4 className="text-[14px] font-bold uppercase tracking-wide">
                        Creative & Mail
                      </h4>
                    </div>
                    <p className="text-white/60 text-[13px] leading-relaxed mb-8 flex-grow">
                      Full lifecycle management: design, high-volume print, and
                      verified USPS entry.
                    </p>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-white/40 text-[10px] font-bold tracking-widest">
                        IMPLEMENTATION
                      </span>
                      <span className="text-[var(--color-primary)] text-[10px] font-bold">
                        MAX
                      </span>
                    </div>
                    <div className="h-1 w-full rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-primary)] w-[90%]"></div>
                    </div>
                  </div>

                  {/* Grid Card 4 */}
                  <div className="bg-[#1c1c1c] rounded-xl p-6 border border-white/5 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#111] rounded-lg border border-white/10 flex items-center justify-center">
                        {/* <svg
                          className="w-5 h-5 text-[var(--color-primary,#F9A826)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg> */}
                      </div>
                      <h4 className="text-[14px] font-bold uppercase tracking-wide">
                        Tracking & BI
                      </h4>
                    </div>
                    <p className="text-white/60 text-[13px] leading-relaxed mb-8 flex-grow">
                      Real-time reporting with QR tracking, UTMs, and matchbacks
                      for ROI analysis.
                    </p>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-white/40 text-[10px] font-bold tracking-widest">
                        ATTRIBUTION
                      </span>
                      <span className="text-[var(--color-primary,#F9A826)] text-[10px] font-bold">
                        FULL MATCH
                      </span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-primary,#F9A826)] w-[100%]"></div>
                    </div>
                  </div>
                </div>
              </div>
               <div className="shrink-0 flex items-center justify-center lg:items-start">
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
          </div>
        </div>
      )}
    </>
  );
}
