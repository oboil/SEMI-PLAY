// src/app/about/team.tsx
"use client";

import Image from "next/image";

export default function Team() {
  const teamMembers = [
    { name: "구나연", role: "팀원" },
    { name: "김민교", role: "팀원" },
    { name: "김주영", role: "팀원" },
    { name: "박미소", role: "팀원" },
    { name: "어성진", role: "팀원" },
    { name: "윤선웅", role: "팀원" },
  ];

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                {/* 프로필 이미지 플레이스홀더 */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-600">
                    {member.name.charAt(0)}
                  </span>
                </div>

                <div className="text-center">
                  <h4 className="font-bold text-lg text-black">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
