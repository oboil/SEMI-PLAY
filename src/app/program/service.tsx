"use client";

import { ArrowRight } from "lucide-react";

export default function Service() {
  return (
    <section id="service" className="py-12 md:py-16 relative">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-radial from-[#D7E2FF] via-[#D7E2FF] to-white"></div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* 주요 서비스 섹션 */}
        <div className="text-center mb-[233px]">
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-[48px] md:leading-[64px] tracking-[-0.25px] mb-12 md:mb-16">
            주요 서비스
          </h2>

          {/* 서비스 카드들 */}
          <div className="flex flex-col gap-6 md:gap-11">
            {/* 01. 교육 패키지 납품 */}
            <div className="bg-white rounded-[12px] md:rounded-[16px] p-6 md:p-12 flex flex-col items-start gap-4 md:gap-7 shadow-[4px_4px_24px_rgba(0,0,0,0.25)]">
              <span className="text-xl md:text-[32px] font-bold text-[#475D92] leading-[48px] md:leading-[64px] tracking-[-0.25px]">
                01
              </span>
              <div className="flex flex-col items-start gap-1 md:gap-2">
                <h3 className="text-2xl md:text-[40px] font-bold text-black leading-[48px] md:leading-[64px] tracking-[-0.25px]">
                  교육 패키지 납품
                </h3>
                <p className="text-lg md:text-[26px] text-black leading-[24px] md:leading-[32px]">
                  키트 + 보고서 템플릿 + PPT 슬라이드 제공
                </p>
              </div>
            </div>

            {/* 02. 방문 교육 서비스 */}
            <div className="bg-white rounded-[12px] md:rounded-[16px] p-6 md:p-12 flex flex-col items-start gap-2 md:gap-3 shadow-[4px_4px_24px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col items-start gap-4 md:gap-7">
                <span className="text-xl md:text-[32px] font-bold text-[#475D92] leading-[48px] md:leading-[64px] tracking-[-0.25px]">
                  02
                </span>
                <div className="flex flex-col items-start gap-2 md:gap-3">
                  <h3 className="text-2xl md:text-[40px] font-bold text-black leading-[48px] md:leading-[64px] tracking-[-0.25px]">
                    방문 교육 서비스
                  </h3>
                  <p className="text-lg md:text-[26px] text-black leading-[24px] md:leading-[32px]">
                    강사 파견 및 전과정 운영 (학교 진로부 협업)
                  </p>
                </div>
              </div>
            </div>

            {/* 03. 교사 전용 패키지 */}
            <div className="bg-white rounded-[12px] md:rounded-[16px] p-6 md:p-12 flex flex-col items-start gap-2 md:gap-3 shadow-[4px_4px_24px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col items-start gap-4 md:gap-7">
                <span className="text-xl md:text-[32px] font-bold text-[#475D92] leading-[48px] md:leading-[64px] tracking-[-0.25px]">
                  03
                </span>
                <div className="flex flex-col items-start gap-2 md:gap-3">
                  <h3 className="text-2xl md:text-[40px] font-bold text-black leading-[48px] md:leading-[64px] tracking-[-0.25px]">
                    교사 전용 패키지
                  </h3>
                  <p className="text-lg md:text-[26px] text-black leading-[24px] md:leading-[32px]">
                    교사용 설명서 및 교사 연수 / 생기부 문장 제공
                  </p>
                </div>
              </div>
            </div>

            {/* 04. 생기부 연계 컨설팅 */}
            <div className="bg-white rounded-[12px] md:rounded-[16px] p-6 md:p-12 flex flex-col items-start gap-4 md:gap-7 shadow-[4px_4px_24px_rgba(0,0,0,0.25)]">
              <span className="text-xl md:text-[32px] font-bold text-[#475D92] leading-[48px] md:leading-[64px] tracking-[-0.25px]">
                04
              </span>
              <div className="flex flex-col items-start gap-2 md:gap-3">
                <h3 className="text-2xl md:text-[40px] font-bold text-black leading-[48px] md:leading-[64px] tracking-[-0.25px]">
                  생기부 연계 컨설팅
                </h3>
                <p className="text-lg md:text-[26px] text-black leading-[24px] md:leading-[32px]">
                  교육청, 학교 등 고객 대상 진로부 연계 워크숍 컨설팅
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 왜 SEMI PLAY가 필요할까요? */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-[40px] md:leading-7 mb-12 md:mb-16">
            왜 SEMI PLAY가 필요할까요?
          </h2>

          {/* 문제 1 섹션 */}
          <div className="relative mb-12 md:mb-16">
            <div className="bg-white shadow-lg md:shadow-xl rounded-[20px] md:rounded-[24px] p-4 md:p-6 relative">
              {/* 문제 1 헤더 */}
              <div className="bg-[#D7E2FF] rounded-[30px] md:rounded-[36px] py-4 md:py-6 px-4 md:px-6 mb-4 md:mb-6">
                <h3 className="text-xl md:text-[26px] font-medium text-[#BA1A1A] leading-[32px] md:leading-7">
                  문제 1. 반도체 실습 콘텐츠의 부재
                </h3>
              </div>

              {/* 설명 */}
              <p className="text-lg md:text-xl text-black leading-[28px] md:leading-7 mb-8 md:mb-10">
                학생들이 직접 반도체의 작동 원리를 공부할 기회가 부족합니다.
              </p>

              {/* 문제점 카드들 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-center max-w-4xl mx-auto">
                <div className="bg-[#F9F9FF] border border-[#004A9A] rounded-[12px] md:rounded-[16px] p-6 md:p-8 flex flex-col items-center gap-3 md:gap-4">
                  <p className="text-lg md:text-xl text-black leading-[28px] md:leading-7 text-center">
                    트랜지스터/논리게이트 실습 없음
                  </p>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#B3261E]" />
                    <p className="text-lg md:text-xl text-[#BA1A1A] leading-[28px] md:leading-7 text-center">
                      회로 구성 및 이해 기회 부족
                    </p>
                  </div>
                </div>

                <div className="bg-[#F9F9FF] border border-[#004A9A] rounded-[12px] md:rounded-[16px] p-6 md:p-8 flex flex-col items-center gap-3 md:gap-4">
                  <p className="text-lg md:text-xl text-black leading-[28px] md:leading-7 text-center">
                    일회성 진로체험 프로그램 중심
                  </p>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#B3261E]" />
                    <p className="text-lg md:text-xl text-[#BA1A1A] leading-[28px] md:leading-7 text-center">
                      생활기록부 연계 및 진로 설계 어려움
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 문제 2 섹션 */}
          <div className="relative mb-12 md:mb-16">
            <div className="bg-white shadow-lg md:shadow-xl rounded-[20px] md:rounded-[24px] p-4 md:p-6 relative">
              {/* 문제 2 헤더 */}
              <div className="bg-[#D7E2FF] rounded-[30px] md:rounded-[36px] py-4 md:py-6 px-4 md:px-6 mb-4 md:mb-6">
                <h3 className="text-xl md:text-[26px] font-medium text-[#BA1A1A] leading-[32px] md:leading-7">
                  문제 2. 이론 및 추상적 개념 위주의 교육
                </h3>
              </div>

              {/* 설명 */}
              <p className="text-lg md:text-xl text-black leading-[28px] md:leading-7 mb-8 md:mb-10">
                현재 교과서 속 반도체 내용은 단순하고 기초적인 내용 중심입니다.
              </p>

              {/* 문제점 카드 */}
              <div className="flex justify-center">
                <div className="bg-[#F9F9FF] border border-[#004A9A] rounded-[12px] md:rounded-[16px] p-6 md:p-8 flex flex-col items-center gap-3 md:gap-4 max-w-md">
                  <p className="text-lg md:text-xl text-black leading-[28px] md:leading-7 text-center">
                    심화적인 반도체 관련 내용 부족
                  </p>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#B3261E]" />
                    <p className="text-lg md:text-xl text-[#BA1A1A] leading-[28px] md:leading-7 text-center">
                      중고등학생 인재 발굴의 한계
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 교육 프로세스 섹션 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-[40px] md:leading-7 mb-12 md:mb-16">
            단 한 번의 실습으로 교과서 5장 대체 효과
          </h2>

          {/* 5단계 프로세스 */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="w-full max-w-4xl bg-[rgba(215,234,255,0.8)] rounded-[40px] md:rounded-[48px] py-6 md:py-8 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-4 md:gap-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-[36px] md:leading-7">
                  Step 1. 전류 예측
                </h3>
                <p className="text-xl md:text-[26px] text-black leading-[32px] md:leading-7">
                  전류 흐름 원리 이해
                </p>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#1D1B20] rotate-90" />

            {/* Step 2 */}
            <div className="w-full max-w-4xl bg-[rgba(178,214,255,0.8)] rounded-[40px] md:rounded-[48px] py-6 md:py-8 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-4 md:gap-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-[36px] md:leading-7">
                  Step 2. 회로 실험
                </h3>
                <p className="text-xl md:text-[26px] text-black leading-[32px] md:leading-7">
                  키트로 실제 동작 확인
                </p>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#1D1B20] rotate-90" />

            {/* Step 3 */}
            <div className="w-full max-w-4xl bg-[rgba(151,199,252,0.8)] rounded-[40px] md:rounded-[48px] py-6 md:py-8 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-4 md:gap-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-[36px] md:leading-7">
                  Step 3. 진리표 작성
                </h3>
                <p className="text-xl md:text-[26px] text-black leading-[32px] md:leading-7">
                  결과를 논리 연산 구조로 체득
                </p>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#1D1B20] rotate-90" />

            {/* Step 4 */}
            <div className="w-full max-w-4xl bg-[rgba(76,154,239,0.7)] rounded-[40px] md:rounded-[48px] py-6 md:py-8 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-4 md:gap-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-[36px] md:leading-7">
                  Step 4. 탐구 보고서
                </h3>
                <p className="text-xl md:text-[26px] text-black leading-[32px] md:leading-7">
                  체계화된 보고서 작성
                </p>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#1D1B20] rotate-90" />

            {/* Step 5 */}
            <div className="w-full max-w-4xl bg-[rgba(35,130,236,0.7)] rounded-[40px] md:rounded-[48px] py-6 md:py-8 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-4 md:gap-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-[36px] md:leading-7">
                  Step 5. 생활기록부 연계
                </h3>
                <p className="text-xl md:text-[26px] text-black leading-[32px] md:leading-7">
                  학습 과정을 진로 활동으로 연결
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 교육 프로세스 특징 */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-[40px] md:leading-7 mb-12 md:mb-16">
            교육 프로세스
          </h2>

          {/* 3가지 특징 */}
          <div className="mb-8 md:mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto mb-8 md:mb-10">
              <div className="bg-[#D7E2FF] h-32 md:h-44 flex items-center justify-center shadow-md">
                <p className="text-2xl md:text-3xl font-medium text-black leading-[32px] md:leading-[40px] text-center">
                  경험 중심
                  <br />
                  학습
                </p>
              </div>
              <div className="bg-[#ABC7FF] h-32 md:h-44 flex items-center justify-center shadow-md">
                <p className="text-2xl md:text-3xl font-medium text-black leading-[32px] md:leading-[40px] text-center">
                  구조화된
                  <br />
                  기록
                </p>
              </div>
              <div className="bg-[#7DABFF] h-32 md:h-44 flex items-center justify-center shadow-md">
                <p className="text-2xl md:text-3xl font-medium text-black leading-[32px] md:leading-[40px] text-center">
                  직접적인
                  <br />
                  진로 연계
                </p>
              </div>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-black leading-[32px] md:leading-[40px] text-center max-w-4xl mx-auto">
            학생 스스로 문제를 해결하며 논리 회로 구조를 이해하고, 자기만의
            언어로 정리해 생활기록부에 반영할 수 있는 교육을 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
