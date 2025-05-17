import React from "react";
import { ShowcaseRow } from "./ui/ShowcaseRow"
import { BlurEllipse } from "./ui/BlurEllipse"

export default function ShowcaseSection() {
  // Data for showcase rows with images from public folder
  const showcaseItems = [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Interdum elementum convallis commodo nisi interdum sollicitudin odio. Diam in elementum lobortis semper nisl laoreet in elementum lobortis semper.",
      imageSrc: "/images/dark-mode-dashboard.png",
      imageAlt: "Dashboard interface",
      imageOnRight: true,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Interdum elementum convallis commodo nisi interdum sollicitudin odio. Diam in elementum lobortis semper nisl laoreet in elementum lobortis semper.",
      imageSrc: "/images/dark-analytics-interface.png",
      imageAlt: "Analytics interface",
      imageOnRight: false,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Interdum elementum convallis commodo nisi interdum sollicitudin odio. Diam in elementum lobortis semper nisl laoreet in elementum lobortis semper.",
      imageSrc: "/images/dark-dashboard-charts.png",
      imageAlt: "Dashboard charts",
      imageOnRight: true,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Interdum elementum convallis commodo nisi interdum sollicitudin odio. Diam in elementum lobortis semper nisl laoreet in elementum lobortis semper.",
      imageSrc: "/images/data-visualization.png",
      imageAlt: "Data visualization",
      imageOnRight: false,
    },
  ]

  return (
    <section className=" relative w-full bg-[#222222] py-14 md:py-20 lg:py-24 overflow-hidden">
      {/* Background blur elements */}
      <div className="container absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
        <BlurEllipse
          position={{ left: "20%", top: "30%" }}
          color="rgba(134, 160, 255, 0.15)"
          width="500px"
          height="500px"
          className="transform -translate-x-1/2"
        />
        <BlurEllipse
          position={{ left: "80%", top: "70%" }}
          color="rgba(134, 160, 255, 0.15)"
          width="500px"
          height="500px"
          className="transform -translate-x-1/2"
        />
      </div>

      <div className="max-w-[1680px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[100px] relative z-10">
        {/* Section Title - Centered */}
        <h2
          className="font-dm-sans font-extralight text-xl md:text-2xl lg:text-3xl leading-tight text-[#D9D9D9] text-center mx-auto mb-8 md:mb-14"
          style={{ maxWidth: "1076px" }}
        >
          Lorem ipsum urna dapibus cursus
        </h2>

        {/* Showcase Rows */}
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {showcaseItems.map((item, index) => (
            <ShowcaseRow
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              imageOnRight={item.imageOnRight}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
