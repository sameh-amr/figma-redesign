import React from "react";

export default function Footer() {
  return (
    <footer className=" relative w-full bg-[#86A0FF] py-10 md:py-16 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-3 sm:px-4 md:px-6 flex flex-col items-center text-center relative">
        {/* Large blurred ellipse positioned behind the button */}
        <div
          className="absolute w-[994px] h-[660px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            background: "#B4C4FF",
            filter: "blur(211.05px)",
            zIndex: 0,
          }}
          aria-hidden="true"
        ></div>

        {/* Main heading - Single row */}
        <h2 className="font-dm-sans font-normal text-xl md:text-2xl lg:text-3xl leading-tight text-[#222222] mb-3 max-w-[800px] relative z-10">
          Lorem ipsum dolor sit amet consectetur.
        </h2>

        {/* Paragraph - Single row */}
        <p className="font-ibm-plex-sans font-light text-xs md:text-sm lg:text-base leading-relaxed text-[#222222] mb-6 max-w-[600px] relative z-10">
          Lorem ipsum dolor sit amet consectetur. Leo nam urna accumsan massa iaculis. Etiam convallis posuere etiam sit
          ipsum imperdiet sed vulputate ut. A sem sagittis egestas arcu viverra. Suspendisse.
        </p>

        {/* Button with white ellipse background - Single row */}
        <div className="relative mb-10 z-10 w-full flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full transform scale-110"></div>
            <button className="relative bg-white text-[#222222] font-roboto-mono font-bold text-xs rounded-full py-1.5 px-4 hover:bg-opacity-90 transition-all">
              Lorem ipsum
            </button>
          </div>
        </div>

        {/* Logo - Single row */}
        <div className="mb-10 relative z-10 w-full flex justify-center">
          <div className="flex items-center justify-center">
            <div className="mr-1.5">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="white" />
                <circle cx="14" cy="20" r="4" fill="#86A0FF" />
                <circle cx="26" cy="20" r="4" fill="#86A0FF" />
                <circle cx="20" cy="14" r="4" fill="#86A0FF" />
                <circle cx="20" cy="26" r="4" fill="#86A0FF" />
              </svg>
            </div>
            <span className="font-dm-sans font-bold text-lg text-white">Logoipsum</span>
          </div>
        </div>

        {/* First text block - Single row */}
        <div className="w-full max-w-[356px] mx-auto mb-6 relative z-10">
          <p className="font-ibm-plex-sans font-normal text-xs leading-relaxed text-[#222222] text-center">
            Lorem ipsum dolor sit amet consectetur. Nulla volutpat aliquam arcu vestibulum proin. Dictum egestas
            lobortis porttitor etiam turpis quam.
          </p>
        </div>

        {/* Second text block - Single row */}
        <div className="w-full max-w-[388px] mx-auto relative z-10">
          <p className="font-ibm-plex-sans font-normal text-xs leading-relaxed text-[#222222]">
            Lorem ipsum nunc adipiscing odio tellus turpis adipiscing.
          </p>
        </div>
      </div>
    </footer>
  )
}
