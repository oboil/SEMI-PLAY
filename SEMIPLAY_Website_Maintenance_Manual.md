# SEMI PLAY 웹사이트 유지보수 매뉴얼

**버전**: 1.0  
**작성일**: 2025년 11월  
**작성자**: 박미소

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [기술 스택](#2-기술-스택)
3. [개발 환경 설정](#3-개발-환경-설정)
4. [주요 기능 및 페이지 구조](#4-주요-기능-및-페이지-구조)
5. [콘텐츠 관리](#5-콘텐츠-관리)
6. [Firebase 관리](#6-firebase-관리)
7. [배포 및 운영](#7-배포-및-운영)
8. [문제 해결 가이드](#8-문제-해결-가이드)
9. [보안 및 백업](#9-보안-및-백업)
10. [연락처 및 지원](#10-연락처-및-지원)

---

## 1. 프로젝트 개요

### 1.1 서비스 소개

SEMI PLAY는 중·고등학생을 위한 반도체 교육 키트 홍보 및 판매 웹사이트입니다.

### 1.2 주요 목표

- 반도체 교육 키트 소개 및 홍보
- 교육 영상 및 학습 자료 제공
- 문의 접수 및 관리
- 관리자 대시보드를 통한 문의 관리

---

## 2. 기술 스택

### 2.1 프론트엔드

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React

### 2.2 백엔드

- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **Email**: Resend API

### 2.3 배포

- **Hosting**: Vercel (권장)
- **Domain**: semi-play.kr

---

## 3. 개발 환경 설정

### 3.1 필수 요구사항

```bash
Node.js: v18 이상
npm 또는 yarn
Git
```

### 3.2 프로젝트 클론 및 설치

```bash
# 저장소 클론
git clone [repository-url]
cd semiplay

# 의존성 설치
npm install
```

### 3.3 환경 변수 설정

`.env.local` 파일 생성:

```env
# Firebase 클라이언트 설정
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key

# Resend (이메일)
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=admin@semi-play.kr
```

### 3.4 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

---

## 4. 주요 기능 및 페이지 구조

### 4.1 페이지 구조

```
/                    # 홈페이지
/about              # SEMI PLAY 소개, 팀원, 소식
/program            # 서비스 및 키트 소개
/materials          # 강의 영상 및 교사 가이드
/contact            # 문의 폼
/admin              # 관리자 로그인
/admin/dashboard    # 문의 관리 대시보드
```

### 4.2 컴포넌트 구조

```
src/
├── app/                    # Next.js App Router 페이지
├── components/
│   ├── ui/                # shadcn/ui 컴포넌트
│   ├── admin/             # 관리자 전용 컴포넌트
│   ├── Banner.tsx         # 페이지 배너
│   ├── Header.tsx         # 헤더
│   ├── Footer.tsx         # 푸터
│   └── LayoutWrapper.tsx  # 레이아웃 래퍼
├── lib/
│   ├── firebase.ts        # Firebase 클라이언트
│   ├── firebase-client.ts # Firebase Auth
│   ├── firebase-admin.ts  # Firebase Admin
│   └── auth.ts            # 인증 헬퍼
├── data/                  # 정적 데이터
└── hooks/                 # 커스텀 훅
```

---

## 5. 콘텐츠 관리

### 5.1 소식(뉴스) 관리

**파일 위치**: `src/data/news.ts`

```typescript
export const newsData: NewsItem[] = [
  {
    id: 1,
    date: "2024.12.15",
    title: "남동고등학교 SEMI PLAY 체험 수업 성공적으로 진행",
    category: "교육",
  },
  // 새 소식 추가
];
```

**수정 방법**:

1. `src/data/news.ts` 파일 열기
2. `newsData` 배열에 새 항목 추가
3. `id`는 고유값으로 설정 (기존 최대값 + 1)
4. 저장 후 자동 반영

### 5.2 교육 영상 관리

**파일 위치**: `src/data/video.ts`

```typescript
export const videos: videosItem[] = [
  {
    id: 1,
    title: "1강. 반도체 기초 이론",
    description: "반도체의 기본 개념과 트랜지스터의 작동 원리를 학습합니다.",
    youtubeId: "SIzY5LfDy5s", // YouTube 영상 ID
    duration: "4:08",
  },
];
```

**YouTube ID 찾기**:

- YouTube URL: `https://www.youtube.com/watch?v=SIzY5LfDy5s`
- ID는 `v=` 뒤의 문자열: `SIzY5LfDy5s`

### 5.3 교사 가이드 자료 관리

**파일 위치**: `src/data/guide.ts`

```typescript
export const guides = [
  {
    id: 1,
    title: "교사용 수업 운영 가이드",
    description: "수업 진행 방법과 학생 지도 노하우를 담은 완전한 가이드북",
    fileSize: "2.5 MB",
    type: "PDF",
    fileName: "teacher-guide.pdf", // Firebase Storage 파일명
  },
];
```

**파일 업로드 방법**:

1. Firebase Console → Storage 접속
2. `materials/` 폴더에 파일 업로드
3. `guide.ts`에서 `fileName` 업데이트

### 5.4 Instagram 피드 관리

**파일 위치**: `src/data/instagram.ts`

```typescript
export const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    postId: "DOP6Xthj3hp", // Instagram 게시물 ID
    caption: "1주차",
  },
];
```

**Instagram 게시물 ID 찾기**:

- Instagram URL: `https://www.instagram.com/p/DOP6Xthj3hp/`
- ID는 `/p/` 뒤의 문자열: `DOP6Xthj3hp`

---

## 6. Firebase 관리

### 6.1 Firestore Database

**컬렉션**: `inquiries`

**문서 구조**:

```javascript
{
  name: "홍길동",
  organization: "○○고등학교",
  position: "교사",
  phone: "010-1234-5678",
  email: "test@example.com",
  content: "문의 내용...",
  status: "pending", // "pending" | "completed" | "collaboration"
  createdAt: Timestamp
}
```

**상태 관리**:

- `pending`: 확인 전 (빨강)
- `completed`: 답변 완료 (파랑)
- `collaboration`: 협업 (초록)

### 6.2 Firestore 보안 규칙

**Firebase Console → Firestore → 규칙**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /inquiries/{document} {
      // 누구나 생성 가능
      allow create: if true;

      // 인증된 사용자만 읽기/업데이트
      allow read, update: if request.auth != null;

      // 삭제는 불가
      allow delete: if false;
    }
  }
}
```

### 6.3 Firebase Authentication

**관리자 계정 추가**:

1. Firebase Console → Authentication → Users
2. "Add user" 클릭
3. 이메일과 비밀번호 설정

**비밀번호 재설정**:

1. Firebase Console → Authentication → Users
2. 해당 사용자 클릭 → "Reset password"

### 6.4 Firebase Storage

**파일 구조**:

```
storage/
└── materials/
    ├── teacher-guide.pdf
    └── record-guide.pdf
```

**파일 업로드**:

1. Firebase Console → Storage
2. `materials/` 폴더 선택
3. "Upload file" 클릭

---

## 7. 배포 및 운영

### 7.1 Vercel 배포 (권장)

**초기 배포**:

```bash
npm install -g vercel
vercel login
vercel --prod
```

**자동 배포**:

- GitHub에 push하면 자동으로 배포됨
- `main` 브랜치 → Production
- 다른 브랜치 → Preview

**환경 변수 설정**:

1. Vercel Dashboard → Project → Settings → Environment Variables
2. `.env.local`의 모든 변수 추가

### 7.2 도메인 연결

1. Vercel Dashboard → Project → Settings → Domains
2. 도메인 추가 (예: `semi-play.kr`)
3. DNS 설정 업데이트

### 7.3 빌드 및 배포 명령어

```bash
# 로컬 빌드 테스트
npm run build

# 빌드 결과물 로컬 실행
npm run start

# Vercel 배포
vercel --prod
```

---

## 8. 문제 해결 가이드

### 8.1 문의 목록이 안 보일 때

**증상**: 관리자 대시보드에서 문의 목록이 비어있음

**해결 방법**:

1. Firebase Console → Firestore 확인
   - `inquiries` 컬렉션에 데이터가 있는지 확인
2. Firestore 보안 규칙 확인
   - 인증된 사용자에게 읽기 권한이 있는지 확인
3. 브라우저 콘솔 확인
   - 오류 메시지 확인
4. 로그아웃 후 다시 로그인

### 8.2 이메일이 발송되지 않을 때

**증상**: 문의 접수 시 이메일이 발송되지 않음

**해결 방법**:

1. Resend API 키 확인
   - `.env.local`의 `RESEND_API_KEY` 확인
2. 도메인 인증 확인
   - Resend Dashboard에서 도메인 인증 상태 확인
3. 관리자 이메일 확인
   - `.env.local`의 `ADMIN_EMAIL` 확인
4. API 호출 로그 확인
   - 서버 로그에서 오류 메시지 확인

### 8.3 로그인이 안 될 때

**증상**: 관리자 로그인 시 오류 발생

**해결 방법**:

1. Firebase Console → Authentication 확인
   - 사용자 계정이 존재하는지 확인
   - 이메일/비밀번호가 올바른지 확인
2. Firebase 설정 확인
   - `.env.local`의 Firebase 설정 확인
3. 브라우저 쿠키 삭제 후 재시도
4. 비밀번호 재설정

### 8.4 파일 다운로드가 안 될 때

**증상**: 교사 가이드 다운로드 시 오류 발생

**해결 방법**:

1. Firebase Storage 확인
   - `materials/` 폴더에 파일이 있는지 확인
2. 파일명 확인
   - `src/data/guide.ts`의 `fileName`과 Storage의 파일명 일치 확인
3. Storage 보안 규칙 확인
4. Firebase Admin SDK 설정 확인
   - `.env.local`의 Firebase Admin 설정 확인

### 8.5 빌드 오류

**증상**: `npm run build` 실행 시 오류 발생

**해결 방법**:

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install

# 캐시 삭제
rm -rf .next

# 다시 빌드
npm run build
```

---

## 9. 보안 및 백업

### 9.1 환경 변수 보안

- **절대 금지**: `.env.local` 파일을 Git에 커밋하지 말 것
- **권장**: `.gitignore`에 `.env.local` 포함 확인
- **중요**: API 키는 정기적으로 재생성

### 9.2 Firebase 보안

**Firestore 규칙**:

- 읽기/쓰기 권한 최소화
- 인증된 사용자만 접근 가능하도록 설정

**Authentication**:

- 강력한 비밀번호 정책 적용
- 2단계 인증 활성화 권장

### 9.3 데이터 백업

**Firestore 백업**:

1. Firebase Console → Firestore → Import/Export
2. "Export" 클릭
3. Cloud Storage 버킷 선택
4. 정기적으로 백업 (월 1회 권장)

**코드 백업**:

- GitHub에 정기적으로 push
- 중요한 변경 사항은 별도 브랜치 생성

### 9.4 자동 로그아웃

- 관리자 페이지: 30분 비활성 시 자동 로그아웃
- 5분 전 경고 표시
- 구현 위치: `src/hooks/useAutoLogout.ts`

---

## 10. 연락처 및 지원

### 10.1 개발자 연락처

- **이름**: 박미소
- **이메일**: parkmisonme777@gmail.com
- **역할**: 웹사이트 개발 및 관리

### 10.2 외부 서비스

- **Firebase**: https://console.firebase.google.com
- **Vercel**: https://vercel.com/dashboard
- **Resend**: https://resend.com/dashboard

### 10.3 참고 문서

- **Next.js**: https://nextjs.org/docs
- **Firebase**: https://firebase.google.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com

### 10.4 추가 지원이 필요한 경우

1. GitHub Issues에 문제 등록
2. 개발자에게 직접 연락
3. 관련 문서 확인 후 해결 시도

---

## 부록

### A. 주요 명령어 정리

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm run start

# 코드 린팅
npm run lint

# Vercel 배포
vercel --prod
```

### B. 파일 경로 참조

| 항목             | 파일 경로               |
| ---------------- | ----------------------- |
| 소식 데이터      | `src/data/news.ts`      |
| 영상 데이터      | `src/data/video.ts`     |
| 가이드 데이터    | `src/data/guide.ts`     |
| Instagram 데이터 | `src/data/instagram.ts` |
| 환경 변수        | `.env.local`            |
| Firebase 설정    | `src/lib/firebase.ts`   |

### C. 버전 관리

| 버전 | 날짜    | 변경 사항      |
| ---- | ------- | -------------- |
| 1.0  | 2025.11 | 초기 버전 작성 |
