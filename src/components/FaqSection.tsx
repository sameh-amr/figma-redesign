import React from "react";
import { useState } from "react"
import { AccordionSection } from "./ui/AccordionSection"
import { MusicIcon, WifiIcon, BellIcon, GlobeIcon } from "./ui/icons/FirstSectionIcons"
import { HeartbeatIcon, CodeIcon, SearchIcon, StarIcon } from "./ui/icons/ThirdSectionIcons"
import { StackIcon, ThermometerIcon, MapIcon, TrendingUpIcon } from "./ui/icons/FourthSectionIcons"

export default function FaqSection() {
  // State for expanded accordion items
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  })

  // Toggle function for accordion items
  const toggleItem = (itemKey: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }))
  }

  // Common text content
  const commonRightColumnText =
    "Lorem ipsum dolor sit amet consectetur. At pharetra vitae consectetur ultricies duis et. Ac eget sapien felis facilisi sit eget nisl duis vel. Ac ultrices aenean urna arcu aenean urna arcu."
  const commonAttribution = "— Lorem ipsum dolor sit amet, consectetur"

  // First section icons
  const firstSectionIcons = [
    {
      icon: <MusicIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Tincidunt blandit pulvinar elementum et. Lectus ut.",
    },
    {
      icon: <WifiIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Amet lacinia ac consequatur.",
    },
    {
      icon: <BellIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Purus est massa.",
    },
    {
      icon: <GlobeIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Et vitae ut at eleifend eget eu malesuada at.",
    },
  ]

  // Second section - using the same icons as first for now, as per your request to make them all the same
  const secondSectionIcons = [
    {
      icon: <MusicIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Platea odio porta.",
    },
    {
      icon: <WifiIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Magna accumsan et.",
    },
    {
      icon: <BellIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Dolor integer.",
    },
    {
      icon: <GlobeIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Magna eget habitant.",
    },
  ]

  // Third section icons
  const thirdSectionIcons = [
    {
      icon: <HeartbeatIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Platea odio porta.",
    },
    {
      icon: <CodeIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Magna accumsan et.",
    },
    {
      icon: <SearchIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Dolor integer.",
    },
    {
      icon: <StarIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Magna eget habitant.",
    },
  ]

  // Fourth section icons
  const fourthSectionIcons = [
    {
      icon: <StackIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Platea odio porta.",
    },
    {
      icon: <ThermometerIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Magna accumsan et.",
    },
    {
      icon: <MapIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Dolor integer.",
    },
    {
      icon: <TrendingUpIcon />,
      text: "Lorem ipsum dolor sit amet consectetur. Magna eget habitant.",
    },
  ]

  return (
    <section className=" relative w-full bg-black py-14 md:py-20 lg:py-24">
      <div className="container max-w-[1680px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[100px]">
        {/* First Accordion Item */}
        <AccordionSection
          title="Lorem ipsum mauris"
          isExpanded={expandedItems.item1}
          toggleExpanded={() => toggleItem("item1")}
          subtitle="Lorem ipsum dolor sit amet consectetur."
          leftColumnText="Lorem ipsum dolor sit amet consectetur. Purus leo aliquet in mauris. Lorem integer cras elementum purus arcu diam sit arcu eget. Id eleifend felis platea consequat tempus eget. Est lacus in luctus ipsum. Ac est sit nec orci odio visus laoreet."
          rightColumnText={commonRightColumnText}
          attribution={commonAttribution}
          icons={firstSectionIcons}
        />

        {/* Second Accordion Item */}
        <AccordionSection
          title="Lorem ipsum etiam"
          isExpanded={expandedItems.item2}
          toggleExpanded={() => toggleItem("item2")}
          subtitle="Lorem ipsum dolor sit amet consectetur lectus."
          leftColumnText="Lorem ipsum dolor sit amet consectetur. Ut fermentum ac augue diam consectetur. Amet tincidunt at id odio ut ac. Scelerisque nascetur massa sit mattis ultrices bibendum vitae elit. Ultrices orci tempor adipiscing dignissim pellentesque a. Enim tellus ut nam quis rhoncus non ullamcorper consequat."
          rightColumnText={commonRightColumnText}
          attribution={commonAttribution}
          icons={secondSectionIcons}
        />

        {/* Third Accordion Item */}
        <AccordionSection
          title="Lorem ipsum quis venenatis tortor"
          isExpanded={expandedItems.item3}
          toggleExpanded={() => toggleItem("item3")}
          subtitle="Lorem ipsum dolor sit amet consectetur lectus."
          leftColumnText="Lorem ipsum dolor sit amet consectetur. At tortor sit a interdum parturient odio vitae tempus turpis. In dui pellentesque sit nam. Lectus vel euismod leo sagittis donec ipsum vitae id. Lacus porttitor dolor cursus pharetra euismod platea sed. Ultrices mattis risus vestibulum rhoncus fringilla."
          rightColumnText={commonRightColumnText}
          attribution={commonAttribution}
          icons={thirdSectionIcons}
        />

        {/* Fourth Accordion Item */}
        <AccordionSection
          title="Lorem ipsum dolor sit amet"
          isExpanded={expandedItems.item4}
          toggleExpanded={() => toggleItem("item4")}
          subtitle="Lorem ipsum dolor sit amet consectetur lectus."
          leftColumnText="Lorem ipsum dolor sit amet consectetur. At tortor sit a interdum parturient odio vitae tempus turpis. In dui pellentesque sit nam. Lectus vel euismod leo sagittis donec ipsum vitae id. Lacus porttitor dolor cursus pharetra euismod platea sed. Ultrices mattis risus vestibulum rhoncus fringilla."
          rightColumnText={commonRightColumnText}
          attribution={commonAttribution}
          icons={fourthSectionIcons}
        />
      </div>
    </section>
  )
}
