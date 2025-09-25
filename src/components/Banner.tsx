"use client";

import { ReactNode } from "react";

interface BannerProps {
  greeting: string | ReactNode;
  title: string | ReactNode;
  className?: string;
}

export default function Banner({
  greeting,
  title,
  className = "",
}: BannerProps) {
  return (
    <div
      className={`w-full h-[200px] md:h-[385px] bg-gradient-to-r from-[#003E81] to-[#367AC4] flex flex-col justify-center items-center px-4 sm:px-8 md:px-24 lg:px-36 ${className}`}
    >
      <div className="flex flex-col justify-center items-center gap-[3px] md:gap-[5px] max-w-[647px] text-center">
        <h2 className="text-white font-medium text-lg md:text-2xl lg:text-[32px] leading-[32px] md:leading-[48px] lg:leading-[64px] tracking-[-0.25px] mb-0">
          {greeting}
        </h2>
        <h1 className="text-white font-bold text-xl md:text-3xl lg:text-[48px] leading-[32px] md:leading-[48px] lg:leading-[64px] tracking-[-0.25px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
