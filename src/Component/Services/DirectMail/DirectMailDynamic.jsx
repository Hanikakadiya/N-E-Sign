import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../Icons/icons";
import { motion } from "framer-motion";

export default function DirectMailDynamic({
  heroHeading,
  breadcrumbText = "Direct Mailing",
  imagePosition = "left",
  image,
  heading,
  description,
  listItems = [],
  listColumns = 2,
  listStyle = "check",
  secondaryImagePosition,
  secondaryImage,
  secondaryHeading,
  secondaryDescription,
  secondaryListItems = [],
  secondaryListColumns = 2,
  secondaryListStyle = "check",
  imageTheme = "leaf",
  secondaryImageTheme = "standard",
  benefitsData,
  children,
}) {
  return (
    <section className="w-full min-h-screen font-['Inter',sans-serif]">
      {/* The Wave Background */}
      <div className="absolute w-full z-0 top-25 max-xl:hidden">
        <img
          src="/Image/Services/DirectMail/Shape.png"
          alt="Wave Background"
          className="w-full object-cover min-h-[100px]"
        />
      </div>
      {/* Hero Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full pt-5 md:pt-16 md:pb-32 flex flex-col items-center text-center z-10 px-4 "
      >
        <h1 className="text-3xl md:text-5xl lg:text-[56px] mb-6 font-poppins font-bold leading-tight tracking-wide">
          {heroHeading || heading}
        </h1>

        {/* Breadcrumb */}
        <p className="flex justify-center gap-2 items-center border border-[#ffffff33] w-max px-5 h-[34px] rounded-full text-white mx-auto backdrop-blur-sm">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
          >
            <span>
              <Icons.fullhome className="w-[12px] h-[12px] text-current" />
            </span>
            <span className="text-[12px] md:text-[13px] font-light">Home</span>
          </Link>
          <span className="text-[12px] md:text-[13px] text-[var(--color-gray)]">
            •
          </span>
          <span className="text-[12px] md:text-[13px] font-light">
            {breadcrumbText}
          </span>
        </p>
      </motion.div>

      {/* Primary Content Section */}
      <ContentBlock
        imagePosition={imagePosition}
        image={image}
        heading={heading}
        description={description}
        listItems={listItems}
        listColumns={listColumns}
        listStyle={listStyle}
      />

      {/* Secondary Content Section (Optional) */}
      {secondaryHeading && (
        <ContentBlock
          imagePosition={secondaryImagePosition || "right"}
          image={secondaryImage}
          heading={secondaryHeading}
          description={secondaryDescription}
          listItems={secondaryListItems}
          listColumns={secondaryListColumns}
          listStyle={secondaryListStyle}
          imageTheme={secondaryImageTheme}
        />
      )}

      {/* Custom Page Sections */}
      {children && <div className="relative z-10 w-full mt-20">{children}</div>}

      {/* Benefits Section (Top Heading, Overlapping Images, Bottom Text) */}
      {benefitsData && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 mt-10 relative z-10"
        >
          <div className="mb-12">
            <h2 className="text-[32px] md:text-[40px] font-bold mb-4 leading-tight text-white">
              {benefitsData.heading}
            </h2>
            <p className="text-[15px] md:text-[16px] text-white/80 leading-relaxed">
              {benefitsData.subDescription}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Text Left */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                {benefitsData.features?.map((f, i) => (
                  <div
                    key={i}
                    className="border-l-[3px] border-[var(--color-primary)] pl-4"
                  >
                    <p className="text-[15px] md:text-[16px] leading-relaxed">
                      {typeof f === "string" ? (
                        <span className="text-white">{f}</span>
                      ) : (
                        <>
                          <span className="font-bold text-white mr-1">
                            {f.title}
                          </span>
                          <span className="text-white/80">{f.desc}</span>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Images Right */}
            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 mt-10 lg:mt-0">
              <img
                src={benefitsData.imageTop}
                alt="Benefit"
                className="w-full sm:w-[80%] lg:w-[90%] rounded-[24px] shadow-2xl object-cover"
              />
              <img
                src={benefitsData.imageBottom}
                alt="Benefit"
                className="w-full sm:w-[80%] lg:w-[90%] rounded-[24px] shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Bottom Text */}
          {benefitsData.bottomDescription && (
            <div className="w-full mt-16">
              <p className="text-[15px] md:text-[16px] text-white/80 leading-relaxed">
                {benefitsData.bottomDescription}
              </p>
            </div>
          )}
        </motion.div>
      )}
    </section>
  );
}

// Reusable Content Block Component
export const ContentBlock = ({
  imagePosition,
  image,
  heading,
  description,
  listItems = [],
  listColumns = 2,
  listStyle = "check",
  imageTheme = "leaf",
}) => {
  const isLeaf = imageTheme === "leaf";

  // Triangle Positioning & Shape
  let trianglePos = "";
  let triangleClip = "";
  if (isLeaf) {
    // Leaf theme: Triangle at BOTTOM OUTER corner
    trianglePos =
      imagePosition === "left" ? "bottom-0 left-0" : "bottom-0 right-0";
    triangleClip =
      imagePosition === "left"
        ? "polygon(0 0, 0% 100%, 100% 100%)"
        : "polygon(100% 0, 0% 100%, 100% 100%)";
  } else {
    // Standard theme: Triangle at TOP OUTER corner
    trianglePos = imagePosition === "left" ? "top-0 left-0" : "top-0 right-0";
    triangleClip =
      imagePosition === "left"
        ? "polygon(0 0, 100% 0, 0 100%)"
        : "polygon(0 0, 100% 0, 100% 100%)";
  }

  // Image Shape
  let imageShape = "";
  if (isLeaf) {
    imageShape =
      imagePosition === "left"
        ? "rounded-tl-[450px] rounded-tr-[32px] rounded-bl-[450px] rounded-br-[32px]"
        : "rounded-tr-[450px] rounded-tl-[32px] rounded-br-[450px] rounded-bl-[32px]";
  } else {
    imageShape = "rounded-[32px]";
  }

  return (
    <div className="relative z-10 container mx-auto px-4 md:px-8 pb-20 pt-16 top-30">
      <div
        className={`flex flex-col ${imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center lg:items-start gap-12 lg:gap-20`}
      >
        {/* Left/Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: imagePosition === "left" ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={`w-full lg:w-5/12 relative flex justify-center ${imagePosition === "left" ? "lg:justify-start" : "lg:justify-end"}`}
        >
          {/* Sparkles (Only for Leaf Theme) */}
          {isLeaf && (
            <img
              src="/Image/Services/DirectMail/DirectMail-EDDM-Star-Vector.png"
              alt="Star Vector"
              className={`absolute z-20 w-[110px] h-[110px] object-contain pointer-events-none ${
                imagePosition === "left" ? " " : "-top-4 -right-4 lg:-right-6"
              }`}
            />
          )}

          {/* Colored Corner Triangle */}
          <div
            className={`absolute w-[110px] h-[110px] bg-[var(--color-primary)] z-20 pointer-events-none rounded-[5px] ${trianglePos}`}
            style={{ clipPath: triangleClip }}
          ></div>

          {/* Image Container */}
          <div
            className={`w-full max-w-[600px] aspect-[4/5] sm:h-[551px] overflow-hidden relative z-0 ${imageShape}`}
          >
            {image && (
              <img
                src={image}
                alt={heading}
                className="w-full h-full object-cover relative"
              />
            )}
          </div>
        </motion.div>

        {/* Right/Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: imagePosition === "left" ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-7/12 flex flex-col pt-4 lg:pt-10"
        >
          <h2 className="text-[32px] md:text-4xl lg:text-[48px] font-bold leading-[1.2] mb-6 text-white font-poppins">
            {heading}
          </h2>
          <p className="text-[16px] md:text-[24px] text-white/80 leading-relaxed mb-10 font-normal whitespace-pre-line">
            {description}
          </p>

          {/* List Items */}
          {listItems && listItems.length > 0 && (
            <div
              className={`grid grid-cols-1 ${listColumns === 2 ? "sm:grid-cols-2" : ""} gap-y-4`}
            >
              {listItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {listStyle === "check" ? (
                    <div className="mt-1 flex-shrink-0 text-[var(--color-primary)]">
                      <Icons.Check className="w-[18px] h-[18px]" />
                    </div>
                  ) : (
                    <div className="mt-2.5 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                    </div>
                  )}
                  <span className="text-[15px] lg:text-[20px] text-white/90 font-light leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
