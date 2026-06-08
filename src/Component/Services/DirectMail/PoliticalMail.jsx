import React, { useEffect } from "react";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic, { ContentBlock } from "./DirectMailDynamic";

export default function PoliticalMail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = DirectMailData.find(c => c.id === "3");
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
          benefitsData={data.stackedFeatureLeft || data.howItWorks || data.benefitsLeft}
        >
        
        <div className="bg-[#111] text-white py-20 px-4 md:px-8 font-sans relative z-10">
            <div className="max-w-[1200px] mx-auto">
              
              {/* Timeline Section */}
              <div className="mb-32">
                <div className="text-center mb-16">
                  <h2 className="text-[32px] md:text-[40px] font-bold mb-4">How Direct Mail Drives Political Victory</h2>
                  <p className="text-white/60 text-[14px] md:text-[16px] max-w-[800px] mx-auto leading-relaxed">
                    Proven step-by-step approach to win votes, high-impact printed collateral for our candidates. Each milestone represents a competitive full-turn methodology.
                  </p>
                </div>

                <div className="relative">
                  {/* The connecting line */}
                  <div className="hidden md:block absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-white/20 z-0"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                    
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-primary,#F9A826)] text-black flex items-center justify-center font-bold text-[16px] mb-4 shadow-[0_0_0_6px_rgba(249,168,38,0.2)]">1</div>
                      <h4 className="font-bold text-[16px] mb-1">Targeted Outreach</h4>
                      <p className="text-[var(--color-primary,#F9A826)] text-[10px] font-bold uppercase tracking-widest mb-6">Target Audience</p>
                      
                      <div className="bg-white text-black rounded-xl p-6 w-full text-left shadow-xl h-full">
                        <div className="w-8 h-8 rounded bg-[var(--color-primary,#F9A826)]/10 flex items-center justify-center mb-4">
                          <svg className="w-4 h-4 text-[var(--color-primary,#F9A826)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <p className="text-[13px] leading-relaxed text-black/80">
                          We help you identify and reach your most crucial voter demographics with precision targeted mailing lists.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-[16px] mb-4 shadow-[0_0_0_6px_rgba(255,255,255,0.1)]">2</div>
                      <h4 className="font-bold text-[16px] mb-1">Compelling Message</h4>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-6">Direct Design</p>
                      
                      <div className="bg-[#1c1c1c] border border-white/5 text-white rounded-xl p-6 w-full text-left h-full">
                        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center mb-4">
                          <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </div>
                        <p className="text-[13px] leading-relaxed text-white/60">
                          Our creative team designs impactful mailers that resonate with voters and clearly convey your platform.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-[16px] mb-4 shadow-[0_0_0_6px_rgba(255,255,255,0.1)]">3</div>
                      <h4 className="font-bold text-[16px] mb-1">Strategic Deploy</h4>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-6">Creative Output</p>
                      
                      <div className="bg-[#1c1c1c] border border-white/5 text-white rounded-xl p-6 w-full text-left h-full">
                        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center mb-4">
                          <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                          </svg>
                        </div>
                        <p className="text-[13px] leading-relaxed text-white/60">
                          We time your mailings perfectly to maximize visibility and influence right before critical voting periods.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-[16px] mb-4 shadow-[0_0_0_6px_rgba(255,255,255,0.1)]">4</div>
                      <h4 className="font-bold text-[16px] mb-1">Campaign Victory</h4>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-6">First Mail Drop</p>
                      
                      <div className="bg-[#1c1c1c] border border-white/5 text-white rounded-xl p-6 w-full text-left h-full">
                        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center mb-4">
                          <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-[13px] leading-relaxed text-white/60">
                          Watch your targeted efforts translate into increased voter turnout and electoral success.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="text-center mb-16">
                <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase mb-4">A Strategic Advantage</p>
                <h2 className="text-[32px] md:text-[40px] font-bold mb-4">Benefits of Direct Mail</h2>
                <p className="text-white/60 text-[14px] md:text-[16px] max-w-[700px] mx-auto leading-relaxed">
                  Simple, effective ways to reach voters directly. See why campaigns across voting styles prioritize direct mail to win.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Red */}
                <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#df5551] shadow-lg flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#df5551]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#df5551]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[16px]">Unlock Voter Knowledge</h4>
                  </div>
                  <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                    Deep dive into local trends with data-driven insights. Leverage data to understand your constituents better and refine your targeting strategies.
                  </p>
                  <a href="#" className="text-[#df5551] text-[12px] font-bold flex items-center gap-1 hover:underline">
                    View electoral reach <span className="text-[14px]">→</span>
                  </a>
                </div>

                {/* Card 2: Blue */}
                <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#0f62bb] shadow-lg flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#0f62bb]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0f62bb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[16px]">Rally the Base Early</h4>
                  </div>
                  <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                    Capitalize on pre-election momentum. Mobilize your core supporters effectively, build grassroots excitement, and secure early voting advantages.
                  </p>
                  <a href="#" className="text-[#0f62bb] text-[12px] font-bold flex items-center gap-1 hover:underline">
                    View election impact <span className="text-[14px]">→</span>
                  </a>
                </div>

                {/* Card 3: Red */}
                <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#df5551] shadow-lg flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#df5551]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#df5551]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[16px]">Target Specific Voters</h4>
                  </div>
                  <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                    Speak directly to what matters. Deliver personalized messages to distinct demographics, addressing their unique concerns and priorities.
                  </p>
                  <a href="#" className="text-[#df5551] text-[12px] font-bold flex items-center gap-1 hover:underline">
                    View audience profiles <span className="text-[14px]">→</span>
                  </a>
                </div>

                {/* Card 4: Blue */}
                <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#0f62bb] shadow-lg flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#0f62bb]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0f62bb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[16px]">Build Real Trust</h4>
                  </div>
                  <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                    Print shows commitment. Physical mail demonstrates dedication and legitimacy, establishing a stronger connection than fleeting digital ads.
                  </p>
                  <a href="#" className="text-[#0f62bb] text-[12px] font-bold flex items-center gap-1 hover:underline">
                    View trust metrics <span className="text-[14px]">→</span>
                  </a>
                </div>

                {/* Card 5: Green */}
                <div className="bg-white text-black rounded-xl p-6 border-l-[6px] border-[#66a848] shadow-lg flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#66a848]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#66a848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-[16px]">Low-Budget Friendly</h4>
                  </div>
                  <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                    Maximize every campaign dollar. Cost-effective outreach compared to broadcast media, providing a higher return on investment for tight budgets.
                  </p>
                  <a href="#" className="text-[#66a848] text-[12px] font-bold flex items-center gap-1 hover:underline">
                    View ROI case studies <span className="text-[14px]">→</span>
                  </a>
                </div>

                {/* Card 6: Dark Blue */}
                <div className="bg-[#0f172a] text-white rounded-xl p-8 shadow-lg flex flex-col justify-center items-start relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[var(--color-primary,#F9A826)] opacity-10 rounded-full blur-2xl"></div>
                  
                  <div className="bg-[var(--color-primary,#F9A826)] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-4">
                    WIN MORE
                  </div>
                  <h4 className="font-bold text-[22px] mb-3 leading-tight">Is Your Campaign Ready to Win?</h4>
                  <p className="text-white/60 text-[13px] leading-relaxed mb-8">
                    Start your targeted direct mail campaign today. Let us help you develop a winning strategy that reaches your voters effectively.
                  </p>
                  <button className="bg-[var(--color-primary,#F9A826)] hover:bg-[#e09822] transition-colors text-black font-bold py-3 px-6 rounded w-full flex items-center justify-center gap-2">
                    Get Started Today
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
                <h2 className="text-[32px] md:text-[40px] font-bold mb-4">Serving All Political Parties and Offices</h2>
                <p className="text-white/60 text-[14px] md:text-[16px] max-w-[800px] mx-auto leading-relaxed">
                  A unified journey for every candidate. We bridge the gap with expert direct mail strategies tailored for every point on the political spectrum.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.parties.map((party, idx) => {
                  const isLower = idx % 2 !== 0; // Alternating stagger effect
                  
                  // Helper function to pick SVG based on party title
                  const getPartyIcon = (title) => {
                    if (title === "Republican") {
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 4v16h2v-6h4a5 5 0 000-10H7zm2 2h4a3 3 0 010 6H9V6z"/>
                        </svg>
                      );
                    } else if (title === "Democratic") {
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      );
                    } else if (title === "Independent") {
                      return (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      );
                    } else {
                      return (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      );
                    }
                  };

                  return (
                    <div key={idx} className={`relative flex flex-col items-center ${isLower ? 'lg:mt-12' : 'lg:-mt-4'}`}>
                      
                      {/* Top Dot for Lower Cards */}
                      {isLower && (
                        <div className="w-2 h-2 rounded-full mb-6 hidden lg:block" style={{ backgroundColor: party.color }}></div>
                      )}

                      <div className="bg-white rounded-3xl p-8 shadow-xl w-full flex flex-col items-start transition-transform hover:-translate-y-2 duration-300 h-full">
                        <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: `${party.color}15`, color: party.color }}>
                          {getPartyIcon(party.title)}
                        </div>
                        <h4 className="font-bold text-[20px] mb-3" style={{ color: party.color }}>{party.title}</h4>
                        <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">
                          {party.desc}
                        </p>
                        <a href="#" className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 transition-opacity hover:opacity-70" style={{ color: party.color }}>
                          Contact Now <span className="text-[14px]">→</span>
                        </a>
                      </div>

                      {/* Bottom Dot for Higher Cards */}
                      {!isLower && (
                        <div className="w-2 h-2 rounded-full mt-6 hidden lg:block" style={{ backgroundColor: party.color }}></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA Pill */}
              <div className="mt-24 flex justify-center">
                <div className="bg-white rounded-full py-4 px-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-black shadow-xl cursor-pointer hover:shadow-2xl transition-all hover:scale-105 duration-300">
                  <span className="font-bold text-[15px] whitespace-nowrap">Ready to start your journey?</span>
                  <a href="#" className="text-[var(--color-primary,#F9A826)] font-bold text-[15px] flex items-center gap-1 hover:underline whitespace-nowrap">
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
