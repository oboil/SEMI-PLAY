// src/app/materials/page.tsx 전체 교체
"use client";

import { Download, Play } from "lucide-react";
import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";

export default function Materials() {
  // 강의 영상 데이터
  const videos = [
    {
      id: 1,
      title: "1강. 반도체 기초 이론",
      description: "반도체의 기본 개념과 트랜지스터의 작동 원리를 학습합니다.",
      youtubeId: "SIzY5LfDy5s", // 실제 유튜브 ID로 교체 필요
      duration: "4:08",
    },
    {
      id: 2,
      title: "2강. 논리 게이트의 이해",
      description: "AND, OR, NOT 게이트의 원리와 실습 방법을 배웁니다.",
      youtubeId: "SIzY5LfDy5s",
      duration: "4:08",
    },
    {
      id: 3,
      title: "3강. 회로 실습 가이드",
      description: "SEMI PLAY 키트를 활용한 실제 회로 구성 방법을 안내합니다.",
      youtubeId: "SIzY5LfDy5s",
      duration: "4:08",
    },
  ];

  // 교사 가이드 자료
  const guides = [
    {
      id: 1,
      title: "교사용 수업 운영 가이드",
      description: "수업 진행 방법과 학생 지도 노하우를 담은 완전한 가이드북",
      fileSize: "2.5 MB",
      type: "PDF",
    },
    {
      id: 2,
      title: "생활기록부 작성 가이드",
      description: "학생별 맞춤 생기부 작성 예시와 문장 템플릿 제공",
      fileSize: "1.8 MB",
      type: "PDF",
    },
    {
      id: 3,
      title: "수업 PPT 템플릿",
      description: "바로 활용 가능한 수업용 프레젠테이션 자료",
      fileSize: "15.3 MB",
      type: "PPTX",
    },
    {
      id: 4,
      title: "학생 활동지 및 평가지",
      description: "실습 보고서 템플릿과 평가 루브릭 포함",
      fileSize: "3.2 MB",
      type: "ZIP",
    },
  ];

  const handleDownload = (fileName: string) => {
    // 실제 다운로드 로직 구현 필요
    console.log(`다운로드: ${fileName}`);
    alert("파일 다운로드 기능은 준비 중입니다.");
  };

  return (
    <div className="min-h-screen">
      {/* 배너 */}
      <Banner
        greeting="반도체 교육의 시작,"
        title={<>SEMI PLAY 학습 가이드</>}
      />

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* 강의 영상 섹션 */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
            강의 영상
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            단계별로 구성된 영상으로 쉽게 따라하는 반도체 실습
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* 유튜브 썸네일 */}
                <div className="relative aspect-video bg-gray-200">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {/* <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div> */}
                </div>

                {/* 영상 정보 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 교사 가이드 섹션 */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
            교사 가이드
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            수업 운영에 필요한 모든 자료를 한 곳에서
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="bg-gradient-to-br from-[#F9F9FF] to-white border-2 border-[#D7E2FF] rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#003E81] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {guide.type}
                      </span>
                      <span className="text-sm text-gray-500">
                        {guide.fileSize}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => handleDownload(guide.title)}
                  className="w-full bg-[#D7E2FF] hover:bg-[#C0D3FF] text-[#003E81] font-medium border-2 border-[#003E81]"
                  variant="outline"
                >
                  <Download className="w-4 h-4 mr-2" />
                  다운로드
                </Button>
              </div>
            ))}
          </div>

          {/* 추가 안내 */}
          <div className="mt-12 bg-gradient-to-r from-[#003E81] to-[#367AC4] rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              더 많은 자료가 필요하신가요?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              맞춤형 교육 자료 및 추가 콘텐츠 문의는 언제든 환영합니다
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-[#003E81] hover:bg-gray-100 font-bold text-lg px-8 py-6 h-auto"
            >
              문의하기
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
