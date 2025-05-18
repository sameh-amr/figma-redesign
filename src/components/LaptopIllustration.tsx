import React from "react";
import { BlurEllipse } from "./ui/BlurEllipse"

export default function LaptopIllustration() {
  return (
    <div className=" relative w-full">
      {/* Container for the laptop and ellipse with proper positioning */}
      <div className="container relative mx-auto w-full max-w-[1200px]  sm:h-[350px] md:h-[450px] lg:h-[550px]">
        {/* Single blurred ellipse positioned exactly behind the laptop */}
        <BlurEllipse
          position={{ left: "50%", top: "50%" }}
          color="rgba(134, 160, 255, 0.35)"
          width="80%"
          height="60%"
          blurAmount="150px"
          className="z-0 transform -translate-x-1/2 -translate-y-1/2 absolute"
        />

        {/* Laptop image */}
        <img
          src="/images/laptop-dashboard.png"
          alt="Laptop dashboard"
          className="w-full h-full object-contain relative z-10"
          loading="lazy"
        />
      </div>

      {/* Text under the laptop with the specified CSS */}
      <div className="container relative mx-auto mt-0 h-[80px] md:h-[120px] lg:h-[156px] flex items-center justify-center" style={{ maxWidth: "1008px" }}>
        <h2
          className="font-dm-sans font-extralight text-[28px] lg:text-[58px] text-[#86A0FF] text-center mx-auto"
        >
          Lorem ipsum cursus proin
        </h2>
      </div>
    </div>
  )
}
