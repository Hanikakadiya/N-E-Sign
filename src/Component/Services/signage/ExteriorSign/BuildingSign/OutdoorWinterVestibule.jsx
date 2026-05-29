import React from "react";
import SignageMasonryLayout from "../../../../SignageMasonryLayout";
import { outdoorWinterVestibuleData } from "../../../../Data/OutdoorWinterVestibuleData";

export default function OutdoorWinterVestibule() {
    return (
        <div>
            <SignageMasonryLayout data={outdoorWinterVestibuleData} activeId="outdoor-vestibule" />
        </div>
    );
}
