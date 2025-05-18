import React from "react";

import { useRef, useState, useEffect, type TouchEvent } from "react"

export default function PricingSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(3)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Pricing cards data
  const pricingCards = [
    {
      title: "Aliquam",
      price: "$99",
      period: "/month",
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit diam justo lobortis non morbi aliquet lectus feugiat. Pellentesque eget malesuada quam vitae odio. Pellentesque.",
      buttonText: "Lorem ipsum",
      buttonStyle: "primary",
    },
    {
      title: "Duis",
      price: "$999",
      period: "/month",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus lorem nec porttitor amet aliquet pulvinar elementum dictum. Dolor eu consectetur tincidunt.",
      buttonText: "Lorem ipsum",
      buttonStyle: "primary",
    },
    {
      title: "Vestibulum",
      price: "Adipiscing",
      period: "",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui porta mattis nec ipsum. Euismod pharetra in cursus fermentum. Nulla aliquet nulla in tincidunt aliquet fames. Varius habitant.",
      buttonText: "Lorem ipsum gravida",
      buttonStyle: "secondary",
    },
  ]

  // Slide to next card
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0)
    }
  }

  // Slide to previous card
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    } else {
      setCurrentSlide(totalSlides - 1)
    }
  }

  // Update slider position when currentSlide changes
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth / totalSlides
      sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`
    }
  }, [currentSlide, totalSlides])

  // Handle touch start
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  // Handle touch move
  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  // Handle touch end
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <section className=" relative w-full bg-black py-14 md:py-20 lg:py-24">
      <div className="container max-w-[1680px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[100px]">
        {/* Small heading - Single row */}
        <p className="text-center text-[#86A0FF] font-dm-sans font-bold text-[11px] md:text-[15px] lg:text-[20px] mb-2">Lorem ipsum</p>

        {/* Large heading - Single row */}
        <h2 className="text-center font-dm-sans font-extralight text-[28px] md:text-[40px] lg:text-[58px] text-[#D9D9D9] mb-8 md:mb-14">
          Lorem ipsum egestas nulla
        </h2>

        {/* Pricing cards - Grid on desktop, slider on mobile */}
        <div className="container hidden md:grid md:grid-cols-3 gap-4 lg:gap-6">
          {/* Desktop view - Grid */}
          {pricingCards.map((card, index) => (
            <div key={index} className="container bg-[#0f0f0f] border border-[#333333] rounded-2xl p-6 flex flex-col sm:min-h-[391px] md:min-h-[520px] lg:min-h-[400px] w-[80%] max-w-[80%]">
              <h3 className="text-[#86A0FF] font-dm-sans font-[700] text-[24px] md:text-[30px] lg:text-[36px] mb-2">{card.title}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-[#D9D9D9] font-dm-sans font-bold text-[28px] md:text-[34px] lg:text-[40px] !font-bold">{card.price}</span>
                {card.period && (
                  <span className="text-[#D9D9D9] font-dm-sans font-light text-[20px] md:text-[24px] lg:text-[30px] ml-1">{card.period}</span>
                )}
              </div>
              <p className="text-[#D9D9D9] font-ibm-plex-sans font-light text-xs leading-relaxed mb-auto">
                {card.description}
              </p>
              <button
                className={`mt-6 w-full py-2 px-4 font-roboto-mono font-bold text-xs rounded-full ${
                  card.buttonStyle === "primary"
                    ? "bg-[#86A0FF] text-black hover:bg-[#a0b4ff]"
                    : "bg-transparent text-[#D9D9D9] border border-[#D9D9D9] hover:bg-[#333333]"
                } transition-colors`}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Mobile view - Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ width: `${totalSlides * 100}%` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {pricingCards.map((card, index) => (
                <div key={index} className="w-full flex justify-center px-2 lg:h-[300px]">
                  <div className="bg-[#0f0f0f] border border-[#333333] rounded-2xl p-6 flex flex-col w-[70%] mx-auto min-h-[200px] ">
                    <h3 className="text-[#86A0FF] font-dm-sans text-lg mb-2">{card.title}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-[#D9D9D9] font-dm-sans font-extralight text-2xl">{card.price}</span>
                      {card.period && (
                        <span className="text-[#D9D9D9] font-dm-sans font-light text-base ml-1">{card.period}</span>
                      )}
                    </div>
                    <p className="text-[#D9D9D9] font-ibm-plex-sans font-light text-xs leading-relaxed mb-auto">
                      {card.description}
                    </p>
                    <button
                      className={`mt-6 w-full py-2 px-4 font-roboto-mono font-bold text-xs rounded-full ${
                        card.buttonStyle === "primary"
                          ? "bg-[#86A0FF] text-black hover:bg-[#a0b4ff]"
                          : "bg-transparent text-[#D9D9D9] border border-[#D9D9D9] hover:bg-[#333333]"
                      } transition-colors`}
                    >
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-[#86A0FF]" : "bg-[#333333]"
                } transition-colors`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
