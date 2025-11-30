export interface guidesItem {
  id: number;
  title: string;
  description: string;
  fileSize: string;
  type: string;
}

// 교사 가이드 자료
export const guides = [
  {
    id: 1,
    title: "교사용 수업 운영 가이드",
    description: "수업 진행 방법과 학생 지도 노하우를 담은 완전한 가이드북",
    fileSize: "2.5 MB",
    type: "PDF",
    fileName: "teacher-guide.pdf", // Firebase Storage에 업로드된 파일명
  },
  {
    id: 2,
    title: "생활기록부 작성 가이드",
    description: "학생별 맞춤 생기부 작성 예시와 문장 템플릿 제공",
    fileSize: "1.8 MB",
    type: "PDF",
    fileName: "record-guide.pdf",
  },
];
