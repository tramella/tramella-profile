"use client";

import { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({
  text,
  children,
  position = "top",
}: TooltipProps) {
  const basePos =
    position === "top"
      ? "bottom-full left-1/2 -translate-x-1/2 mb-3"
      : position === "bottom"
      ? "top-full left-1/2 -translate-x-1/2 mt-3"
      : position === "left"
      ? "right-full top-1/2 -translate-y-1/2 mr-3"
      : "left-full top-1/2 -translate-y-1/2 ml-3";

  const arrowPos =
    position === "top"
      ? "top-full left-1/2 -translate-x-1/2"
      : position === "bottom"
      ? "bottom-full left-1/2 -translate-x-1/2"
      : position === "left"
      ? "left-full top-1/2 -translate-y-1/2"
      : "right-full top-1/2 -translate-y-1/2";

  return (
    <div className="relative inline-block group">
      {children}
      <div
        className={`absolute ${basePos} opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 z-20`}
      >
        {/* Tooltip box */}
        <div className="bg-black text-white text-xs rounded-md px-3 py-2 relative">
          {text}
          {/* Arrow */}
          <div
            className={`absolute w-3 h-3 bg-black rotate-45 ${arrowPos}`}
          />
        </div>
      </div>
    </div>
  );
}
