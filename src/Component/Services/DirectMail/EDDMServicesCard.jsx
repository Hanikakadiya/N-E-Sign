import React, { useEffect } from "react";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic from "./DirectMailDynamic";
import { Icons } from "../../Icons/icons";

export default function EDDMServicesCard() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the EDDM data from your JSON file (ID 1)
  const data = DirectMailData.find(c => c.id === "1");
  if (!data) return null;

  return (
    <div className="w-full flex flex-col pt-32 container mx-auto">
      {/* 1. This is the top Hero section, hardcoded since it's just a simple heading */}
      <div className="mx-auto px-4 md:px-8 py-12 text-center">
        <h1 className="text-4xl lg:text-[56px] mb-6 font-poppins leading-tight">
          {data.heroHeading || data.title}
        </h1>
        <p className="flex justify-center gap-[8px] items-center border border-[#243855] w-[199px] h-[30px] rounded-2xl">
          <span><Icons.fullhome className="w-[11.25px] h-[10px]" /></span>
          <span className="text-[10px]">Home</span>
          <span className="text-[10px]">Direct mailing</span>
        </p>
      </div>

      {/* 2. This is how you import and use the dynamic section you created! */}
      {data.featureLeft && (
        <DirectMailDynamic
          imagePosition="left"
          image={data.featureLeft.image}
          heading={data.featureLeft.heading}
          description={data.featureLeft.subDescription}
          listItems={data.featureLeft.features}
        />
      )}
    </div>
  );
}
