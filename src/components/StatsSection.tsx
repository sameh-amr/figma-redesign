import React from "react";
export default function StatsSection() {
  // Top row stats
  const topRowStats = [
    { number: "99G", label: "Lorem ipsum" },
    { number: "99G", label: "Lorem ipsum" },
    { number: "99G", label: "Lorem ipsum" },
    { number: "99G", label: "Lorem ipsum" },
  ]

  // Bottom row stats
  const bottomRowStats = [
    { number: "9999", label: "Lorem ipsum" },
    { number: "999", label: "Lorem ipsum" },
    { number: "999", label: "Lorem ipsum" },
    { number: "9999", label: "Lorem ipsum" },
  ]

  return (
    <section className=" relative w-full bg-[#222222] py-14 md:py-20 lg:py-24">
      <div className="container max-w-[1680px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[100px]">
        {/* Section Title - Centered */}
        <h2 className=" containerfont-dm-sans font-extralight text-xl md:text-2xl lg:text-3xl leading-tight text-[#D9D9D9] text-center mx-auto mb-3">
          Lorem ipsum eu semper sed urna in.
        </h2>

        {/* Description paragraph - Centered */}
        <p className="container font-ibm-plex-sans font-light text-xs md:text-sm lg:text-base leading-relaxed text-[#D9D9D9] text-center mx-auto mb-10 md:mb-16">
          Lorem ipsum dolor sit amet consectetur. Tortor egestas at pulvinar amet tortor. Eu non tristique faucibus
          venenatis fringilla. Sit turpis consectetur lobortis commodo sit lacus tellus sed. Ut arcu pellentesque diam
          dolor. Amet vestibulum nullam dolor phasellus quam integer. Placerat sed lacus nulla a. Malesuada.
        </p>

        {/* Top row stats - 2 per row on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {topRowStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="font-dm-sans font-light text-3xl md:text-4xl lg:text-5xl leading-none text-[#86A0FF] mb-1">
                {stat.number}
              </span>
              <span className="font-ibm-plex-sans font-light text-sm md:text-base text-[#D9D9D9]">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom row stats - 2 per row on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {bottomRowStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="font-dm-sans font-light text-3xl md:text-4xl lg:text-5xl leading-none text-[#86A0FF] mb-1">
                {stat.number}
              </span>
              <span className="font-ibm-plex-sans font-light text-sm md:text-base text-[#D9D9D9]">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center">
          <h3 className="font-dm-sans font-light text-lg md:text-xl lg:text-2xl text-[#86A0FF]">
            + Lorem ipsum dolor sit
          </h3>
        </div>
      </div>
    </section>
  )
}
