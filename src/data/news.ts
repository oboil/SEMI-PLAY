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
];

export const getSortedNews = () => {
  return [...newsData].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, "-"));
    const dateB = new Date(b.date.replace(/\./g, "-"));
    return dateB.getTime() - dateA.getTime(); // 내림차순
  });
};
