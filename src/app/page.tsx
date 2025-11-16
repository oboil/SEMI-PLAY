"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import { getSortedNews } from "@/data/news";

export default function Home() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const recentNews = getSortedNews().slice(0, 3);

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
      setCurrentNewsIndex((prev) => (prev + 1) % recentNews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [recentNews.length]);

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative w-full h-[700px] bg-black/80 flex flex-col justify-center items-center px-4">
        <div className="flex flex-col items-center gap-24 max-w-5xl">
          <div className="flex flex-col items-center gap-12 text-center">
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              반도체를 손으로 만나다
            </h1>
            <p className="text-white font-medium text-xl md:text-2xl lg:text-3xl">
              중·고등학생을 위한 살아있는 논리회로
            </p>
          </div>

          <button onClick={scrollToSemiPlay} className="cursor-pointer">
            <ChevronDown className="w-12 h-12 text-white animate-bounce hover:scale-110 transition-transform" />
          </button>
        </div>
      </section>

      {/* SEMI PLAY 소개 섹션 */}
      <section id="semi-play-section" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center gap-12">
            <h2 className="text-[#004A9A] font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              SEMI PLAY는
            </h2>
            <div className="flex flex-col items-center gap-6">
              <p className="text-black font-medium text-xl md:text-2xl lg:text-3xl max-w-6xl leading-relaxed">
                실습-탐색-기록이 연계된 진로체험형 STEM 교육 모델을 지원합니다.
              </p>
              <p className="text-black text-base md:text-lg">
                * STEM: Science, technology, engineering, and mathematics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 서비스 섹션 */}
      <section className="py-16 px-4 relative">
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            주요 서비스
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "교육 패키지 납품",
                desc: "키트 + 보고서 템플릿 + PPT 슬라이드 제공",
                gradient: "from-[#003E81] to-[#367AC4]",
              },
              {
                num: "02",
                title: "방문 교육 서비스",
                desc: "강사 파견 및 전과정 운영 (학교 진로부 협업)",
                gradient: "from-[#367AC4] to-[#5B9BD5]",
              },
              {
                num: "03",
                title: "교사 전용 패키지",
                desc: "교사용 설명서 및 교사 연수 / 생기부 문장 제공",
                gradient: "from-[#5B9BD5] to-[#7FB8E8]",
              },
              {
                num: "04",
                title: "생기부 연계 컨설팅",
                desc: "교육청, 학교 등 고객 대상 진로부 연계 워크숍 컨설팅",
                gradient: "from-[#7FB8E8] to-[#A3D5F5]",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${service.gradient} rounded-l-2xl`}
                ></div>
                <div className="flex items-start gap-4">
                  <span
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} text-white font-bold text-xl flex items-center justify-center`}
                  >
                    {service.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#003E81] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 자세히 알아보기 버튼 */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={jumpToProgram}
            variant="outline"
            size="lg"
            className="bg-[#D7E2FF] border-2 border-[#294677] text-black font-medium text-lg px-10 py-6 h-auto rounded-lg"
          >
            자세히 알아보기
          </Button>
        </div>
      </section>

      {/* 소식 섹션 */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-black font-bold text-3xl md:text-4xl text-center mb-16">
            소식
          </h2>

          {/* 3D 회전 캐러셀 */}
          <div className="relative h-[350px] mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* 원형 컨테이너 */}
              <div
                className="relative w-full max-w-5xl h-96"
                style={{ perspective: "2000px" }}
              >
                {recentNews.map((news, index) => {
                  // 현재 인덱스를 기준으로 상대적인 위치 계산
                  const position =
                    (index - currentNewsIndex + recentNews.length) %
                    recentNews.length;

                  // 위치별 스타일 계산
                  let transformStyle = "";
                  let zIndex = 0;
                  let opacity = 0.4;
                  let scale = 0.75;

                  if (position === 0) {
                    // 중앙 (현재 선택된 카드)
                    transformStyle =
                      "translateX(0%) translateZ(0px) rotateY(0deg)";
                    zIndex = 30;
                    opacity = 1;
                    scale = 1;
                  } else if (position === 1) {
                    // 오른쪽
                    transformStyle =
                      "translateX(45%) translateZ(-200px) rotateY(-25deg)";
                    zIndex = 20;
                    opacity = 0.6;
                    scale = 0.85;
                  } else if (position === 2) {
                    // 왼쪽
                    transformStyle =
                      "translateX(-45%) translateZ(-200px) rotateY(25deg)";
                    zIndex = 10;
                    opacity = 0.6;
                    scale = 0.85;
                  }

                  return (
                    <div
                      key={news.id}
                      className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out"
                      style={{
                        transform: transformStyle,
                        transformStyle: "preserve-3d",
                        zIndex,
                        opacity,
                      }}
                    >
                      <div
                        className="bg-white rounded-xl shadow-2xl overflow-hidden cursor-pointer w-96 hover:shadow-3xl transition-shadow"
                        style={{ transform: `scale(${scale})` }}
                        onClick={() => setCurrentNewsIndex(index)}
                      >
                        {/* 이미지 플레이스홀더 */}
                        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                          <span className="text-5xl">📰</span>
                        </div>

                        {/* 뉴스 내용 */}
                        <div className="p-6 bg-white">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500">
                              {news.date}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-black leading-relaxed min-h-[3.5rem]">
                            {news.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 인디케이터 */}
          <div className="flex justify-center gap-3 mb-12">
            {recentNews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNewsIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentNewsIndex
                    ? "w-12 h-3 bg-blue-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`${index + 1}번째 소식으로 이동`}
              />
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="flex justify-center">
            <Button
              onClick={jumpToNews}
              variant="outline"
              className="border-4 border-black text-black font-normal text-lg px-10 py-5 h-auto rounded-lg hover:bg-gray-50"
            >
              더보기
            </Button>
          </div>
        </div>
      </section>

      {/* 하단 로고 섹션 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-end gap-12 md:gap-24">
            {/* 로고 플레이스홀더들 */}
            <div className="w-64 h-16 bg-gray-300 rounded"></div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded"></div>
              <div className="w-44 h-16 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded"></div>
              <div className="w-80 h-16 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
