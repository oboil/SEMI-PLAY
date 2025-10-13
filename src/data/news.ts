// src/data/news.ts
export interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: string;
  url?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    date: "2024.12.15",
    title: "남동고등학교 SEMI PLAY 체험 수업 성공적으로 진행",
    category: "교육",
  },
  {
    id: 2,
    date: "2025.10.01",
    title: "2025 창업오디션 과학기술사업화진흥원장상 수상",
    category: "수상",
  },
  {
    id: 3,
    date: "2025.09.01",
    title: "아주대학교 파란학기, 첫걸음",
    category: "개발",
  },
  {
    id: 4,
    date: "2024.11.28",
    title: "교사 연수 프로그램 1차 시범 운영 성공",
    category: "교육",
  },
  {
    id: 5,
    date: "2024.11.20",
    title: "반도체 인재 양성 포럼 참석 및 발표",
    category: "행사",
  },
  {
    id: 6,
    date: "2024.11.15",
    title: "교육청과 MOU 체결, 공교육 연계 강화",
    category: "협약",
  },
  {
    id: 7,
    date: "2024.11.05",
    title: "생활기록부 연계 컨설팅 서비스 출시",
    category: "서비스",
  },
  {
    id: 8,
    date: "2024.10.28",
    title: "방문 교육 서비스 100개교 돌파",
    category: "교육",
  },
  {
    id: 9,
    date: "2024.10.20",
    title: "SEMI PLAY 공식 홈페이지 오픈",
    category: "소식",
  },
];

export const getSortedNews = () => {
  return [...newsData].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, "-"));
    const dateB = new Date(b.date.replace(/\./g, "-"));
    return dateB.getTime() - dateA.getTime(); // 내림차순
  });
};
