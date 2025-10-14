# SEMI PLAY

> 중·고등학생을 위한 반도체 교육 키트 홍보 웹사이트

## 프로젝트 소개

SEMI PLAY는 중·고등학생을 대상으로 반도체 논리회로 실습 키트를 제공하는 교육 프로젝트의 공식 웹사이트입니다.

**실습-탐색-기록**이 연계된 진로체험형 STEM 교육 모델을 통해 학생들이 직접 반도체의 원리를 체험하고 진로를 탐색할 수 있도록 돕습니다.

## 주요 기능

### 사용자 페이지

- 서비스 소개 (교육 패키지, 방문 교육, 교사 전용 패키지, 생기부 연계 컨설팅)
- 교육 프로세스 및 키트 소개
- 팀 소개 및 소식
- 실시간 문의 접수 시스템

### 관리자 페이지

- Firebase Authentication 로그인
- 문의 내역 조회 및 상태 관리
- 30분 비활성 시 자동 로그아웃

## 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI**: shadcn/ui, Lucide React
- **Backend**: Firebase (Authentication, Firestore)
- **Deployment**: Vercel

## 시작하기

### 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**

```bash
git clone https://github.com/oboil/SEMI-PLAY.git
cd semi-play
```

2. **의존성 설치**

```bash
npm install
```

3. **환경변수 설정**

`.env.local` 파일을 생성하고 Firebase 설정을 추가하세요:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. **개발 서버 실행**

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

5. **프로덕션 빌드**

```bash
npm run build
npm start
```

## 개발 팀

| 역할      | 이름           | 전공               |
| --------- | -------------- | ------------------ |
| 대표      | 윤선웅         | 지능형반도체공학과 |
| 교육      | 김주영, 어성진 | 지능형반도체공학과 |
| 키트 제작 | 김민교         | 전자공학과         |
| 회계      | 구나연, 조정혜 | 경영학과           |
| 웹 개발   | 박미소         | 소프트웨어학과     |

## 문의

- **Instagram**: [@semiplay_ajou](https://www.instagram.com/semiplay_ajou/)
- **이메일**: ajou.ac.kr
- **전화**: 010-0000-0000

---

**Copyright 2025. SEMI PLAY. All rights reserved.**
