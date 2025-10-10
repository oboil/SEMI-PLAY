// src/app/about/team.tsx
"use client";

import Image from "next/image";

export default function Team() {
  const teamMembers = [
    { name: "윤선웅", role: "대표", major: "지능형반도체공학과" },
    { name: "김주영", role: "교육", major: "지능형반도체공학과" },
    { name: "어성진", role: "교육", major: "지능형반도체공학과" },
    { name: "김민교", role: "키트 제작", major: "전자공학과" },
    { name: "구나연", role: "회계", major: "경영학과" },
    { name: "조정혜", role: "회계", major: "경영학과" },
    { name: "박미소", role: "사이트 구현", major: "소프트웨어학과" },
  ];

  // 역할별 색상 매핑 (채도 낮춤)
  const getRoleColors = (role: string) => {
    const colorMap: Record<string, { bg: string; border: string }> = {
      대표: {
        bg: "bg-gradient-to-br from-blue-100 to-blue-200",
        border: "border-blue-300",
      },
      교육: {
        bg: "bg-gradient-to-br from-purple-100 to-purple-200",
        border: "border-purple-300",
      },
      "키트 제작": {
        bg: "bg-gradient-to-br from-orange-100 to-orange-200",
        border: "border-orange-300",
      },
      회계: {
        bg: "bg-gradient-to-br from-pink-100 to-pink-200",
        border: "border-pink-300",
      },
      "사이트 구현": {
        bg: "bg-gradient-to-br from-green-100 to-green-200",
        border: "border-green-300",
      },
    };
    return colorMap[role] || colorMap["대표"];
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* SEMI PLAY 로고 및 소개 */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-8">
            <Image
              src="/logo.svg"
              alt="SEMI PLAY Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              SEMI PLAY는
            </h2>
          </div>

          <p className="text-2xl md:text-3xl font-medium text-black mb-6">
            실습-탐색-기록이 연계된 진로체험형 STEM 교육 모델을 지원합니다.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            중·고등학생을 위한 반도체 교육 혁신을 목표로, 논리회로 실습 키트와
            체계적인 교육 프로그램을 제공합니다. 학생들이 직접 반도체의 원리를
            체험하고 진로를 탐색할 수 있도록 돕습니다.
          </p>
        </div>

        {/* 팀원 소개 */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-black">
            팀원 소개
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {teamMembers.map((member, index) => {
              const colors = getRoleColors(member.role);
              return (
                <div
                  key={index}
                  className={`${colors.bg} text-black rounded-2xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 ${colors.border}`}
                >
                  <div className="text-center space-y-3">
                    <h4 className="font-bold text-xl text-gray-900">
                      {member.name}
                    </h4>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-gray-800">
                        {member.role}
                      </p>
                      {/* <p className="text-xs text-gray-700 leading-relaxed">
                        {member.major}
                      </p> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
