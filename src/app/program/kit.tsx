"use client";

import { Button } from "@/components/ui/button";
import {
  Plug,
  Cable,
  RefreshCw,
  FlaskConical,
  Recycle,
  Lightbulb,
  MoveHorizontal,
  SmilePlus,
  Zap,
  Shield,
  Infinity,
} from "lucide-react";

export default function Kit() {
  return (
    <section id="kit" className="py-10 md:py-12 bg-white">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-black leading-tight mb-10 md:mb-12">
        키트 소개
      </h2>

      <div className="max-w-5xl mx-auto px-4">
        {/* 섹션 1: 조립의 즐거움, 배움의 시작 */}
        <div className="mb-20 bg-[#EFF5FF] py-16 px-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            조립의 즐거움,
          </h1>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-8 bg-clip-text text-transparent"
            style={{
              letterSpacing: "-2.5px",
              background: "linear-gradient(90deg, #4B7DFF 0%, #3A00AB 45.46%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            배움의 시작
          </h2>
          <p className="text-lg md:text-xl text-black leading-relaxed">
            SEMI PLAY 키트는 손쉽게 회로를 구성할 수 있는 모듈형 학습
            키트입니다. <br /> 소자를 꽂고, 연결하고, 작동시키는 과정이 더 이상
            복잡하지 않아요.
          </p>
        </div>

        {/* 섹션 2: 브레드보드 없이, 손끝으로 완성하는 회로 */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight text-center mb-6">
            브레드보드 없이, 손끝으로 완성하는 회로
          </h2>
          <p className="text-base md:text-lg text-black leading-relaxed text-center mb-10 max-w-4xl mx-auto">
            얇은 선과 복잡한 점퍼 와이어는 잊어도 됩니다.
            <br /> 브레드보드 없이도 손쉽게 꽂고 빼는 구조로 설계되어 있습니다.
          </p>

          {/* 3개 카드 */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* 간편한 연결 */}
            <div className="bg-[#E7EEFF] rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-[#2563EB] rounded-xl mb-4 flex items-center justify-center">
                <Cable className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold leading-tight mb-3 text-black">
                간편한 연결
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed">
                도선, 트랜지스터, LED 같은 기본 소자를 바로 결합할 수 있습니다.
                직관적으로 회로를 구성하세요.
              </p>
            </div>

            {/* 즉시 수정가능 */}
            <div className="bg-[#FBEFFA] rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-[#7C3AED] rounded-xl mb-4 flex items-center justify-center">
                <RefreshCw className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold leading-tight mb-3 text-black">
                즉시 수정가능
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed">
                회로를 바꿔보고 싶다면? 소자를 뽑아 다른 위치에 꽂기만 하면 끝.
                실시간으로 회로를 수정 가능합니다.
              </p>
            </div>

            {/* 무한한 실험 */}
            <div className="bg-[#FFF5E2] rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-[#F59E0B] rounded-xl mb-4 flex items-center justify-center">
                <FlaskConical className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold leading-tight mb-3 text-black">
                무한한 실험
              </h3>
              <p className="text-sm md:text-base text-black leading-relaxed">
                하나의 키트로 수십 가지 회로를 실험하며, 학습의 즐거움을
                경험하세요. 창의적인 아이디어를 자유롭게 구현해보세요.
              </p>
            </div>
          </div>
        </div>

        {/* 섹션 3: 다시 쓰고, 다시 배우는 모듈형 설계 */}
        <div className="mb-20 bg-[#F2F2F2] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* 왼쪽 텍스트 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-6">
                다시 쓰고, 다시 배우는 모듈형 설계
              </h2>
              <p className="text-base md:text-lg text-black leading-relaxed mb-8">
                SEMI PLAY 키트의 모든 소자는 재사용할 수 있습니다. <br />
                실패를 두려워하지 말고, 언제든 회로를 수정해 보세요.
              </p>

              {/* 3개 특징 리스트 */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#2563EB] rounded-xl flex-shrink-0 flex items-center justify-center">
                    <Recycle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-black leading-relaxed">
                      <strong>재사용 가능한 구조</strong> <br /> 모든 부품을
                      반복적으로 사용할 수 있습니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#7C3AED] rounded-xl flex-shrink-0 flex items-center justify-center">
                    <MoveHorizontal className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-black leading-relaxed">
                      <strong>쉬운 탈부착</strong> <br />
                      누구나 쉽게 탈부착할 수 있도록 설계하였습니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#F59E0B] rounded-xl flex-shrink-0 flex items-center justify-center">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-black leading-relaxed">
                      <strong>창의적 학습</strong> <br />
                      실패 없는 안전한 환경에서 마음껏 실험할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽 이미지 */}
            <div className="flex justify-center items-center">
              <div className="w-full h-80 bg-[#797979] rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* 섹션 4: 전자의 세계가 얼마나 가깝고 흥미로운지 */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight text-center mb-6">
            전자의 세계가 얼마나 가깝고 흥미로운지
          </h2>
          <p className="text-base md:text-lg text-black leading-relaxed text-center mb-12">
            누구나 처음 만지는 순간, SEMI PLAY와 함께 전자공학의 재미를 느낄 수
            있습니다.
          </p>

          {/* 4개 특징 카드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* 초보자 친화적 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#276BFF] rounded-xl mb-4 flex items-center justify-center">
                <SmilePlus className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-lg font-semibold leading-tight mb-2 text-black">
                초보자 친화적
              </h3>
              <p className="text-xs md:text-sm text-black leading-relaxed">
                전자공학 지식이 없어도 <br /> 쉽게 시작할 수 있습니다.
              </p>
            </div>

            {/* 빠른 학습 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#BB88FF] rounded-xl mb-4 flex items-center justify-center">
                <Zap className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-lg font-semibold leading-tight mb-2 text-black">
                빠른 학습
              </h3>
              <p className="text-xs md:text-sm text-black leading-relaxed">
                즉각적인 피드백으로 <br /> 빠르게 원리를 이해할 수 있습니다.
              </p>
            </div>

            {/* 안전한 설계 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#F59E0B] rounded-xl mb-4 flex items-center justify-center">
                <Shield className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-lg font-semibold leading-tight mb-2 text-black">
                안전한 설계
              </h3>
              <p className="text-xs md:text-sm text-black leading-relaxed">
                안전한 저전압으로 설계되어 <br /> 걱정 없이 사용 가능합니다.
              </p>
            </div>

            {/* 무한 확장 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#46F18E] rounded-xl mb-4 flex items-center justify-center">
                <Infinity className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-lg font-semibold leading-tight mb-2 text-black">
                무한 확장
              </h3>
              <p className="text-xs md:text-sm text-black leading-relaxed">
                모듈을 추가하여 <br /> 더 복잡한 회로도 구현할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 섹션 5: 지금 시작하세요 (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#335CEB] to-[#6C42ED] rounded-3xl p-10 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6">
            지금 시작하세요
          </h2>
          <p className="text-base md:text-lg text-white leading-relaxed mb-8 max-w-3xl mx-auto">
            SEMI PLAY 키트와 함께 전자공학의 새로운 세계를 경험해보세요. <br />
            복잡했던 회로가 이제는 손끝에서 쉽게 완성됩니다.
          </p>
          <Button className="bg-white text-transparent bg-clip-text font-bold text-lg md:text-xl px-10 py-7 rounded-xl border border-white hover:bg-gray-50 transition-colors">
            키트 주문하기
          </Button>
        </div>
      </div>
    </section>
  );
}
