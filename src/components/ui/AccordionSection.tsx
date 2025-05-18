import React from "react";

import type { ReactNode } from "react"

interface IconItem {
  icon: ReactNode
  text: string
}

interface AccordionSectionProps {
  title: string
  isExpanded: boolean
  toggleExpanded: () => void
  subtitle: string
  leftColumnText: string
  rightColumnText: string
  attribution: string
  icons: IconItem[]
}

export function AccordionSection({
  title,
  isExpanded,
  toggleExpanded,
  subtitle,
  leftColumnText,
  rightColumnText,
  attribution,
  icons,
}: AccordionSectionProps) {
  return (
    <div className="container">
      <button
        onClick={toggleExpanded}
        className="w-full flex justify-between items-center py-4 border-b border-[#333333] text-left focus:outline-none group"
      >
        <h2 className="font-dm-sans font-extralight text-[20px] md:text-[32px] lg:text-[48px] leading-tight text-[#D9D9D9]">
          {title}
        </h2>

        {/* Simple text plus/minus that matches the section title size */}
        <span className="font-dm-sans font-extralight text-[20px] md:text-[32px] lg:text-[48px] text-[#D9D9D9]">{isExpanded ? "−" : "+"}</span>
      </button>

      {isExpanded && (
        <div className="py-8 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column */}
            <div>
              <h3 className="font-dm-sans font-bold text-[18px] md:text-[24px] lg:text-[32px] text-[#86A0FF] mb-3">{subtitle}</h3>
              <p className="font-ibm-plex-sans font-light text-[13px] md:text-[18px] lg:text-[24px] leading-relaxed text-[#D9D9D9] mb-4">
                {leftColumnText}
              </p>
            </div>

            {/* Right column */}
            <div>
              <p className="font-dm-sans text-[20px] md:text-[28px] lg:text-[36px] leading-relaxed text-[#D9D9D9] mb-4">
                {rightColumnText}
              </p>
              <p className="font-dm-sans text-[13px] md:text-[18px] lg:text-[24px] text-[#D9D9D9] italic">
                {attribution}
              </p>
            </div>
          </div>

          {/* Four column feature section - One per row on mobile */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {icons.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Icon in its own row */}
                <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 mb-3 text-[#86A0FF] text-center w-full">{item.icon}</div>
                {/* Text in its own row */}
                <p className="font-ibm-plex-sans font-light text-[13px] md:text-[16px] lg:text-[20px] leading-relaxed text-[#D9D9D9] text-center w-full">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
