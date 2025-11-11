export interface videosItem {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
}

export const videos: videosItem[] = [
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
