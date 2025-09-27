"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // 더미 뉴스 데이터 (나중에 실제 데이터로 교체)
  const newsData = [
    {
      id: 1,
      image: "/news1.jpg",
      date: "2024.12.15",
      title: "남동고등학교 SEMI PLAY 체험 수업 성공적으로 진행",
    },
    {
      id: 2,
      image: "/news2.jpg",
      date: "2024.12.10",
      title: "반도체 교육 키트 개발 완료, 전국 학교 보급 시작",
    },
    {
      id: 3,
      image: "/news3.jpg",
      date: "2024.12.05",
      title: "교육부 승인 STEM 교육 프로그램으로 선정",
    },
  ];

  const scrollToSemiPlay = () => {
    const element = document.getElementById("semi-play-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const router = useRouter();
  const jumpToProgram = () => {
    router.push("/program");
  };

  const jumpToNews = () => {
    router.push("/about");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) =>
        prev < newsData.length - 1 ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [newsData.length]);

  const goToPrevNews = () => {
    setCurrentNewsIndex((prev) => (prev > 0 ? prev - 1 : newsData.length - 1));
  };

  const goToNextNews = () => {
    setCurrentNewsIndex((prev) => (prev < newsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative w-full h-[850px] bg-black/80 flex flex-col justify-center items-center px-4">
        <div className="flex flex-col items-center gap-32 max-w-5xl">
          <div className="flex flex-col items-center gap-16 text-center">
            <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-8xl leading-tight">
              반도체를 손으로 만나다
            </h1>
            <p className="text-white font-medium text-2xl md:text-3xl lg:text-4xl">
              중·고등학생을 위한 살아있는 논리회로
            </p>
          </div>

          <button onClick={scrollToSemiPlay} className="cursor-pointer">
            <ChevronDown className="w-16 h-16 text-white animate-bounce hover:scale-110 transition-transform" />
          </button>
        </div>
      </section>

      {/* SEMI PLAY 소개 섹션 */}
      <section id="semi-play-section" className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center gap-16">
            <h2 className="text-[#004A9A] font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
              SEMI PLAY는
            </h2>
            <div className="flex flex-col items-center gap-8">
              <p className="text-black font-medium text-2xl md:text-3xl lg:text-4xl max-w-6xl leading-relaxed">
                실습-탐색-기록이 연계된 진로체험형 STEM 교육 모델을 지원합니다.
              </p>
              <p className="text-black text-lg md:text-xl">
                * STEM: Science, technology, engineering, and mathematics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 서비스 섹션 */}
      <section className="py-24 px-4 relative">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-radial from-[#D7E2FF] to-white opacity-50"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* 서비스 카드 1 */}
            <div className="relative bg-white rounded-[42px] p-12 shadow-xl">
              <div className="absolute -top-12 left-16">
                <div className="w-24 h-24 bg-gradient-to-b from-[#D7E2FF] to-[#FAD8FC] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-medium text-3xl">01</span>
                </div>
              </div>
              <div className="pt-12 flex flex-col gap-4">
                <h3 className="text-black font-bold text-3xl">
                  교육 패키지 납품
                </h3>
                <p className="text-black font-medium text-xl">
                  키트 + 보고서 템플릿 + 강의 PPT 제공
                </p>
              </div>
            </div>

            {/* 서비스 카드 2 */}
            <div className="relative bg-white rounded-[42px] p-12 shadow-xl">
              <div className="absolute -top-12 left-16">
                <div className="w-24 h-24 bg-gradient-to-b from-[#D7E2FF] to-[#FAD8FC] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-medium text-3xl">02</span>
                </div>
              </div>
              <div className="pt-12 flex flex-col gap-4">
                <h3 className="text-black font-bold text-3xl">
                  방문 교육 서비스
                </h3>
                <p className="text-black font-medium text-xl">
                  강사 파견 및 전과정 운영 (학교 진로부 협업)
                </p>
              </div>
            </div>

            {/* 서비스 카드 3 */}
            <div className="relative bg-white rounded-[42px] p-12 shadow-xl">
              <div className="absolute -top-12 left-16">
                <div className="w-24 h-24 bg-gradient-to-b from-[#D7E2FF] to-[#FAD8FC] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-medium text-3xl">03</span>
                </div>
              </div>
              <div className="pt-12 flex flex-col gap-4">
                <h3 className="text-black font-bold text-3xl">
                  교사 전용 패키지
                </h3>
                <p className="text-black font-medium text-xl">
                  교사용 설명서 및 교사 연수 + 생활기록부 작성
                </p>
              </div>
            </div>

            {/* 서비스 카드 4 */}
            <div className="relative bg-white rounded-[42px] p-12 shadow-xl">
              <div className="absolute -top-12 left-16">
                <div className="w-24 h-24 bg-gradient-to-b from-[#D7E2FF] to-[#FAD8FC] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-medium text-3xl">04</span>
                </div>
              </div>
              <div className="pt-12 flex flex-col gap-4">
                <h3 className="text-black font-bold text-3xl">
                  생기부 연계 컨설팅
                </h3>
                <p className="text-black font-medium text-xl">
                  교육 기관 맞춤 진로부 연계 워크숍
                </p>
              </div>
            </div>
          </div>

          {/* 자세히 알아보기 버튼 */}
          <div className="flex justify-center mt-20">
            <Button
              onClick={jumpToProgram}
              variant="outline"
              size="lg"
              className="bg-[#D7E2FF] border-2 border-[#294677] text-black font-medium text-2xl px-12 py-8 h-auto rounded-lg"
            >
              자세히 알아보기
            </Button>
          </div>
        </div>
      </section>

      {/* 소식 섹션 */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-black font-bold text-4xl md:text-5xl text-center mb-20">
            소식
          </h2>

          {/* 뉴스 카드 캐러셀 */}
          <div className="flex justify-center items-center gap-8 mb-16">
            {/* 좌측 화살표 */}
            <button
              onClick={goToPrevNews}
              className="p-4 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8 text-gray-600" />
            </button>

            {/* 캐러셀 컨테이너 - 3개 위치 고정 */}
            <div className="relative flex items-end gap-8">
              {/* 좌측 위치 */}
              <div className="w-64 h-fit">
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden scale-90 opacity-70 transition-all duration-1000 ease-in-out"
                  key={`left-${currentNewsIndex}`}
                >
                  <div className="w-full h-32 bg-gray-500 rounded-t-xl"></div>
                  <div className="bg-blue-200/50 p-4 rounded-b-xl min-h-[80px] flex flex-col justify-between">
                    <p className="text-gray-600 mb-2 text-xs">
                      {newsData[(currentNewsIndex + 2) % newsData.length].date}
                    </p>
                    <h3 className="text-black font-medium leading-relaxed text-sm line-clamp-2">
                      {newsData[(currentNewsIndex + 2) % newsData.length].title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* 중앙 위치 */}
              <div className="w-96 h-fit">
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden scale-100 z-20 opacity-100 transition-all duration-1000 ease-in-out"
                  key={`center-${currentNewsIndex}`}
                >
                  <div className="w-full h-64 bg-gray-500 rounded-t-xl"></div>
                  <div className="bg-blue-200/50 p-4 rounded-b-xl min-h-[80px] flex flex-col justify-between">
                    <p className="text-gray-600 mb-2 text-sm">
                      {newsData[currentNewsIndex].date}
                    </p>
                    <h3 className="text-black font-medium leading-relaxed text-lg">
                      {newsData[currentNewsIndex].title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* 우측 위치 */}
              <div className="w-64 h-fit">
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden scale-90 opacity-70 transition-all duration-1000 ease-in-out"
                  key={`right-${currentNewsIndex}`}
                >
                  <div className="w-full h-32 bg-gray-500 rounded-t-xl"></div>
                  <div className="bg-blue-200/50 p-4 rounded-b-xl min-h-[80px] flex flex-col justify-between">
                    <p className="text-gray-600 mb-2 text-xs">
                      {newsData[(currentNewsIndex + 1) % newsData.length].date}
                    </p>
                    <h3 className="text-black font-medium leading-relaxed text-sm line-clamp-2">
                      {newsData[(currentNewsIndex + 1) % newsData.length].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* 우측 화살표 */}
            <button
              onClick={goToNextNews}
              className="p-4 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8 text-gray-600" />
            </button>
          </div>

          {/* 인디케이터
          {newsData.length > 1 && (
            <div className="flex justify-center gap-2 mb-8">
              {newsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentNewsIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )} */}

          {/* 더보기 버튼 */}
          <div className="flex justify-center">
            <Button
              onClick={jumpToNews}
              variant="outline"
              className="border-4 border-black text-black font-normal text-2xl px-12 py-6 h-auto rounded-lg"
            >
              더보기
            </Button>
          </div>
        </div>
      </section>

      {/* 하단 로고 섹션 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-end gap-16 md:gap-32">
            {/* 로고 플레이스홀더들 */}
            <div className="w-80 h-20 bg-gray-300 rounded"></div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gray-300 rounded"></div>
              <div className="w-52 h-20 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gray-300 rounded"></div>
              <div className="w-96 h-20 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
