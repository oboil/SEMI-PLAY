"use client";

import { Button } from "@/components/ui/button";
import {
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
    <section id="kit" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          키트 소개
        </h2>

        {/* 조립의 즐거움, 배움의 시작 */}
        <div className="mb-24 bg-gradient-to-br from-[#EFF5FF] to-[#E3F2FD] rounded-2xl p-12 shadow-lg border border-blue-200">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            조립의 즐거움,
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#003E81] to-[#367AC4] bg-clip-text text-transparent mb-6">
            배움의 시작
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            SEMI PLAY 키트는 손쉽게 회로를 구성할 수 있는 모듈형 학습
            키트입니다.
            <br />
            소자를 꽂고, 연결하고, 작동시키는 과정이 더 이상 복잡하지 않아요.
          </p>
        </div>

        {/* 브레드보드 없이 */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
            브레드보드 없이, 손끝으로 완성하는 회로
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12">
            얇은 선과 복잡한 점퍼 와이어는 잊어도 됩니다.
            <br />
            브레드보드 없이도 손쉽게 꽂고 빼는 구조로 설계되어 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Cable className="w-10 h-10" />,
                title: "간편한 연결",
                desc: "도선, 트랜지스터, LED 같은 기본 소자를 바로 결합할 수 있습니다. 직관적으로 회로를 구성하세요.",
                gradient: "from-[#003E81] to-[#367AC4]",
              },
              {
                icon: <RefreshCw className="w-10 h-10" />,
                title: "즉시 수정가능",
                desc: "회로를 바꿔보고 싶다면? 소자를 뽑아 다른 위치에 꽂기만 하면 끝. 실시간으로 회로를 수정 가능합니다.",
                gradient: "from-[#7C3AED] to-[#A78BFA]",
              },
              {
                icon: <FlaskConical className="w-10 h-10" />,
                title: "무한한 실험",
                desc: "하나의 키트로 수십 가지 회로를 실험하며, 학습의 즐거움을 경험하세요. 창의적인 아이디어를 자유롭게 구현해보세요.",
                gradient: "from-[#F59E0B] to-[#FBBF24]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-4`}
                >
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 다시 쓰고, 다시 배우는 */}
        <div className="mb-24 bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                다시 쓰고, 다시 배우는 모듈형 설계
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                SEMI PLAY 키트의 모든 소자는 재사용할 수 있습니다.
                <br />
                실패를 두려워하지 말고, 언제든 회로를 수정해 보세요.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Recycle className="w-8 h-8" />,
                    title: "재사용 가능한 구조",
                    desc: "모든 부품을 반복적으로 사용할 수 있습니다.",
                    gradient: "from-[#003E81] to-[#367AC4]",
                  },
                  {
                    icon: <MoveHorizontal className="w-8 h-8" />,
                    title: "쉬운 탈부착",
                    desc: "누구나 쉽게 탈부착할 수 있도록 설계하였습니다.",
                    gradient: "from-[#7C3AED] to-[#A78BFA]",
                  },
                  {
                    icon: <Lightbulb className="w-8 h-8" />,
                    title: "창의적 학습",
                    desc: "실패 없는 안전한 환경에서 마음껏 실험할 수 있습니다.",
                    gradient: "from-[#F59E0B] to-[#FBBF24]",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold mb-1">
                        {item.title}
                      </p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full h-80 bg-gray-300 rounded-2xl shadow-md"></div>
            </div>
          </div>
        </div>

        {/* 전자의 세계가 얼마나 가깝고 흥미로운지 */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
            전자의 세계가 얼마나 가깝고 흥미로운지
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12">
            누구나 처음 만지는 순간, SEMI PLAY와 함께 전자공학의 재미를 느낄 수
            있습니다.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <SmilePlus className="w-12 h-12" />,
                title: "초보자 친화적",
                desc: "전자공학 지식이 없어도\n쉽게 시작할 수 있습니다.",
                gradient: "from-[#003E81] to-[#367AC4]",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "빠른 학습",
                desc: "즉각적인 피드백으로\n빠르게 원리를 이해할 수 있습니다.",
                gradient: "from-[#7C3AED] to-[#A78BFA]",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "안전한 설계",
                desc: "안전한 저전압으로 설계되어\n걱정 없이 사용 가능합니다.",
                gradient: "from-[#F59E0B] to-[#FBBF24]",
              },
              {
                icon: <Infinity className="w-12 h-12" />,
                title: "무한 확장",
                desc: "모듈을 추가하여\n더 복잡한 회로도 구현할 수 있습니다.",
                gradient: "from-[#10B981] to-[#34D399]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100"
              >
                <div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mx-auto mb-4`}
                >
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#003E81] to-[#367AC4] rounded-2xl p-12 text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 시작하세요
          </h3>
          <p className="text-lg text-white mb-8 opacity-90 leading-relaxed">
            SEMI PLAY 키트와 함께 전자공학의 새로운 세계를 경험해보세요.
            <br />
            복잡했던 회로가 이제는 손끝에서 쉽게 완성됩니다.
          </p>
          <Button className="bg-white text-[#003E81] hover:bg-gray-100 font-bold text-lg px-10 py-6 h-auto rounded-xl shadow-lg">
            키트 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
}
