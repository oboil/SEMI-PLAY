export interface guidesItem {
  id: number;
  title: string;
  description: string;
  fileSize: string;
  type: string;
}

// 교사 가이드 자료
export const guides: guidesItem[] = [
  {
    id: 1,
    title: "교사용 수업 운영 가이드",
    description: "수업 진행 방법과 학생 지도 노하우를 담은 완전한 가이드북",
    fileSize: "2.5 MB",
    type: "PDF",
  },
  {
    id: 2,
    title: "생활기록부 작성 가이드",
    description: "학생별 맞춤 생기부 작성 예시와 문장 템플릿 제공",
    fileSize: "1.8 MB",
    type: "PDF",
  },
  {
    id: 3,
    title: "수업 PPT 템플릿",
    description: "바로 활용 가능한 수업용 프레젠테이션 자료",
    fileSize: "15.3 MB",
    type: "PPTX",
  },
  {
    id: 4,
    title: "학생 활동지 및 평가지",
    description: "실습 보고서 템플릿과 평가 루브릭 포함",
    fileSize: "3.2 MB",
    type: "ZIP",
  },
];
