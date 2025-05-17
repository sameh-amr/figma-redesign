import React from "react";

interface ColumnHeader {
  text: string
  className?: string
}

interface RowItem {
  text: string
  width: string
  className?: string
}

interface Tag {
  text: string
  color: "green" | "pink"
}

interface DataRow {
  items: RowItem[]
  tag: Tag
  hasBorder?: boolean
}

interface DataPanelProps {
  title: string
  titleColor?: string
  headers: ColumnHeader[]
  rows: DataRow[]
  className?: string
}

export function DataPanel({ title, titleColor = "#D9D9D9", headers, rows, className = "" }: DataPanelProps) {
  return (
    <div className={`relative w-full max-w-[624px] mx-auto ${className}`}>
      {/* Title */}
      <div className="mb-1.5">
        <h3
          className={`font-dm-sans font-light text-base leading-tight mb-2 flex items-center`}
          style={{ color: titleColor }}
        >
          {title}
          {/* Purple circle SVG after the title */}
          <span className="ml-1.5">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill="#A700FF" />
            </svg>
          </span>
        </h3>

        {/* Headers - Using the same structure as rows */}
        <div className="flex px-4 text-xs font-dm-sans font-medium text-[#888888] mb-1">
          {rows[0].items.map((item, index) => (
            <div key={index} className={`${item.width} ${index > 0 ? "ml-8" : ""}`}>
              {headers[index]?.text || ""}
            </div>
          ))}
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, index) => (
        <DataRow
          key={index}
          items={row.items}
          tag={row.tag}
          hasBorder={row.hasBorder}
          isLast={index === rows.length - 1}
        />
      ))}
    </div>
  )
}

interface DataRowProps {
  items: RowItem[]
  tag: Tag
  hasBorder?: boolean
  isLast?: boolean
}

function DataRow({ items, tag, hasBorder = false, isLast = false }: DataRowProps) {
  const tagColorClass = tag.color === "green" ? "text-[#B0FFA0]" : "text-[#FFA0AC]"
  const rowBaseClass =
    "relative w-full h-[50px] bg-[rgba(217,217,217,0.1)] rounded-[30px] flex items-center px-4 hover:bg-[rgba(217,217,217,0.15)] transition-colors cursor-pointer"

  return (
    <div className={`${rowBaseClass} ${isLast ? "" : "mb-[8px]"} ${hasBorder ? "border border-[#D9D9D9]" : ""}`}>
      {items.map((item, index) => (
        <span
          key={index}
          className={`font-dm-sans font-light text-base leading-tight text-[#D9D9D9] ${
            index > 0 ? "ml-8" : ""
          } ${item.width} ${item.className || ""}`}
        >
          {item.text}
        </span>
      ))}
      <span className={`font-ibm-plex-sans font-normal text-xs leading-tight ${tagColorClass} ml-auto`}>
        {tag.text}
      </span>
    </div>
  )
}
