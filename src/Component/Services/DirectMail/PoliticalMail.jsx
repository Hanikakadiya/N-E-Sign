import React, { useEffect } from "react";

export default function PoliticalMail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <h1 className="text-white text-3xl font-poppins">Political Mail</h1>
    </div>
  );
}
