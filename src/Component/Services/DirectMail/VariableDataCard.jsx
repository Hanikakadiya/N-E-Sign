import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic from "./DirectMailDynamic";
import { Icons } from "../../Icons/icons";
import { motion } from "framer-motion";
export default function VariableDataCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = DirectMailData.find((c) => c.id === "5");
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
          secondaryImagePosition="right"
          secondaryImage={data.featureRight?.image}
          secondaryHeading={data.featureRight?.heading}
          secondaryDescription={data.featureRight?.subDescription}
          secondaryListItems={data.featureRight?.features}
        />
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
