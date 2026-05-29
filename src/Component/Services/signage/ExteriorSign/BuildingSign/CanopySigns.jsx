import React from "react";
import { canopySignData } from "../../../../Data/CanopySignData";
import SignageMasonryLayout from "../../../../SignageMasonryLayout";

export default function CanopySigns() {
  return <SignageMasonryLayout data={canopySignData} activeId="canopy-signs" />;
}
