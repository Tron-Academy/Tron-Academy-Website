import React from "react";

export default function PortfolioDetailCard({ title, content }) {
  return (
    <div className="inter-font bg-[#F4E3FA] rounded-lg p-3 flex flex-col gap-3">
      <h4 className="text-[40px]">{title}</h4>
      <p className="text-base">{content}</p>
    </div>
  );
}
