import React, { useEffect } from "react";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic from "./DirectMailDynamic";
import { Icons } from "../../../Component/Icons/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function EDDMServicesCard() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the EDDM data from your JSON file (ID 1)
  const data = DirectMailData.find((c) => c.id === "1");
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
          secondaryImagePosition="right"
          secondaryImage={data.featureRight?.image}
          secondaryHeading={data.featureRight?.heading}
          secondaryDescription={data.featureRight?.subDescription}
          secondaryListItems={data.featureRight?.features}
          benefitsData={
            data.stackedFeatureLeft || data.howItWorks || data.benefitsLeft
          }
        >
          {/* Section 3: Single Source for Powerful Direct Mail */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 mt-10 relative z-10"
          >
            <div className="w-full mb-20 border-b border-white/10 pb-8 border-dashed">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2] max-w-[800px]">
                Your Single Source for Powerful Direct Mail Campaigns That Drive
                Real Results
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-25">
              {/* Left Side: Images */}
              <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                <div className="relative w-full max-w-[600px]">
                  {/* Main Image */}
                  <div className="rounded-[24px] p-8 w-full aspect-square flex items-center justify-center">
                    <img
                      src="/Image/Services/DirectMail/EDDM/EDDM-YourHealth.png"
                      alt="Direct Mail Campaigns"
                      className="w-full h-auto object-contain "
                    />
                  </div>

                  {/* Floating Badge overlay */}
                  <div className="absolute -bottom-10 -right-4 md:-right-32 w-[180px] h-[180px] md:w-[320px] md:h-[320px] rounded-[24px] overflow-hidden shadow-2xl z-10">
                    <img
                      src="/Image/Services/DirectMail/EDDM/EDDM-Source-Year.png"
                      alt="25+ Years Experience"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Timeline/List */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center pl-0 lg:pl-16 relative mt-16 lg:mt-0">
                {/* Vertical Dotted Line */}
                <div className="absolute left-[23px] lg:left-[87px] top-6 bottom-8 w-[1px] border-l border-white/20"></div>

                <div className="space-y-12 relative z-10">
                  {[
                    {
                      title: "Boost Your Campaign ROI",
                      desc: "Increase your campaign ROI with our expert B2B and B2C direct mail service.",
                    },
                    {
                      title: "Personalized Mail That Connects",
                      desc: "We personalize each mail piece to create stronger customer connections.",
                    },
                    {
                      title: "Targeted Messaging That Engages",
                      desc: "Deliver custom-tailored messages that speak directly to your audience.",
                    },
                    {
                      title: "Powerful Postcard Marketing",
                      desc: "Design at the highest level with clear messaging that highlight your offerings.",
                    },
                    {
                      title: "Professional Brochures Design",
                      desc: "Create eye-catching brochures that showcase products and services.",
                    },
                    {
                      title: "Promotional Flyers & Mailers",
                      desc: "Develop flyers and mailers to promote your business, special events, or sales.",
                    },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-6 relative">
                      {/* Icon Circle */}
                      <div className="flex-shrink-0 w-[48px] h-[48px] rounded-full bg-[var(--color-primary)] flex items-center justify-center relative z-10 shadow-lg border-4 border-[#111]">
                        <Icons.Check className="w-[25px] h-[25px]" />
                      </div>
                      {/* Text Content */}
                      <div className="pt-2">
                        <h4 className="text-[18px] md:text-[20px] font-bold mb-2 leading-snug">
                          {feature.title}
                        </h4>
                        <p className="text-[15px] md:text-[16px] leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </DirectMailDynamic>
      )}
      {/* CTA Button Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 pt-10 flex justify-center relative z-10"
      >
        <Link
          to="/contact"
          className="bg-gradient-to-l from-[var(--color-dark-orange)] to-[var(--color-primary)] px-8 py-4 rounded-full text-[16px] font-semibold hover:opacity-90 transition-all flex items-center gap-3 shadow-[0_0_15px_rgba(247,156,41,0.3)] group text-white"
        >
          Contact Now
          <span className="inline-block group-hover:translate-x-1 transition-transform">
            <Icons.ArrowRight className="w-5 h-5" />
          </span>
        </Link>
      </motion.div>
    </>
  );
}
