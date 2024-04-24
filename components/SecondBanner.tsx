import Image from "next/image";
import React from "react";

function SecondBanner() {
  return (
    <section className=" flex items-center  h-[180px] justify-center flex-col gap-2 w-[400px] bg-black overflow-hidden">
      <Image
        src={"https://www.spacex.com/humanspaceflight/assets/images/Earth.svg"}
        alt=""
        width={500}
        height={500}
      />
    </section>
  );
}

export default SecondBanner;
