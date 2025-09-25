"use client";

import Image from "next/image";

export default function Kit() {
  return (
    <section id="kit" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 키트 소개 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            키트 소개
          </h2>
          <p className="text-lg text-gray-600 mb-8">자세한 키트 설명 필요</p>
        </div>

        {/* 제품 구성 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            제품 구성
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">PCB 키트</h4>
              <p className="text-sm text-gray-600">
                트랜지스터 + 스위치 + LED 구성
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">활동지</h4>
              <p className="text-sm text-gray-600">
                진리표 + 동작원리 + 진로 연계
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6 text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍🏫</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">교사용 가이드</h4>
              <p className="text-sm text-gray-600">
                수업 운영안 + 생활기록부 작성 가이드
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎥</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">영상 콘텐츠</h4>
              <p className="text-sm text-gray-600">
                과학 교과목 연계 + 교육 강의 자료
              </p>
            </div>
          </div>
        </div>

        {/* 키트 이미지 섹션 */}
        <div className="mb-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">키트 소개</h3>
          <div className="bg-gray-100 rounded-2xl p-8 mb-8">
            {/* 키트 이미지 플레이스홀더 */}
            <div className="bg-blue-600 rounded-xl p-12 text-center">
              <div className="text-white text-6xl mb-4">🔌</div>
              <p className="text-white text-lg font-medium">
                논리회로 실습 키트
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8">실제로 키트 실물 정보</p>
        </div>

        {/* 학습 효과 섹션 */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              학습 효과
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="font-bold text-blue-600 mb-2">이론 이해</h4>
                  <p className="text-sm text-gray-600">
                    트랜지스터와 논리게이트의 작동 원리를 직접 체험
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="font-bold text-green-600 mb-2">실습 경험</h4>
                  <p className="text-sm text-gray-600">
                    회로를 직접 구성하고 동작을 확인하는 실습
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="font-bold text-purple-600 mb-2">진로 탐색</h4>
                  <p className="text-sm text-gray-600">
                    반도체 분야 진로 정보와 연계 활동 제공
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                단 한 번의 수업으로도
              </h4>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5장</div>
                  <p className="text-sm text-gray-600">교과서 분량</p>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl">→</span>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1회</div>
                  <p className="text-sm text-gray-600">실습 수업</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
