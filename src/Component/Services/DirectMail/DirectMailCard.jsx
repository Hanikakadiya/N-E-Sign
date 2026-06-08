import React, { useEffect } from "react";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic, { ContentBlock } from "./DirectMailDynamic";
import { Icons } from "../../Icons/icons";
import { motion } from "framer-motion";

const iconMap = {
  ListBullets: <Icons.ListBullets className="text-2xl text-white" />,
  PenNib: <Icons.PenNib className="text-2xl text-white" />,
  Printer: <Icons.Printer className="text-2xl text-white" />,
  Envelope: <Icons.Envelope className="text-2xl text-white" />,
};

const targetingCategories = [
  {
    title: "Demographic",
    description:
      "Target by age, gender, marital status, and household composition.",
    icon: <Icons.TargetingUsers className="text-2xl" />,
  },
  {
    title: "Financial",
    description:
      "Filter by credit score, annual income, and overall net worth.",
    icon: <Icons.TargetingDollar className="text-2xl" />,
  },
  {
    title: "Homeownership",
    description:
      "Focus on home value, length of residence, and equity availability.",
    icon: <Icons.TargetingHome className="text-2xl" />,
  },
  {
    title: "Lifestyle",
    description:
      "Target interests like travel, fitness, technology, and hobbies.",
    icon: <Icons.TargetingSmile className="text-2xl" />,
  },
  {
    title: "Business",
    description:
      "B2B targeting by industry, company size, and executive titles.",
    icon: <Icons.TargetingBriefcase className="text-2xl" />,
  },
];

export default function DirectMailCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = DirectMailData.find((c) => c.id === "2");
  if (!data) return null;

  return (
    <div className="w-full flex flex-col">
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
        ></DirectMailDynamic>
      )}

      {/* Targeting Categories Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-[90rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-8xl mx-auto mb-16"
          >
            <h2 className="text-2xl mx-auto md:text-5xl mb-6 leading-tight">
              Popular Direct Mail Marketing{" "}
              <span className="font-bold">Targeting Categories</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Reach the right audience with precision. Choose from our
              high-performing targeting filters to maximize your campaign ROI.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {targetingCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl max-h-[500px] p-8 flex flex-col items-center text-center text-black shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#fff9eb] flex items-center justify-center text-[#f5a623] mb-6 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <button className="bg-[#f5a623] hover:bg-[#e09418] font-bold text-lg py-4 px-10 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(245,166,35,0.3)]">
              Contact Now <Icons.TargetingArrowRight className="text-xl" />
            </button>
          </motion.div>
        </div>
      </section>
      {data.bottomFeatureRight && (
        <div className="bg-[#0a0a0a] w-full">
          <ContentBlock
            imagePosition="right"
            image={data.bottomFeatureRight.image}
            heading={data.bottomFeatureRight.heading}
            description={data.bottomFeatureRight.subDescription}
            listItems={data.bottomFeatureRight.features}
            listColumns={2}
            listStyle="check"
            imageTheme="standard"
          />
        </div>
      )}

      {/* Expert Marketing Solutions Section */}
      {data.solutionsGrid && (
        <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase mb-6">
                Expert Marketing Solutions
              </h2>
              <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {data.solutionsGrid.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#323232] hover:bg-[#3d3d3d] transition-all duration-300 rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center shadow-2xl"
                >
                  <div className="bg-white/10 p-6 rounded-[50%] flex items-center justify-center mb-8">
                    {iconMap[solution.icon]}
                  </div>
                  <h3 className="font-bold text-xl md:text-2xl text-white uppercase tracking-wider mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-[#cccccc] text-sm md:text-base leading-relaxed">
                    {solution.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vertical Timeline Section */}
      {data.verticalTimeline && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/20 transform md:-translate-x-1/2 z-0"></div>

            <div className="relative z-10 flex flex-col gap-10 md:gap-16">
              {data.verticalTimeline.map((item, index) => {
                const isLeft = item.align === "left";
                const IconComponent = Icons[item.icon] || Icons.ListBullets;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-start md:items-center w-full relative ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Timeline Node (Center) */}
                    <div
                      className="absolute left-[30px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-[42px] md:h-[42px] rounded-full z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)] text-white font-bold text-base border-2 border-white/20"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.step}
                    </div>

                    {/* Card Container */}
                    <div
                      className={`w-full md:w-[45%] pl-[70px] md:pl-0 ${
                        isLeft ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div
                        className={`rounded-[20px] p-6 md:p-8 shadow-xl transition-transform duration-300 hover:-translate-y-1 relative flex flex-col items-start text-left ${
                          isLeft
                            ? "md:items-end md:text-right"
                            : "md:items-start md:text-left"
                        }`}
                        style={{ backgroundColor: item.bgColor }}
                      >
                        {/* Icon */}
                        <div className="mb-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <IconComponent
                            className="text-[20px]"
                            style={{ color: item.color }}
                          />
                        </div>
                        {/* Content */}
                        <h3
                          className="font-bold text-sm md:text-[15px] uppercase tracking-wider mb-2"
                          style={{ color: "#111827" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-[14px] leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
