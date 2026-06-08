import React, { useEffect } from "react";
import DirectMailData from "../../Data/DirectMailData.json";
import DirectMailDynamic, { ContentBlock } from "./DirectMailDynamic";
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
        ></DirectMailDynamic>
      )}
    </>
  );
}
