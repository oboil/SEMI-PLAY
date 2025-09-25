"use client";

import { useEffect, useState } from "react";
import { Settings, Package } from "lucide-react";
import Banner from "@/components/Banner";
import Service from "./service";
import Kit from "./kit";

export default function Program() {
  const [activeSection, setActiveSection] = useState("service");

  useEffect(() => {
    const handleScroll = () => {
      const serviceElement = document.getElementById("service");
      const kitElement = document.getElementById("kit");

      if (!serviceElement || !kitElement) return;

      const scrollY = window.scrollY;
      const serviceTop = serviceElement.offsetTop - 200;
      const kitTop = kitElement.offsetTop - 200;

      if (scrollY >= kitTop) {
        setActiveSection("kit");
      } else if (scrollY >= serviceTop) {
        setActiveSection("service");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* 배너 섹션 */}
      <Banner
        greeting="지금, 교육 변화가 필요합니다."
        title={
          <>
            보는 반도체에서 <span style={{ color: "#FFEE00" }}>해보는</span>{" "}
            반도체로
          </>
        }
      />

      {/* 좌측 네비게이션 */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="w-[108px] h-[255px] bg-[#F9F9FF] border border-[#425E91] rounded-[35px] p-4 shadow-lg">
          <div className="flex flex-col items-center gap-2 h-full justify-center">
            {/* 서비스 버튼 */}
            <button
              onClick={() => scrollToSection("service")}
              className={`relative w-[73px] h-[98px] rounded-[18px] flex flex-col items-center justify-center transition-all duration-200 ${
                activeSection === "service"
                  ? "bg-white shadow-md"
                  : "bg-[#F9F9FF] hover:bg-white/50"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="relative flex items-center justify-center">
                  {activeSection === "service" && (
                    <div className="absolute w-[51px] h-[51px] bg-[#1A1C20] rounded-full -z-10"></div>
                  )}
                  <Settings
                    className={`w-[35px] h-[35px] ${
                      activeSection === "service"
                        ? "text-white"
                        : "text-[#425E91]"
                    }`}
                  />
                </div>
                <span className="font-medium text-sm text-center text-[#1A1C20]">
                  서비스
                </span>
              </div>
            </button>

            {/* 구분선 */}
            <div className="w-[73px] h-0 border-2 border-dashed border-black opacity-30"></div>

            {/* 키트 버튼 */}
            <button
              onClick={() => scrollToSection("kit")}
              className={`relative w-[73px] h-[98px] rounded-[18px] flex flex-col items-center justify-center transition-all duration-200 ${
                activeSection === "kit"
                  ? "bg-white shadow-md"
                  : "bg-[#F9F9FF] hover:bg-white/50"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="relative flex items-center justify-center">
                  {activeSection === "kit" && (
                    <div className="absolute w-[51px] h-[51px] bg-[#1A1C20] rounded-full -z-10"></div>
                  )}
                  <Package
                    className={`w-[38px] h-[38px] ${
                      activeSection === "kit" ? "text-white" : "text-[#425E91]"
                    }`}
                  />
                </div>
                <span className="font-medium text-sm text-center text-black">
                  키트
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      <div className="lg:hidden sticky top-14 left-0 right-0 bg-white border-b shadow-sm z-40">
        <div className="flex">
          <button
            onClick={() => scrollToSection("service")}
            className={`flex-1 py-4 text-center text-sm font-medium transition-colors ${
              activeSection === "service"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            서비스
          </button>
          <button
            onClick={() => scrollToSection("kit")}
            className={`flex-1 py-4 text-center text-sm font-medium transition-colors ${
              activeSection === "kit"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            키트
          </button>
        </div>
      </div>

      {/* 컨텐츠 */}
      <main>
        <Service />
        <Kit />
      </main>
    </div>
  );
}
