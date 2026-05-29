import React from "react";
import { boxSignData } from "../../../../Data/BoxSign";
import SignageMasonryLayout from "../../../../SignageMasonryLayout";

export default function BoxSigns() {
  return <SignageMasonryLayout data={boxSignData} activeId="box-signs" />;
}
