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
      imageSrc: "/images/coffee.png",
      imageAlt: "Dashboard interface",
      imageOnRight: true,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Interdum elementum convallis commodo nisi interdum sollicitudin odio. Diam in elementum lobortis semper nisl laoreet in elementum lobortis semper.",
      imageSrc: "/images/coffee.png",
      imageAlt: "Analytics interface",
      imageOnRight: false,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Interdum elementum convallis commodo nisi interdum sollicitudin odio. Diam in elementum lobortis semper nisl laoreet in elementum lobortis semper.",
      imageSrc: "/images/coffee.png",
      imageAlt: "Dashboard charts",
      imageOnRight: true,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Interdum elementum convallis commodo nisi interdum sollicitudin odio. Diam in elementum lobortis semper nisl laoreet in elementum lobortis semper.",
      imageSrc: "/images/coffee.png",
      imageAlt: "Data visualization",
      imageOnRight: false,
    },
  ]

  return (
    <section className=" relative w-full bg-[#222222] py-14 md:py-20 lg:py-24 overflow-hidden">

      <div className="container max-w-[1680px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[100px] relative z-10 flex flex-col items-center">
        <div className="flex w-full justify-center">
          <h2
            className="font-dm-sans font-extralight text-xl md:text-2xl lg:text-3xl leading-tight text-[#D9D9D9] text-center max-w-[1076px] mx-auto mb-8 md:mb-14"
          >
            Lorem ipsum urna dapibus cursus
          </h2>
        </div>

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
