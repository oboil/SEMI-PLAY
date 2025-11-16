"use client";

import { ArrowRight, CheckCircle, TrendingUp, Award } from "lucide-react";

export default function Service() {
  return (
    <section
      id="service"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* 주요 서비스 섹션 */}
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

        {/* 왜 SEMI PLAY가 필요할까요? */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            왜 SEMI PLAY가 필요할까요?
          </h2>

          {/* 문제 1 */}
          <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl py-4 px-6 mb-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700">
                문제 1. 반도체 실습 콘텐츠의 부재
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              학생들이 직접 반도체의 작동 원리를 공부할 기회가 부족합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  problem: "트랜지스터/논리게이트 실습 없음",
                  result: "회로 구성 및 이해 기회 부족",
                },
                {
                  problem: "일회성 진로체험 프로그램 중심",
                  result: "생활기록부 연계 및 진로 설계 어려움",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-blue-50 rounded-xl p-6 border border-blue-200"
                >
                  <p className="text-gray-800 mb-3 font-medium">
                    {item.problem}
                  </p>
                  <div className="flex items-center gap-2 text-red-600">
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                    <p className="font-semibold">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 문제 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl py-4 px-6 mb-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700">
                문제 2. 이론 및 추상적 개념 위주의 교육
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              현재 교과서 속 반도체 내용은 단순하고 기초적인 내용 중심입니다.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 max-w-md mx-auto">
              <p className="text-gray-800 mb-3 font-medium text-center">
                심화적인 반도체 관련 내용 부족
              </p>
              <div className="flex items-center justify-center gap-2 text-red-600">
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                <p className="font-semibold">중고등학생 인재 발굴의 한계</p>
              </div>
            </div>
          </div>
        </div>

        {/* 교육 프로세스 */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            단 한 번의 실습으로
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            교과서 5장 대체 효과
          </p>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                step: 1,
                title: "전류 예측",
                desc: "전류 흐름 원리 이해",
                color: "from-[#E3F2FD] to-[#BBDEFB]",
              },
              {
                step: 2,
                title: "회로 실험",
                desc: "키트로 실제 동작 확인",
                color: "from-[#BBDEFB] to-[#90CAF9]",
              },
              {
                step: 3,
                title: "진리표 작성",
                desc: "결과를 논리 연산 구조로 체득",
                color: "from-[#90CAF9] to-[#64B5F6]",
              },
              {
                step: 4,
                title: "탐구 보고서",
                desc: "체계화된 보고서 작성",
                color: "from-[#64B5F6] to-[#42A5F5]",
              },
              {
                step: 5,
                title: "생활기록부 연계",
                desc: "학습 과정을 진로 활동으로 연결",
                color: "from-[#42A5F5] to-[#2196F3]",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <div
                  className={`bg-gradient-to-r ${item.color} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-[#003E81] text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {/* Step {item.step}. {item.title} */}
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </div>
                {idx < 4 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-[#003E81] rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 생활기록부 차별화의 핵심 */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            생활기록부 차별화의 핵심
          </h2>

          <div className="bg-gradient-to-br from-[#EFF5FF] to-[#E3F2FD] rounded-2xl p-8 md:p-12 mb-8 shadow-lg border border-blue-200">
            <p className="text-2xl font-bold text-gray-900 mb-4 text-center">
              대학은 실습 중심 반도체 교육 기록을 주목합니다
            </p>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              생활기록부에 SEMI PLAY 활동이 기재되면
              <br />
              <span className="font-bold text-[#003E81]">차별화된 경쟁력</span>
              과 <span className="font-bold text-[#003E81]">+α 가산점</span>의
              기회를 얻을 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "실습 기반 차별성",
                desc: "이론만 배운 학생과 달리\n직접 회로를 구성한 경험은\n명확한 차별점이 됩니다",
                color: "from-[#003E81] to-[#367AC4]",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "진로 연계성 강화",
                desc: "반도체 분야 지원 시\n실질적 탐구 활동 기록은\n진정성 있는 동기를 입증합니다",
                color: "from-[#367AC4] to-[#5B9BD5]",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "평가 가산점 가능성",
                desc: "대학 입시에서\n실습형 STEM 교육 이수는\n추가 점수 부여 가능성이 있습니다",
                color: "from-[#5B9BD5] to-[#7FB8E8]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mx-auto mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center whitespace-pre-line text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 교육 프로세스 특징 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            교육 프로세스 특징
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "경험 중심\n학습",
                color: "from-[#E3F2FD] to-[#BBDEFB]",
              },
              { title: "구조화된\n기록", color: "from-[#BBDEFB] to-[#90CAF9]" },
              {
                title: "직접적인\n진로 연계",
                color: "from-[#90CAF9] to-[#64B5F6]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 shadow-md flex items-center justify-center min-h-[120px]`}
              >
                <p className="text-xl font-bold text-gray-900 text-center whitespace-pre-line">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 text-center leading-relaxed">
            학생 스스로 문제를 해결하며 논리 회로 구조를 이해하고,
            <br />
            자기만의 언어로 정리해 생활기록부에 반영할 수 있는 교육을
            제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
