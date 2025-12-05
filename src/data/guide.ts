export interface guidesItem {
  id: number;
  title: string;
  description: string;
  fileSize: string;
  type: string;
  downloadUrl: string;
}

// 교사 가이드 자료
export const guides = [
  {
    id: 1,
    title: "학교 강의 자료",
    description: "반도체를 설명하는 강의 자료",
    fileSize: "5.2 MB",
    type: "PDF",
    fileName: "lecture.pdf",
    downloadUrl: "https://firebasestorage.googleapis.com/v0/b/semi-play.firebasestorage.app/o/materials%2Flecture.pdf?alt=media&token=ee333089-fa8d-459f-9373-6a8be85494dc"
  },
  {
    id: 2,
    title: "회로 실습 학습지",
    description: "키트와 함께 회로를 이해할 수 있는 학습지",
    fileSize: "1.5 MB",
    type: "PDF",
    fileName: "worksheet.pdf",
    downloadUrl: "https://firebasestorage.googleapis.com/v0/b/semi-play.firebasestorage.app/o/materials%2Fworksheet.pdf?alt=media&token=bc48e842-b092-47fa-9738-86b0eb9c4732"
  },
];