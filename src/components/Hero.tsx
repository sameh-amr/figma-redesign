import React from "react";
import { PrimaryButton } from "./ui/PrimaryButton";
import { BlurEllipse } from "./ui/BlurEllipse";
import HeroRightPanel from "./HeroRightPanel";
import LaptopIllustration from "./LaptopIllustration";

export default function Hero() {
  // Bullet point text data
  const bulletPoints = [
    "Lorem ipsum dolor sit amet consectetur. Ut orci vel morbi eu. Integer nunc vestibulum.",
    "Lorem ipsum dolor sit amet consectetur. Viverra justo neque a fermentum eu. In.",
    "Lorem ipsum dolor sit amet consectetur. Faucibus quis maecenas enim congue.",
    "Lorem ipsum dolor sit amet consectetur. Lacus viverra nisl tortor dui. Semper tincidunt.",
  ];

  return (
    <section className=" relative w-full py-10 md:py-14 lg:py-16 bg-black overflow-hidden">
      <div className="  max-w-[1680px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[100px]">
        {/* Mobile-friendly grid layout */}
        <div className=" flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left side content - Increased font size and width */}
          <div className="relative w-full order-1" id="hero-left-col">
            <h1 className="font-dm-sans font-extralight text-[40px] md:text-[52px] lg:text-[64px] leading-tight text-[#D9D9D9] mb-4 md:mb-5 max-w-[700px]">
              Lorem ipsum habitant a rhoncus etiam.
            </h1>
            <p className="font-ibm-plex-sans font-light text-[14px] md:text-[17px] lg:text-[20px] leading-relaxed text-[#D9D9D9] mb-5 md:mb-6 max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur. Sapien vitae tristique
              ultrices ultrices. Aliquam suscipit venenatis sed dignissim.
              Ultrices amet neque integer rhoncus pellentesque habitant amet
              risus. Aliquet vitae feugiat tristique vulputate placerat morbi
              ultrices posuere turpis. Ut pellentesque enim purus sit. Et urna
              eget commodo urna blandit pellentesque etiam. Nunc ut mattis ut
              leo nibh eu massa hendrerit egestas. Parturient.
            </p>
            <PrimaryButton className="w-full sm:w-[200px] h-[36px] text-xs !bg-[#86A0FF] !text-black !font-bold">
              Lorem Ipsum
            </PrimaryButton>
            <span className="block font-ibm-plex-sans font-bold text-[14px] md:text-[17px] lg:text-[20px] text-black mt-3">
              {/* Replace this with your actual text */}
              This is the black bold text after the paragraph.
            </span>
          </div>

          {/* Right side - Data panels with ellipse - Match left height */}
          <div className=" relative z-10 w-full order-2 lg:order-2 flex flex-col h-full min-h-[420px]" id="hero-right-col">
            {/* Positioned ellipse exactly between the two panels */}
            <div className="absolute inset-0 pointer-events-none">
              <BlurEllipse
                position={{ left: "50%", top: "50%" }}
                color="rgba(131, 143, 185, 0.35)"
                width="500px"
                height="300px"
                blurAmount="150px"
                className="z-0 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="space-y-6 relative z-10 flex flex-col h-full justify-stretch min-h-full" style={{minHeight: '100%'}}>
              <HeroRightPanel />
            </div>
          </div>
        </div>

        {/* Laptop illustration section below */}
        <div className=" mt-10 md:mt-14 lg:mt-16">
          <div className="relative w-full">
            <LaptopIllustration />
          </div>

          {/* Text section below laptop */}
          <div className=" flex flex-col items-center relative">
            {/* Paragraph text */}
            <p className="font-ibm-plex-sans font-light text-[14px] md:text-[20px] lg:text-[28px] leading-relaxed text-[#D9D9D9] text-center max-w-[1013px] relative z-20 mb-8">
              Lorem ipsum dolor sit amet consectetur. Sit sit vulputate neque
              donec ultrices laoreet elit dictum dolor. Amet quisque dictum
              feugiat nunc nullam feugiat odio semper id.
            </p>

            {/* Four bullet point paragraphs - One per row on mobile */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1200px] mx-auto">
              {bulletPoints.map((text, index) => (
                <div
                  key={index}
                  className="container font-ibm-plex-sans font-light text-[13px] md:text-[16px] lg:text-[20px] leading-relaxed text-[#D9D9D9] flex"
                >
                  <span className="inline-block mr-2 md:mr-1 text-white ml-3 md:ml-0">•</span>{text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
