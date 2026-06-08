import React, { useEffect } from "react";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic, { ContentBlock } from "./DirectMailDynamic";
import { Icons } from "../../Icons/icons";

export default function PoliticalMail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = DirectMailData.find((c) => c.id === "3");
  if (!data) return null;

  return (
    <>
      {data.featureLeft && (
        <>
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
            <div className="py-20 px-4 md:px-8 font-sans relative z-10">
              <div className="max-w-[1200px] mx-auto">
                {/* Timeline Section */}
                <div className="mb-32">
                  <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[48px] font-bold mb-4">
                      How Direct Mail Drives Political Victory
                    </h2>
                    <p className="text-white/60 text-[14px] md:text-[18px] max-w-[800px] mx-auto leading-relaxed">
                      Proven step-by-step approach to win votes, high-impact
                      printed collateral for our candidates. Each milestone
                      represents a competitive full-turn methodology.
                    </p>
                  </div>

                  <div className="relative">
                    {/* The connecting line */}
                    <div className="hidden md:block absolute top-[20px] left-[0%] right-[0%] h-[1px] bg-white z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                      {/* Step 1 */}
                      <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-[56px] h-[56px] rounded-full py-4 px-4 bg-white text-black flex items-center justify-center font-bold text-[20px] mb-4 relative z-20 transition-all duration-300 group-hover:bg-[var(--color-primary,#F9A826)] group-hover:text-white group-hover:ring-2 group-hover:ring-white group-hover:ring-offset-4 group-hover:ring-offset-[#0a0a0a]">
                          1
                        </div>
                        <h4 className="font-bold text-[18px] mb-1 text-white">
                          Targeted Outreach
                        </h4>
                        <p className="text-[14px] text-white/40 font-bold uppercase tracking-widest mb-6">
                          Target Audience
                        </p>

                        <div className="bg-[#1c1c1c] text-white border-t-4 border-transparent group-hover:bg-white group-hover:text-black group-hover:border-[var(--color-primary,#F9A826)] transition-all duration-300 rounded-xl p-6 w-full md:w-[264px] h-[263px] text-left shadow-xl flex flex-col mx-auto">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded bg-white/10 group-hover:bg-[var(--color-primary,#F9A826)]/10 flex items-center justify-center transition-colors duration-300">
                              <Icons.roundLocation className="w-4 h-4 text-white/70 group-hover:text-[var(--color-primary,#F9A826)] transition-colors duration-300" />
                            </div>
                            <span className="text-white group-hover:text-black font-bold text-[14px] uppercase tracking-wider transition-colors duration-300">
                              STEP 1
                            </span>
                          </div>
                          <p className="text-[14px] leading-relaxed text-white/60 group-hover:text-black/80 transition-colors duration-300 flex-grow overflow-hidden">
                            Start strong. Direct mail drives measurable results
                            with powerful ROI. Voters engage more with print,
                            and campaigns see higher recall rates. Speed
                            matters—our next-day mailing keeps you ahead of the
                            competition.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-[56px] h-[56px] rounded-full py-4 px-4 bg-white text-black flex items-center justify-center font-bold text-[16px] mb-4 relative z-20 transition-all duration-300 group-hover:bg-[var(--color-primary,#F9A826)] group-hover:text-white group-hover:ring-2 group-hover:ring-white group-hover:ring-offset-4 group-hover:ring-offset-[#0a0a0a]">
                          2
                        </div>
                        <h4 className="font-bold text-[18px] mb-1 text-white">
                          Compelling Message
                        </h4>
                        <p className="text-white/40 text-[14px] font-bold uppercase tracking-widest mb-6">
                          Direct Design
                        </p>

                        <div className="bg-[#1c1c1c] text-white border-t-4 border-transparent group-hover:bg-white group-hover:text-black group-hover:border-[var(--color-primary,#F9A826)] transition-all duration-300 rounded-xl p-6 w-full md:w-[264px] h-[263px] text-left shadow-xl flex flex-col mx-auto">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded bg-white/10 group-hover:bg-[var(--color-primary,#F9A826)]/10 flex items-center justify-center transition-colors duration-300">
                              <Icons.Printing className="w-4 h-4 text-white/70 group-hover:text-[var(--color-primary,#F9A826)] transition-colors duration-300" />
                            </div>
                            <span className="text-white group-hover:text-black font-bold text-[14px] uppercase tracking-wider transition-colors duration-300">
                              STEP 2
                            </span>
                          </div>
                          <p className="text-[14px] leading-relaxed text-white/60 group-hover:text-black/80 transition-colors duration-300 flex-grow overflow-hidden">
                            Study voter data and demographic insights. We don’t
                            mass mail—we precisely target key segments to
                            stretch every campaign dollar further.
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-[56px] h-[56px] rounded-full py-4 px-4 bg-white text-black flex items-center justify-center font-bold text-[16px] mb-4 relative z-20 transition-all duration-300 group-hover:bg-[var(--color-primary,#F9A826)] group-hover:text-white group-hover:ring-2 group-hover:ring-white group-hover:ring-offset-4 group-hover:ring-offset-[#0a0a0a]">
                          3
                        </div>
                        <h4 className="font-bold text-[18px] mb-1 text-white">
                          Strategic Deploy
                        </h4>
                        <p className="text-white/40 text-[14px] font-bold uppercase tracking-widest mb-6">
                          Creative Output
                        </p>

                        <div className="bg-[#1c1c1c] text-white border-t-4 border-transparent group-hover:bg-white group-hover:text-black group-hover:border-[var(--color-primary,#F9A826)] transition-all duration-300 rounded-xl p-6 w-full md:w-[264px] h-[263px] text-left shadow-xl flex flex-col mx-auto">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded bg-white/10 group-hover:bg-[var(--color-primary,#F9A826)]/10 flex items-center justify-center transition-colors duration-300">
                              <Icons.route className="w-4 h-4 text-white/70 group-hover:text-[var(--color-primary,#F9A826)] transition-colors duration-300" />
                            </div>
                            <span className="text-white group-hover:text-black font-bold text-[14px] uppercase tracking-wider transition-colors duration-300">
                              STEP 3
                            </span>
                          </div>
                          <p className="text-[14px] leading-relaxed text-white/60 group-hover:text-black/80 transition-colors duration-300 flex-grow overflow-hidden">
                            Print leaves a lasting presence. Unlike digital ads
                            that disappear, mail pieces remain in homes. Design
                            materials that invite touch, attention, and repeated
                            viewing.
                          </p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-[56px] h-[56px] rounded-full py-4 px-4 bg-white text-black flex items-center justify-center font-bold text-[16px] mb-4 relative z-20 transition-all duration-300 group-hover:bg-[var(--color-primary,#F9A826)] group-hover:text-white group-hover:ring-2 group-hover:ring-white group-hover:ring-offset-4 group-hover:ring-offset-[#0a0a0a]">
                          4
                        </div>
                        <h4 className="font-bold text-[18px] mb-1 text-white">
                          Campaign Victory
                        </h4>
                        <p className="text-white/40 text-[14px] font-bold uppercase tracking-widest mb-6">
                          First Mail Drop
                        </p>

                        <div className="bg-[#1c1c1c] text-white border-t-4 border-transparent group-hover:bg-white group-hover:text-black group-hover:border-[var(--color-primary,#F9A826)] transition-all duration-300 rounded-xl p-6 w-full md:w-[264px] h-[263px] text-left shadow-xl flex flex-col mx-auto">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded bg-white/10 group-hover:bg-[var(--color-primary,#F9A826)]/10 flex items-center justify-center transition-colors duration-300">
                              <Icons.Check className="w-[16px] h-[16px] text-white/70 group-hover:text-[var(--color-primary,#F9A826)] transition-colors duration-300" />
                            </div>
                            <span className="text-white group-hover:text-black font-bold text-[14px] uppercase tracking-wider transition-colors duration-300">
                              FINAL
                            </span>
                          </div>
                          <p className="text-[14px] leading-relaxed text-white/60 group-hover:text-black/80 transition-colors duration-300 flex-grow overflow-hidden">
                            Complete campaign execution. From production to
                            verified delivery, we eliminate complexity. Clear
                            pricing and dependable performance define our
                            service.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="text-center mb-16">
                  <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase mb-4">
                    A Strategic Advantage
                  </p>
                  <h2 className="text-[32px] md:text-[40px] font-bold mb-4">
                    Benefits of Direct Mail
                  </h2>
                  <p className="text-white/60 text-[14px] md:text-[16px] max-w-[700px] mx-auto leading-relaxed">
                    Simple, effective ways to reach voters directly. See why
                    campaigns across voting styles prioritize direct mail to
                    win.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1: Red */}
                  <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#E53E3E] shadow-lg flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded bg-[#df5551]/10 flex items-center justify-center">
                        <Icons.Search className="w-5 h-5 text-[#E53E3E]" />
                      </div>
                      <h4 className="font-bold text-[20px]">
                        Voters See Your Message
                      </h4>
                    </div>
                    <p className="text-black/60 text-[14px] leading-relaxed mb-6 flex-grow">
                      <span className="text-black font-bold">
                        Every voter opens their mail.
                      </span>{" "}
                      Unlike digital ads that get blocked or ignored, a postcard
                      gets 100% "eyeball time" when people check their mailbox.
                    </p>
                    {/* <a
                      href="#"
                      className="text-[#df5551] text-[12px] font-bold flex items-center gap-1 hover:underline"
                    >
                      View electoral reach{" "}
                      <span className="text-[14px]">→</span>
                    </a> */}
                    <div className="flex items-center gap-3 mb-4  text-[#E53E3E] font-bold uppercase">
                      <span className="w-[16px] h-[16px] flex items-center justify-center">
                        <Icons.checkfilled />
                      </span>
                      <p className=" text-[14px] leading-relaxed flex-grow">
                        100% Delivery Rate
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Blue */}
                  <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#1152D4] shadow-lg flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded bg-[#1152D4]/10 flex items-center justify-center">
                        <Icons.Users className="w-5 h-5 text-[#1152D4]" />
                      </div>
                      <h4 className="font-bold text-[16px]">
                        Stays in the Home
                      </h4>
                    </div>
                    <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                      <span className="font-bold text-black">
                        {" "}
                        Physical items stick around.
                      </span>{" "}
                      A voter might keep your flyer on their kitchen counter or
                      fridge for days, serving as a constant reminder of your
                      name and mission.F
                    </p>
                    <div className="flex items-center gap-3 mb-4  text-[#1152D4] font-bold">
                      <span className="w-[16px] h-[16px] flex items-center justify-center">
                        <Icons.checkfilled />
                      </span>
                      <p className=" text-[14px] leading-relaxed flex-grow uppercase">
                        Repeated Exposure
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Red */}
                  <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#df5551] shadow-lg flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded bg-[#df5551]/10 flex items-center justify-center">
                        <Icons.roundLocation className="w-5 h-5 text-[#E53E3E]" />
                      </div>
                      <h4 className="font-bold text-[16px]">
                        Target Specific Voters
                      </h4>
                    </div>
                    <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                      <span className="font-bold text-black">
                        Spend smarter.
                      </span>
                      Target only the neighborhoods and audiences that align
                      with your campaign.
                    </p>
                    <div className="flex items-center gap-3 mb-4  text-[#E53E3E] font-bold uppercase">
                      <span className="w-[16px] h-[16px] flex items-center justify-center">
                        <Icons.checkfilled />
                      </span>
                      <p className=" text-[14px] leading-relaxed flex-grow">
                        Zero Wasted Spend
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Blue */}
                  <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#0f62bb] shadow-lg flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded bg-[#0f62bb]/10 flex items-center justify-center">
                        <Icons.Check className="w-5 h-5 text-[#1152D4]" />
                      </div>
                      <h4 className="font-bold text-[16px]">
                        Build Real Trust
                      </h4>
                    </div>
                    <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                      <span className="font-bold text-black">
                        Print feels official.
                      </span>
                      Voters trust printed materials more than social media ads.
                      A professional mailer gives your local campaign instant
                      legitimacy.
                    </p>
                    <div className="flex items-center gap-3 mb-4  text-[#1152D4] font-bold">
                      <span className="w-[16px] h-[16px] flex items-center justify-center">
                        <Icons.checkfilled />
                      </span>
                      <p className=" text-[14px] leading-relaxed flex-grow uppercase">
                        Verified Credibility
                      </p>
                    </div>
                  </div>

                  {/* Card 5: Green */}
                  <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#059669] shadow-lg flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded bg-[#66a848]/10 flex items-center justify-center">
                        <Icons.percent className="w-5 h-5 text-[#059669]" />
                      </div>
                      <h4 className="font-bold text-[16px]">
                        Low-Budget Friendly
                      </h4>
                    </div>
                    <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                      <span className="font-bold text-black">
                        Scales to your wallet.
                      </span>
                      Whether you're sending 500 or 5,000 pieces, bulk rates and
                      simple postcard designs keep your costs per voter
                      incredibly low.
                    </p>
                    <div className="flex items-center gap-3 mb-4  text-[#059669] font-bold">
                      <span className="w-[16px] h-[16px] flex items-center justify-center">
                        <Icons.checkfilled />
                      </span>
                      <p className=" text-[14px] leading-relaxed flex-grow uppercase">
                        High ROI for Small Budgets
                      </p>
                    </div>
                  </div>

                  {/* Card 6: Dark Blue */}
                  <div className="bg-[#0f172a] text-white rounded-xl p-8 shadow-lg flex flex-col justify-center items-start relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[var(--color-primary,#F9A826)] opacity-10 rounded-full blur-2xl"></div>

                    <div className="bg-[var(--color-primary,#F9A826)] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-4">
                      WIN MORE
                    </div>
                    <h4 className="font-bold text-[22px] mb-3 leading-tight">
                      Is Your Campaign Ready to Win?
                    </h4>
                    <p className="text-white/60 text-[13px] leading-relaxed mb-8">
                      Start your targeted direct mail campaign today. Let us
                      help you develop a winning strategy that reaches your
                      voters effectively.
                    </p>
                    <button className="bg-[var(--color-primary,#F9A826)] hover:bg-[#e09822] transition-colors text-black font-bold py-3 px-6 rounded w-full flex items-center justify-center gap-2">
                      Get Started Today
                      <Icons.ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Manually placed Secondary Content Block so it renders right above benefitsData */}
            <ContentBlock
              imagePosition="right"
              image={data.featureRight?.image}
              heading={data.featureRight?.heading}
              description={data.featureRight?.subDescription}
              listItems={data.featureRight?.features}
              imageTheme="standard"
            />
          </DirectMailDynamic>

          {/* Serving All Political Parties Section */}
          {data.parties && (
            <div className="bg-[#111] text-white py-24 px-4 md:px-8 font-sans relative z-10 border-t border-white/5">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-[32px] md:text-[40px] font-bold mb-4">
                    Serving All Political Parties and Offices
                  </h2>
                  <p className="text-white/60 text-[14px] md:text-[16px] max-w-[800px] mx-auto leading-relaxed">
                    A unified journey for every candidate. We bridge the gap
                    with expert direct mail strategies tailored for every point
                    on the political spectrum.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.parties.map((party, idx) => {
                    const isLower = idx % 2 !== 0; // Alternating stagger effect

                    // Helper function to pick SVG based on party title
                    const getPartyIcon = (title) => {
                      if (title === "Republican") {
                        return (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 4v16h2v-6h4a5 5 0 000-10H7zm2 2h4a3 3 0 010 6H9V6z" />
                          </svg>
                        );
                      } else if (title === "Democratic") {
                        return (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        );
                      } else if (title === "Independent") {
                        return (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        );
                      } else {
                        return (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        );
                      }
                    };

                    return (
                      <div
                        key={idx}
                        className={`relative flex flex-col items-center ${isLower ? "lg:mt-12" : "lg:-mt-4"}`}
                      >
                        {/* Top Dot for Lower Cards */}
                        {isLower && (
                          <div
                            className="w-2 h-2 rounded-full mb-6 hidden lg:block"
                            style={{ backgroundColor: party.color }}
                          ></div>
                        )}

                        <div className="bg-white rounded-3xl p-8 shadow-xl w-full flex flex-col items-start transition-transform hover:-translate-y-2 duration-300 h-full">
                          <div
                            className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                            style={{
                              backgroundColor: `${party.color}15`,
                              color: party.color,
                            }}
                          >
                            {getPartyIcon(party.title)}
                          </div>
                          <h4
                            className="font-bold text-[20px] mb-3"
                            style={{ color: party.color }}
                          >
                            {party.title}
                          </h4>
                          <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                            {party.desc}
                          </p>
                          <a
                            href="#"
                            className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 transition-opacity hover:opacity-70"
                            style={{ color: party.color }}
                          >
                            Contact Now <span className="text-[14px]">→</span>
                          </a>
                        </div>

                        {/* Bottom Dot for Higher Cards */}
                        {!isLower && (
                          <div
                            className="w-2 h-2 rounded-full mt-6 hidden lg:block"
                            style={{ backgroundColor: party.color }}
                          ></div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom CTA Pill */}
                <div className="mt-24 flex justify-center">
                  <div className="bg-white rounded-full py-4 px-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-black shadow-xl cursor-pointer hover:shadow-2xl transition-all hover:scale-105 duration-300">
                    <span className="font-bold text-[15px] whitespace-nowrap">
                      Ready to start your journey?
                    </span>
                    <a
                      href="#"
                      className="text-[var(--color-primary,#F9A826)] font-bold text-[15px] flex items-center gap-1 hover:underline whitespace-nowrap"
                    >
                      Contact our experts <span className="text-[18px]">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
