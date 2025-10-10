// src/app/about/news.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function News() {
  // 더미 뉴스 데이터 (실제 데이터로 교체 필요)
  const allNews = [
    {
      id: 1,
      date: "2024.12.15",
      title: "남동고등학교 SEMI PLAY 체험 수업 성공적으로 진행",
      category: "교육",
    },
    {
      id: 2,
      date: "2024.12.10",
      title: "반도체 교육 키트 개발 완료, 전국 학교 보급 시작",
      category: "개발",
    },
    {
      id: 3,
      date: "2024.12.05",
      title: "교육부 승인 STEM 교육 프로그램으로 선정",
      category: "수상",
    },
    {
      id: 4,
      date: "2024.11.28",
      title: "교사 연수 프로그램 1차 시범 운영 성공",
      category: "교육",
    },
    {
      id: 5,
      date: "2024.11.20",
      title: "반도체 인재 양성 포럼 참석 및 발표",
      category: "행사",
    },
    {
      id: 6,
      date: "2024.11.15",
      title: "교육청과 MOU 체결, 공교육 연계 강화",
      category: "협약",
    },
    {
      id: 7,
      date: "2024.11.05",
      title: "생활기록부 연계 컨설팅 서비스 출시",
      category: "서비스",
    },
    {
      id: 8,
      date: "2024.10.28",
      title: "방문 교육 서비스 100개교 돌파",
      category: "교육",
    },
    {
      id: 9,
      date: "2024.10.20",
      title: "SEMI PLAY 공식 홈페이지 오픈",
      category: "소식",
    },
  ];

  // 화면 크기별 한 행당 카드 개수
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    const getCardsPerRow = () => {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // 기본 (모바일)
    };

    const updateLayout = () => {
      const cards = getCardsPerRow();
      setCardsPerRow(cards);
      // 초기 표시는 2행
      if (window.innerWidth < 768) {
        setDisplayCount(cards * 3);
      } else setDisplayCount(cards * 2);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handleLoadMore = () => {
    // 한 행씩 추가
    setDisplayCount((prev) => Math.min(prev + cardsPerRow, allNews.length));
  };

  const handleCollapse = () => {
    // 초기 상태로 돌아가기 (2행)
    setDisplayCount(cardsPerRow * 2);
  };

  const displayedNews = allNews.slice(0, displayCount);
  const hasMore = displayCount < allNews.length;
  const isFullyExpanded = displayCount >= allNews.length;

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          소식
        </h2>

        {/* 뉴스 그리드 - 기본 1열, md 2열, lg 3열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group"
            >
              {/* 이미지 플레이스홀더 */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">📰</span>
              </div>

              {/* 뉴스 내용 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  {/* <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    {news.category}
                  </span> */}
                </div>
                <h3 className="text-lg font-bold text-black leading-relaxed line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* 더보기/접기 버튼 */}
        <div className="flex justify-center">
          {isFullyExpanded ? (
            <Button
              onClick={handleCollapse}
              variant="outline"
              size="lg"
              className="border-2 border-black text-black font-medium text-lg px-12 py-6 h-auto rounded-lg hover:bg-gray-50 flex items-center gap-2"
            >
              접기
              <ChevronUp className="w-5 h-5" />
            </Button>
          ) : (
            <Button
              onClick={handleLoadMore}
              variant="outline"
              size="lg"
              className="border-2 border-black text-black font-medium text-lg px-12 py-6 h-auto rounded-lg hover:bg-gray-50 flex items-center gap-2"
              disabled={!hasMore}
            >
              더보기
              <ChevronDown className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
