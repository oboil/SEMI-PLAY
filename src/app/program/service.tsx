"use client";

import { ArrowRight } from "lucide-react";

export default function Service() {
  return (
    <section id="service" className="py-10 md:py-12 relative">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-radial from-[#D7E2FF] via-[#D7E2FF] to-white"></div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* 주요 서비스 섹션 */}
        <div className="text-center mb-32">
          <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight mb-10 md:mb-12">
            주요 서비스
          </h2>

          {/* 서비스 카드들 */}
          <div className="text-left flex flex-col gap-5 md:gap-8">
            {/* 01. 교육 패키지 납품 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col items-start gap-3 md:gap-5 shadow-lg">
              <span className="text-lg md:text-2xl font-bold text-[#475D92] leading-tight">
                01
              </span>
              <div className="flex flex-col items-start gap-1 md:gap-2">
                <h3 className="text-xl md:text-3xl font-bold text-black leading-tight">
                  교육 패키지 납품
                </h3>
                <p className="text-base md:text-xl text-black leading-relaxed">
                  키트 + 보고서 템플릿 + PPT 슬라이드 제공
                </p>
              </div>
            </div>

            {/* 02. 방문 교육 서비스 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col items-start gap-2 md:gap-3 shadow-lg">
              <div className="flex flex-col items-start gap-3 md:gap-5">
                <span className="text-lg md:text-2xl font-bold text-[#475D92] leading-tight">
                  02
                </span>
                <div className="flex flex-col items-start gap-2 md:gap-3">
                  <h3 className="text-xl md:text-3xl font-bold text-black leading-tight">
                    방문 교육 서비스
                  </h3>
                  <p className="text-base md:text-xl text-black leading-relaxed">
                    강사 파견 및 전과정 운영 (학교 진로부 협업)
                  </p>
                </div>
              </div>
            </div>

            {/* 03. 교사 전용 패키지 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col items-start gap-2 md:gap-3 shadow-lg">
              <div className="flex flex-col items-start gap-3 md:gap-5">
                <span className="text-lg md:text-2xl font-bold text-[#475D92] leading-tight">
                  03
                </span>
                <div className="flex flex-col items-start gap-2 md:gap-3">
                  <h3 className="text-xl md:text-3xl font-bold text-black leading-tight">
                    교사 전용 패키지
                  </h3>
                  <p className="text-base md:text-xl text-black leading-relaxed">
                    교사용 설명서 및 교사 연수 / 생기부 문장 제공
                  </p>
                </div>
              </div>
            </div>

            {/* 04. 생기부 연계 컨설팅 */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col items-start gap-3 md:gap-5 shadow-lg">
              <span className="text-lg md:text-2xl font-bold text-[#475D92] leading-tight">
                04
              </span>
              <div className="flex flex-col items-start gap-2 md:gap-3">
                <h3 className="text-xl md:text-3xl font-bold text-black leading-tight">
                  생기부 연계 컨설팅
                </h3>
                <p className="text-base md:text-xl text-black leading-relaxed text-left">
                  교육청, 학교 등 고객 대상 진로부 연계 워크숍 컨설팅
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 왜 SEMI PLAY가 필요할까요? */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-10 md:mb-12">
            왜 SEMI PLAY가 필요할까요?
          </h2>

          {/* 문제 1 섹션 */}
          <div className="relative mb-10 md:mb-12">
            <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 relative">
              {/* 문제 1 헤더 */}
              <div className="bg-[#D7E2FF] rounded-3xl py-3 md:py-4 px-4 md:px-6 mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-medium text-[#BA1A1A] leading-relaxed">
                  문제 1. 반도체 실습 콘텐츠의 부재
                </h3>
              </div>

              {/* 설명 */}
              <p className="text-base md:text-lg text-black leading-relaxed mb-6 md:mb-8">
                학생들이 직접 반도체의 작동 원리를 공부할 기회가 부족합니다.
              </p>

              {/* 문제점 카드들 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 justify-center max-w-4xl mx-auto">
                <div className="bg-[#F9F9FF] border border-[#004A9A] rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col items-center gap-2 md:gap-3">
                  <p className="text-base md:text-lg text-black leading-relaxed text-center">
                    트랜지스터/논리게이트 실습 없음
                  </p>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#B3261E]" />
                    <p className="text-base md:text-lg text-[#BA1A1A] leading-relaxed text-center">
                      회로 구성 및 이해 기회 부족
                    </p>
                  </div>
                </div>

                <div className="bg-[#F9F9FF] border border-[#004A9A] rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col items-center gap-2 md:gap-3">
                  <p className="text-base md:text-lg text-black leading-relaxed text-center">
                    일회성 진로체험 프로그램 중심
                  </p>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#B3261E]" />
                    <p className="text-base md:text-lg text-[#BA1A1A] leading-relaxed text-center">
                      생활기록부 연계 및 진로 설계 어려움
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 문제 2 섹션 */}
          <div className="relative mb-10 md:mb-12">
            <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 relative">
              {/* 문제 2 헤더 */}
              <div className="bg-[#D7E2FF] rounded-3xl py-3 md:py-4 px-4 md:px-6 mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-medium text-[#BA1A1A] leading-relaxed">
                  문제 2. 이론 및 추상적 개념 위주의 교육
                </h3>
              </div>

              {/* 설명 */}
              <p className="text-base md:text-lg text-black leading-relaxed mb-6 md:mb-8">
                현재 교과서 속 반도체 내용은 단순하고 기초적인 내용 중심입니다.
              </p>

              {/* 문제점 카드 */}
              <div className="flex justify-center">
                <div className="bg-[#F9F9FF] border border-[#004A9A] rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col items-center gap-2 md:gap-3 max-w-md">
                  <p className="text-base md:text-lg text-black leading-relaxed text-center">
                    심화적인 반도체 관련 내용 부족
                  </p>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#B3261E]" />
                    <p className="text-base md:text-lg text-[#BA1A1A] leading-relaxed text-center">
                      중고등학생 인재 발굴의 한계
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 교육 프로세스 섹션 */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-10 md:mb-12">
            단 한 번의 실습으로 교과서 5장 대체 효과
          </h2>

          {/* 5단계 프로세스 */}
          <div className="flex flex-col items-center gap-5 md:gap-6">
            {/* Step 1 */}
            <div className="w-full max-w-4xl bg-[rgba(215,234,255,0.8)] rounded-3xl md:rounded-[40px] py-5 md:py-6 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-3 md:gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
                  Step 1. 전류 예측
                </h3>
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  전류 흐름 원리 이해
                </p>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#1D1B20] rotate-90" />

            {/* Step 2 */}
            <div className="w-full max-w-4xl bg-[rgba(178,214,255,0.8)] rounded-3xl md:rounded-[40px] py-5 md:py-6 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-3 md:gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
                  Step 2. 회로 실험
                </h3>
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  키트로 실제 동작 확인
                </p>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#1D1B20] rotate-90" />

            {/* Step 3 */}
            <div className="w-full max-w-4xl bg-[rgba(151,199,252,0.8)] rounded-3xl md:rounded-[40px] py-5 md:py-6 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-3 md:gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
                  Step 3. 진리표 작성
                </h3>
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  결과를 논리 연산 구조로 체득
                </p>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#1D1B20] rotate-90" />

            {/* Step 4 */}
            <div className="w-full max-w-4xl bg-[rgba(76,154,239,0.7)] rounded-3xl md:rounded-[40px] py-5 md:py-6 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-3 md:gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
                  Step 4. 탐구 보고서
                </h3>
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  체계화된 보고서 작성
                </p>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#1D1B20] rotate-90" />

            {/* Step 5 */}
            <div className="w-full max-w-4xl bg-[rgba(35,130,236,0.7)] rounded-3xl md:rounded-[40px] py-5 md:py-6 px-4 md:px-6 shadow-md">
              <div className="flex flex-col items-center gap-3 md:gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
                  Step 5. 생활기록부 연계
                </h3>
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  학습 과정을 진로 활동으로 연결
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 교육 프로세스 특징 */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-10 md:mb-12">
            교육 프로세스
          </h2>

          {/* 3가지 특징 */}
          <div className="mb-6 md:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto mb-6 md:mb-8">
              <div className="bg-[#D7E2FF] h-28 md:h-36 flex items-center justify-center shadow-md">
                <p className="text-xl md:text-2xl font-medium text-black leading-relaxed text-center">
                  경험 중심
                  <br />
                  학습
                </p>
              </div>
              <div className="bg-[#ABC7FF] h-28 md:h-36 flex items-center justify-center shadow-md">
                <p className="text-xl md:text-2xl font-medium text-black leading-relaxed text-center">
                  구조화된
                  <br />
                  기록
                </p>
              </div>
              <div className="bg-[#7DABFF] h-28 md:h-36 flex items-center justify-center shadow-md">
                <p className="text-xl md:text-2xl font-medium text-black leading-relaxed text-center">
                  직접적인
                  <br />
                  진로 연계
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-black leading-relaxed text-center max-w-4xl mx-auto">
            학생 스스로 문제를 해결하며 논리 회로 구조를 이해하고, 자기만의
            언어로 정리해 생활기록부에 반영할 수 있는 교육을 제공합니다.
          </p>
        </div>
      </div>

      {/* 생활기록부 연계 메리트 섹션 */}
      <div className="text-center mb-10 md:mb-12 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-10 md:mb-12">
          생활기록부 차별화의 핵심
        </h2>

        {/* 메인 메시지 */}
        <div className="bg-gradient-to-br from-[#E8F2FF] to-[#F0E7FF] rounded-3xl p-8 md:p-12 mb-8 shadow-lg">
          <p className="text-xl md:text-2xl font-bold text-black leading-relaxed mb-4">
            대학은 실습 중심 반도체 교육 기록을 주목합니다
          </p>
          <p className="text-lg md:text-xl text-black leading-relaxed">
            생활기록부에 SEMI PLAY 활동이 기재되면
            <br />
            <span className="font-bold text-[#004A9A]">
              차별화된 경쟁력
            </span>과{" "}
            <span className="font-bold text-[#004A9A]">+α 가산점</span>의 기회를
            얻을 수 있습니다
          </p>
        </div>

        {/* 3가지 메리트 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-[#004A9A] rounded-2xl p-6 shadow-md">
            <div className="w-16 h-16 bg-[#004A9A] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-3">
              실습 기반 차별성
            </h3>
            <p className="text-base text-black leading-relaxed">
              이론만 배운 학생과 달리
              <br />
              직접 회로를 구성한 경험은
              <br />
              <span className="font-bold">명확한 차별점</span>이 됩니다
            </p>
          </div>

          <div className="bg-white border-2 border-[#6C42ED] rounded-2xl p-6 shadow-md">
            <div className="w-16 h-16 bg-[#6C42ED] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-3">
              진로 연계성 강화
            </h3>
            <p className="text-base text-black leading-relaxed">
              반도체 분야 지원 시
              <br />
              실질적 탐구 활동 기록은
              <br />
              <span className="font-bold">진정성 있는 동기</span>를 입증합니다
            </p>
          </div>

          <div className="bg-white border-2 border-[#F59E0B] rounded-2xl p-6 shadow-md">
            <div className="w-16 h-16 bg-[#F59E0B] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">+α</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-3">
              평가 가산점 가능성
            </h3>
            <p className="text-base text-black leading-relaxed">
              대학 입시에서
              <br />
              실습형 STEM 교육 이수는
              <br />
              <span className="font-bold">추가 점수</span> 부여 가능성이
              있습니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
