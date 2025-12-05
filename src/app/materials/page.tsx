"use client";

import { useState } from "react";
import { Download, Loader2, Play } from "lucide-react";
import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";
import { videos } from "@/data/video";
import { guides } from "@/data/guide";

export default function Materials() {
  const [downloadingId, setDownloadingId] = useState<number | null>(null);

const handleDownload = async (guide: (typeof guides)[0]) => {
  try {
    setDownloadingId(guide.id);

    const link = document.createElement("a");
    link.href = guide.downloadUrl;
    link.download = guide.title;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log(`✓ 다운로드 시작: ${guide.title}`);
  } catch (error) {
    console.error("다운로드 실패:", error);
    alert("파일 다운로드 중 오류가 발생했습니다.");
  } finally {
    setDownloadingId(null);
  }
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
                  onClick={() => handleDownload(guide)}
                  disabled={downloadingId === guide.id}
                  className="w-full bg-[#D7E2FF] hover:bg-[#C0D3FF] text-[#003E81] font-medium border-2 border-[#003E81] disabled:opacity-50 disabled:cursor-not-allowed"
                  variant="outline"
                >
                  {downloadingId === guide.id ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      다운로드 중...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      다운로드
                    </>
                  )}
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
