import React from "react";

interface ColumnHeader {
  text: string;
  className?: string;
}

interface RowItem {
  text: string;
  width: string;
  className?: string;
}

interface Tag {
  text: string;
  color: "green" | "pink";
}

interface DataRow {
  items: RowItem[];
  tag: Tag;
  hasBorder?: boolean;
}

interface DataPanelProps {
  title: string;
  titleColor?: string;
  headers: ColumnHeader[];
  rows: DataRow[];
  className?: string;
}

export function DataPanel({
  title,
  titleColor = "#D9D9D9",
  headers,
  rows,
  className = "",
}: DataPanelProps) {
  return (
    <div
      className={`relative w-full max-w-[420px] mx-auto ${className}`}
      style={{ minWidth: 0 }}
    >
      {/* Title */}
      <div className="mb-1.5">
        <h3
          className={`font-dm-sans font-light text-base leading-tight mb-2 flex items-center`}
          style={{ color: titleColor }}
        >
          {title}
          {/* Purple circle SVG after the title */}
          <span className="ml-1.5">
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="#A700FF" />
            </svg>
          </span>
        </h3>

        <div className="flex px-2 text-[10px] md:text-xs font-dm-sans font-medium text-[#888888] mb-1 w-full whitespace-nowrap overflow-x-auto gap-2">
          {headers.map((item, index) => (
            <span
              key={index}
              className={`basis-0 grow font-dm-sans font-light text-[10px] md:text-xs leading-tight text-[#D9D9D9] text-center truncate ${
                item.className || ""
              }`}
              style={{ minWidth: 0 }}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, index) => (
        <div
          key={index}
          className={`relative w-full bg-[rgba(217,217,217,0.1)] rounded-[30px] flex items-center px-2 hover:bg-[rgba(217,217,217,0.15)] transition-colors cursor-pointer${
            index === rows.length - 1 ? "" : " mb-[8px]"
          }${row.hasBorder ? " border border-[#D9D9D9]" : ""}`}
          style={{ fontSize: "10px", whiteSpace: "nowrap", height: "60px" }}
        >
          {row.items.map((item, idx) => (
            <span
              key={idx}
              className={`w-1/4 font-dm-sans font-light text-[10px] md:text-xs lg:text-sm leading-tight text-[#D9D9D9] truncate text-center ${
                item.className || ""
              }`}
            >
              {item.text}
            </span>
          ))}
          <span
            className={`w-1/4 font-ibm-plex-sans font-normal text-[10px] md:text-xs lg:text-sm leading-tight ${
              row.tag.color === "green" ? "text-[#B0FFA0]" : "text-[#FFA0AC]"
            } whitespace-nowrap text-center`}
          >
            {row.tag.text}
          </span>
        </div>
      ))}
    </div>
  );
}

interface DataRowProps {
  items: RowItem[];
  tag: Tag;
  hasBorder?: boolean;
  isLast?: boolean;
  colCount?: number;
}

function DataRow({
  items,
  tag,
  hasBorder = false,
  isLast = false,
  colCount = 0,
}: DataRowProps) {
  const tagColorClass =
    tag.color === "green" ? "text-[#B0FFA0]" : "text-[#FFA0AC]";

  return (
    <div
      className={`relative w-full bg-[rgba(217,217,217,0.1)] rounded-[30px] flex items-center px-2 hover:bg-[rgba(217,217,217,0.15)] transition-colors cursor-pointer${
        isLast ? "" : " mb-[8px]"
      }${hasBorder ? " border border-[#D9D9D9]" : ""}`}
      style={{
        minWidth: 0,
        fontSize: "10px",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {items.map((item, index) => (
        <span
          key={index}
          className={`basis-0 grow font-dm-sans font-light text-[10px] md:text-xs leading-tight text-[#D9D9D9] text-center truncate ${
            item.className || ""
          }`}
          style={{ minWidth: 0 }}
        >
          {item.text}
        </span>
      ))}
      <span
        className={`basis-0 grow font-ibm-plex-sans font-normal text-[10px] md:text-xs leading-tight ${tagColorClass} text-center whitespace-nowrap`}
      >
        {tag.text}
      </span>
    </div>
  );
}
