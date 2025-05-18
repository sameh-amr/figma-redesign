import React from "react";
interface ShowcaseRowProps {
  title: string
  description: string
  highlightedText?: string
  imageSrc: string
  imageAlt: string
  imageOnRight: boolean
}

export function ShowcaseRow({
  title,
  description,
  highlightedText,
  imageSrc,
  imageAlt,
  imageOnRight,
}: ShowcaseRowProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
      {/* Image - Always first on mobile */}
      <div className={`${imageOnRight ? "lg:order-2" : "lg:order-1"} order-1`}>
        <div
          className="overflow-hidden rounded-[16px] mx-auto relative"
          style={{
            width: "100%",
            maxWidth: "675px",
            height: "300px",
          }}
        >
          {/* Image glow effect */}
          <div
            className="absolute inset-0 opacity-30 z-0"
            style={{
              background: "radial-gradient(circle at center, rgba(134, 160, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
            }}
          ></div>

          <img
            src={imageSrc || "/images/placeholder.png"}
            alt={imageAlt}
            className="w-full h-full object-cover relative z-10"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/images/placeholder.png"
            }}
          />
        </div>
      </div>

      {/* Text Content - Always second on mobile */}
      <div className={`${imageOnRight ? "lg:order-1" : "lg:order-2"} order-2 flex flex-col items-center text-center lg:items-start lg:text-left mb-8`}>
        <h3 className="font-dm-sans font-extralight md:font-extralight lg:font-extralight font-bold text-[22px] md:text-[32px] lg:text-[40px] leading-tight text-[#86A0FF] mb-3">{title}</h3>
        <p className="font-dm-sans font-light text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed text-[#D9D9D9] mb-3">
          {description}
        </p>
        {highlightedText && (
          <p
            className="font-dm-sans font-light text-lg md:text-xl leading-tight text-[#86A0FF]"
            style={{ maxWidth: "358px" }}
          >
            {highlightedText}
          </p>
        )}
      </div>
    </div>
  )
}
