import React from "react";

interface BlurEllipseProps {
  position: {
    left: string
    top: string
  }
  width: string
  height: string
  color: string
  blurAmount?: string
  className?: string
}

export function BlurEllipse({
  position,
  width,
  height,
  color,
  blurAmount = "211.05px",
  className = "",
}: BlurEllipseProps) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: position.left,
        top: position.top,
        width: width,
        height: height,
        background: color,
        filter: `blur(${blurAmount})`,
        zIndex: 0,
      }}
      aria-hidden="true"
    ></div>
  )
}
