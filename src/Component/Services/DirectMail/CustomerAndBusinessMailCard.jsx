import React, { useEffect } from "react";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic from "./DirectMailDynamic";

export default function CustomerAndBusinessMailCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = DirectMailData.find(c => c.id === "4");
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
          benefitsData={data.stackedFeatureLeft || data.howItWorks || data.benefitsLeft}
        />
      )}
    </>
  );
}
