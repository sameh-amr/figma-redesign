import React from "react";
import { DataPanel } from "./ui/DataPanel";

export default function HeroRightPanel() {
  // First panel data
  const firstPanelData = {
    title: "Lorem ipsum craslor",
    titleColor: "#86A0FF",
    headers: [
      { text: "Lorem ipsum" },
      { text: "Volutpat" },
      { text: "Lorem ipsum" },
      { text: "" },
    ],
    rows: [
      {
        items: [
          { text: "Lorem ipsum feugiat", width: "w-[201px]" },
          { text: "Sid", width: "w-[53px]" },
          { text: "Lorem ipsum", width: "w-[212px]" },
        ],
        tag: { text: "Sed", color: "green" },
        hasBorder: true,
      },
      {
        items: [
          { text: "Lorem elementum", width: "w-[201px]" },
          { text: "Dui", width: "w-[53px]" },
          { text: "Lorem ipsum", width: "w-[212px]" },
        ],
        tag: { text: "Lorem", color: "pink" },
      },
      {
        items: [
          { text: "Lorem ipsum", width: "w-[201px]" },
          { text: "Sed", width: "w-[53px]" },
          { text: "Lorem ipsum", width: "w-[212px]" },
        ],
        tag: { text: "Mattis", color: "pink" },
      },
    ],
  };

  // Second panel data
  const secondPanelData = {
    title: "Lorem ipsum et jeis eidklk",
    titleColor: "#86A0FF",
    headers: [
      { text: "Donec" },
      { text: "Senectus" },
      { text: "Lorem ipsum" },
      { text: "" },
    ],
    rows: [
      {
        items: [
          { text: "Amet", width: "w-[129px]" },
          { text: "Neque", width: "w-[83px]" },
          { text: "Lorem parturient", width: "w-[212px]" },
        ],
        tag: { text: "Sed", color: "green" },
        hasBorder: true,
      },
      {
        items: [
          { text: "Adipiscing", width: "w-[129px]" },
          { text: "Ac", width: "w-[53px]" },
          { text: "Pellentesque", width: "w-[212px]" },
        ],
        tag: { text: "Vitae", color: "pink" },
      },
      {
        items: [
          { text: "Amet", width: "w-[129px]" },
          { text: "In", width: "w-[53px]" },
          { text: "Lorem suspendisse", width: "w-[212px]" },
        ],
        tag: { text: "Auctor", color: "pink" },
      },
    ],
  };

  return (
    <div className="flex flex-col space-y-8">
      <DataPanel {...firstPanelData} />
      <DataPanel {...secondPanelData} />
    </div>
  );
}
