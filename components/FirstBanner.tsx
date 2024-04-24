import Image from "next/image";
import React from "react";

function FirstBanner() {
  return (
    <div className="bg-[url('https://www.spacex.com/static/images/backgrounds/fh_feature.jpg')] flex items-center  h-[800px] justify-center flex-col gap-2">
      <h1 className="text-8xl text-white font-bold">FALCON HEAVY</h1>
      <h2 className="text-1xl  text-white">OVER 5 MILLION LBS OF THRUST</h2>
    </div>
  );
}

export default FirstBanner;
