# SEMI PLAY 서버 운영 가이드 및 백엔드 문서

**버전**: 1.0  
**작성일**: 2025년 11월  
**작성자**: 박미소

---

## 목차

1. [백엔드 아키텍처 개요](#1-백엔드-아키텍처-개요)
2. [Firebase 서비스 상세](#2-firebase-서비스-상세)
3. [API 엔드포인트 문서](#3-api-엔드포인트-문서)
4. [인증 및 세션 관리](#4-인증-및-세션-관리)
5. [데이터베이스 설계](#5-데이터베이스-설계)
6. [파일 스토리지 관리](#6-파일-스토리지-관리)
7. [이메일 서비스](#7-이메일-서비스)
8. [서버 모니터링 및 로깅](#8-서버-모니터링-및-로깅)
9. [성능 최적화](#9-성능-최적화)
10. [보안 가이드](#10-보안-가이드)
11. [에러 처리 및 디버깅](#11-에러-처리-및-디버깅)
12. [백업 및 복구](#12-백업-및-복구)

---

## 1. 백엔드 아키텍처 개요

### 1.1 전체 구조

```
┌─────────────────┐
│   Next.js App   │
│  (Frontend +    │
│   API Routes)   │
└────────┬────────┘
         │
         ├──────────────────┐
         │                  │
         ▼                  ▼
┌─────────────────┐  ┌──────────────┐
│    Firebase     │  │   Resend     │
│  - Firestore    │  │   (Email)    │
│  - Auth         │  │              │
│  - Storage      │  │              │
└─────────────────┘  └──────────────┘
```

### 1.2 기술 스택

**서버리스 아키텍처**:

- **호스팅**: Vercel (Serverless Functions)
- **데이터베이스**: Firebase Firestore (NoSQL)
- **인증**: Firebase Authentication
- **파일 저장소**: Firebase Storage
- **이메일**: Resend API

**장점**:

- 서버 관리 불필요
- 자동 스케일링
- 비용 효율적 (사용량 기반 과금)
- 빠른 배포

### 1.3 API Routes 구조

```
src/app/api/
├── auth/
│   ├── route.ts           # 로그인 처리
│   └── logout/
│       └── route.ts       # 로그아웃 처리
├── contact/
│   └── route.ts           # 문의 접수 및 이메일 발송
└── download/
    └── route.ts           # 파일 다운로드 URL 생성
```

---

## 2. Firebase 서비스 상세

### 2.1 Firebase 프로젝트 설정

**Firebase Console**: https://console.firebase.google.com

**프로젝트 정보**:

- Project ID: `[your-project-id]`
- Region: `asia-northeast3` (서울)

### 2.2 Firestore Database

**데이터베이스 모드**: Production Mode

**컬렉션 구조**:

```
firestore
└── inquiries/
    ├── [document-id-1]
    ├── [document-id-2]
    └── ...
```

**인덱스 설정**:

```
컬렉션: inquiries
필드: createdAt (Descending)
상태: Enabled
```

**설정 방법**:

1. Firebase Console → Firestore Database
2. Indexes 탭 → Create Index
3. Collection: `inquiries`, Field: `createdAt`, Order: Descending

### 2.3 Firebase Authentication

**활성화된 인증 방법**:

- Email/Password ✅
- Google (향후 고려) ❌
- 기타 소셜 로그인 (향후 고려) ❌

**사용자 관리**:

```javascript
// 관리자 계정 구조
{
  uid: "firebase-generated-uid",
  email: "admin@semi-play.kr",
  emailVerified: true,
  disabled: false,
  metadata: {
    creationTime: "...",
    lastSignInTime: "..."
  }
}
```

### 2.4 Firebase Storage

**버킷 구조**:

```
gs://[your-project].appspot.com/
└── materials/
    ├── teacher-guide.pdf
    ├── record-guide.pdf
    └── [future-files]
```

**CORS 설정** (필요시):

```json
[
  {
    "origin": ["https://semi-play.kr", "https://*.vercel.app"],
    "method": ["GET", "HEAD"],
    "maxAgeSeconds": 3600
  }
]
```

### 2.5 Firebase 보안 규칙

**Firestore Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 헬퍼 함수
    function isSignedIn() {
      return request.auth != null;
    }

    function isAdmin() {
      return isSignedIn() &&
             request.auth.token.email.matches('.*@semi-play.kr$');
    }

    // inquiries 컬렉션
    match /inquiries/{inquiry} {
      // 누구나 생성 가능 (문의 접수)
      allow create: if request.resource.data.keys().hasAll([
        'name', 'organization', 'phone', 'email', 'content'
      ]) && request.resource.data.status == 'pending';

      // 인증된 사용자만 읽기
      allow read: if isSignedIn();

      // 인증된 사용자만 상태 업데이트 가능
      allow update: if isSignedIn() &&
                       request.resource.data.diff(resource.data)
                       .affectedKeys().hasOnly(['status']);

      // 삭제 불가
      allow delete: if false;
    }
  }
}
```

**Storage Rules**:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // materials 폴더는 인증된 사용자만 읽기 가능
    match /materials/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if false; // 업로드는 Console에서만
    }
  }
}
```

---

## 3. API 엔드포인트 문서

### 3.1 인증 API

#### POST `/api/auth`

**설명**: 관리자 로그인 처리 및 세션 생성

**Request Body**:

```json
{
  "email": "admin@semi-play.kr",
  "password": "password123"
}
```

**Response (성공)**:

```json
{
  "message": "로그인 성공",
  "success": true
}
```

**Response (실패)**:

```json
{
  "error": "이메일과 비밀번호를 입력해주세요."
}
```

**Status Codes**:

- `200`: 성공
- `400`: 잘못된 요청
- `500`: 서버 오류

**쿠키 설정**:

```javascript
{
  name: "admin_session",
  httpOnly: true,
  secure: true, // production only
  sameSite: "lax",
  maxAge: 86400 // 24시간
}
```

**구현 위치**: `src/app/api/auth/route.ts`

---

#### POST `/api/auth/logout`

**설명**: 로그아웃 및 세션 삭제

**Request**: Body 없음

**Response**:

```json
{
  "success": true
}
```

**구현 위치**: `src/app/api/logout/route.ts`

---

### 3.2 문의 API

#### POST `/api/contact`

**설명**: 문의 접수 및 이메일 발송

**Request Body**:

```json
{
  "name": "홍길동",
  "organization": "○○고등학교",
  "position": "교사",
  "phone": "010-1234-5678",
  "email": "test@example.com",
  "content": "문의 내용..."
}
```

**Response (성공)**:

```json
{
  "success": true,
  "message": "문의가 접수되었습니다."
}
```

**Response (실패)**:

```json
{
  "error": "이메일 발송 중 오류가 발생했습니다."
}
```

**처리 과정**:

1. Firestore에 문의 저장
2. 관리자에게 알림 이메일 발송
3. 문의자에게 접수 확인 이메일 발송

**구현 위치**: `src/app/api/contact/route.ts`

---

### 3.3 파일 다운로드 API

#### GET `/api/download?file={filename}`

**설명**: Firebase Storage 파일의 서명된 다운로드 URL 생성

**Query Parameters**:

- `file`: 파일명 (예: `teacher-guide.pdf`)

**Request Example**:

```
GET /api/download?file=teacher-guide.pdf
```

**Response (성공)**:

```json
{
  "url": "https://storage.googleapis.com/..."
}
```

**Response (실패)**:

```json
{
  "error": "파일을 찾을 수 없습니다."
}
```

**서명된 URL 유효기간**: 1시간

**구현 위치**: `src/app/api/download/route.ts`

---

## 4. 인증 및 세션 관리

### 4.1 인증 흐름

```
1. 사용자가 이메일/비밀번호 입력
   ↓
2. Firebase Auth로 인증 (클라이언트)
   ↓
3. 성공 시 /api/auth 호출
   ↓
4. 서버에서 세션 토큰 생성
   ↓
5. HttpOnly 쿠키로 세션 저장
   ↓
6. /admin/dashboard로 리다이렉트
```

### 4.2 세션 관리 함수

**파일 위치**: `src/lib/auth.ts`

```typescript
// 세션 토큰 생성
export function generateSessionToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// 세션 생성
export async function createSession(token: string) {
  (await cookies()).set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24시간
    path: "/",
  });
}

// 세션 확인
export async function getSession(): Promise<string | undefined> {
  return (await cookies()).get(SESSION_COOKIE_NAME)?.value;
}

// 세션 삭제
export async function deleteSession() {
  (await cookies()).delete(SESSION_COOKIE_NAME);
}
```

### 4.3 자동 로그아웃

**파일 위치**: `src/hooks/useAutoLogout.ts`

**설정**:

- 비활성 시간: 30분
- 경고 시간: 5분 전
- 감지 이벤트: mousedown, mousemove, keypress, scroll, touchstart, click

**동작**:

1. 사용자 활동 감지 시 타이머 리셋
2. 25분 후 경고 표시
3. 30분 후 자동 로그아웃

---

## 5. 데이터베이스 설계

### 5.1 Inquiries 컬렉션

**컬렉션명**: `inquiries`

**문서 스키마**:

```typescript
interface Inquiry {
  id: string; // Firestore 자동 생성
  name: string; // 이름 (필수)
  organization: string; // 소속 (필수)
  position?: string; // 직위 (선택)
  phone: string; // 전화번호 (필수)
  email: string; // 이메일 (필수)
  content: string; // 문의 내용 (필수)
  status: InquiryStatus; // 상태 (필수)
  createdAt: Timestamp | null; // 생성 시간
}

type InquiryStatus = "pending" | "completed" | "collaboration";
```

**인덱스**:

- `createdAt` (Descending) - 최신순 정렬용

**쿼리 예시**:

```typescript
// 최신순으로 모든 문의 가져오기
const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
const querySnapshot = await getDocs(q);

// 특정 상태의 문의만 가져오기
const q = query(
  collection(db, "inquiries"),
  where("status", "==", "pending"),
  orderBy("createdAt", "desc")
);

// 문의 상태 업데이트
const inquiryRef = doc(db, "inquiries", inquiryId);
await updateDoc(inquiryRef, {
  status: "completed",
});
```

### 5.2 데이터 마이그레이션

현재는 단일 컬렉션만 사용하지만, 향후 확장 시:

```typescript
// 향후 추가 가능한 컬렉션
firestore/
├── inquiries/          # 문의
├── users/              # 사용자 (향후)
├── orders/             # 주문 (향후)
└── products/           # 제품 (향후)
```

---

## 6. 파일 스토리지 관리

### 6.1 Storage 구조

```
storage/
└── materials/
    ├── teacher-guide.pdf      # 교사용 가이드
    ├── record-guide.pdf       # 생기부 작성 가이드
    └── [future-files]         # 향후 추가 파일
```

### 6.2 파일 업로드 프로세스

**Firebase Console 사용** (권장):

1. Firebase Console → Storage
2. `materials/` 폴더 선택
3. "Upload file" 클릭
4. 파일 선택 및 업로드
5. `src/data/guide.ts`에 파일 정보 추가

**프로그래밍 방식** (향후 구현 시):

```typescript
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, `materials/${fileName}`);

await uploadBytes(storageRef, file);
```

### 6.3 다운로드 URL 생성

**서명된 URL 사용** (현재 방식):

```typescript
// src/app/api/download/route.ts
const bucket = storage.bucket();
const file = bucket.file(`materials/${fileName}`);

const [signedUrl] = await file.getSignedUrl({
  action: "read",
  expires: Date.now() + 60 * 60 * 1000, // 1시간
});
```

**장점**:

- 보안: 인증된 요청만 다운로드 가능
- 시간 제한: URL이 1시간 후 만료
- 직접 다운로드: 서버를 거치지 않고 직접 다운로드

---

## 7. 이메일 서비스

### 7.1 Resend 설정

**API Key**: `.env.local`의 `RESEND_API_KEY`

**도메인 설정**:

1. Resend Dashboard → Domains
2. `semi-play.kr` 추가
3. DNS 레코드 추가:
   - TXT 레코드
   - MX 레코드
   - CNAME 레코드

### 7.2 이메일 템플릿

#### 관리자 알림 이메일

```html
<div style="font-family: sans-serif; max-width: 600px;">
  <div
    style="background: linear-gradient(135deg, #003E81, #367AC4); 
              padding: 30px; border-radius: 12px 12px 0 0;"
  >
    <h1 style="color: white;">새로운 문의가 접수되었습니다</h1>
  </div>

  <div style="background: #f9f9f9; padding: 30px;">
    <h2>기본 정보</h2>
    <table>
      <tr>
        <td>이름</td>
        <td>{name}</td>
      </tr>
      <tr>
        <td>소속</td>
        <td>{organization}</td>
      </tr>
      <tr>
        <td>전화번호</td>
        <td>{phone}</td>
      </tr>
      <tr>
        <td>이메일</td>
        <td>{email}</td>
      </tr>
    </table>

    <h2>문의 내용</h2>
    <div>{content}</div>

    <a href="https://semi-play.kr/admin/dashboard">
      관리자 페이지에서 확인하기
    </a>
  </div>
</div>
```

#### 고객 확인 이메일

```html
<div style="font-family: sans-serif; max-width: 600px;">
  <div
    style="background: linear-gradient(135deg, #003E81, #367AC4); 
              padding: 30px;"
  >
    <h1 style="color: white;">문의가 접수되었습니다</h1>
  </div>

  <div style="background: #f9f9f9; padding: 30px;">
    <p>{name}님, 안녕하세요.</p>
    <p>SEMI PLAY에 문의해 주셔서 감사합니다.</p>
    <p>고객님의 문의가 정상적으로 접수되었습니다.</p>
    <p>담당자 확인 후 빠른 시일 내에 연락드리겠습니다.</p>
  </div>
</div>
```

### 7.3 이메일 발송 함수

**파일 위치**: `src/app/api/contact/route.ts`

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 관리자 이메일 발송
await resend.emails.send({
  from: "SEMI PLAY <noreply@semi-play.kr>",
  to: adminEmails,
  subject: `[SEMI PLAY] 새로운 문의: ${data.name}`,
  html: adminEmailTemplate,
});

// 고객 이메일 발송
await resend.emails.send({
  from: "SEMI PLAY <noreply@semi-play.kr>",
  to: data.email,
  subject: "[SEMI PLAY] 문의가 정상적으로 접수되었습니다",
  html: customerEmailTemplate,
});
```

---

## 8. 서버 모니터링 및 로깅

### 8.1 Vercel Analytics

**설정 방법**:

1. Vercel Dashboard → Project → Analytics
2. Enable Analytics

**제공 정보**:

- 페이지 뷰
- 고유 방문자
- 평균 응답 시간
- 오류율

### 8.2 Firebase Analytics

**설정 방법**:

1. Firebase Console → Analytics
2. Google Analytics 연동

**추적 이벤트**:

- 페이지 뷰
- 문의 접수
- 파일 다운로드
- 사용자 행동

### 8.3 로그 모니터링

**Vercel 로그**:

```bash
# Vercel CLI로 로그 확인
vercel logs [deployment-url]

# 실시간 로그
vercel logs --follow
```

**Firebase 로그**:

- Firestore: 읽기/쓰기 작업 로그
- Authentication: 로그인 시도 로그
- Storage: 파일 접근 로그

### 8.4 에러 추적

**권장 도구**:

- **Sentry** (향후 도입 고려)
- **LogRocket** (향후 도입 고려)

**현재 방식**:

```typescript
// 에러 로깅
try {
  // 작업 수행
} catch (error) {
  console.error("에러 발생:", error);
  // 에러 정보를 서버 로그에 기록
}
```

---

## 9. 성능 최적화

### 9.1 Firestore 쿼리 최적화

**인덱스 활용**:

```typescript
// ✅ 좋은 예: 인덱스 활용
const q = query(
  collection(db, "inquiries"),
  orderBy("createdAt", "desc"),
  limit(10)
);

// ❌ 나쁜 예: 모든 데이터 가져오기
const q = query(collection(db, "inquiries"));
```

**페이지네이션**:

```typescript
// 첫 페이지
const first = query(
  collection(db, "inquiries"),
  orderBy("createdAt", "desc"),
  limit(25)
);

// 다음 페이지
const next = query(
  collection(db, "inquiries"),
  orderBy("createdAt", "desc"),
  startAfter(lastDoc),
  limit(25)
);
```

### 9.2 API 응답 최적화

**캐싱 전략**:

```typescript
// Next.js API Route에서 캐싱
export async function GET(request: NextRequest) {
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}
```

### 9.3 Firebase 비용 최적화

**읽기/쓰기 최소화**:

```typescript
// ✅ 좋은 예: 필요한 필드만 가져오기
const docRef = doc(db, "inquiries", id);
const docSnap = await getDoc(docRef);

// ❌ 나쁜 예: 전체 컬렉션 읽기
const querySnapshot = await getDocs(collection(db, "inquiries"));
```

**오프라인 지속성** (선택사항):

```typescript
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == "failed-precondition") {
    // 여러 탭에서 열려있을 때
  } else if (err.code == "unimplemented") {
    // 브라우저가 지원하지 않을 때
  }
});
```

---

## 10. 보안 가이드

### 10.1 환경 변수 관리

**민감 정보 보호**:

```env
# ✅ 서버 전용 (NEXT_PUBLIC 없음)
FIREBASE_PRIVATE_KEY=...
RESEND_API_KEY=...

# ✅ 클라이언트 노출 가능
NEXT_PUBLIC_FIREBASE_API_KEY=...
```

**Vercel 환경 변수**:

1. Dashboard → Settings → Environment Variables
2. Production, Preview, Development 각각 설정
3. Sensitive 옵션 활성화

### 10.2 CORS 설정

**API Routes CORS** (필요시):

```typescript
export async function POST(request: NextRequest) {
  // CORS 헤더 추가
  const headers = {
    "Access-Control-Allow-Origin": "https://semi-play.kr",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  // 실제 처리
  return NextResponse.json(data, { headers });
}
```

### 10.3 Rate Limiting

**향후 구현 고려**:

```typescript
import rateLimit from "@/lib/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 1분
  uniqueTokenPerInterval: 500,
});

export async function POST(request: NextRequest) {
  try {
    await limiter.check(10, "CACHE_TOKEN"); // 분당 10회
  } catch {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // 실제 처리
}
```

### 10.4 입력 검증

**Zod 사용** (권장):

```typescript
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^010-\d{4}-\d{4}$/),
  content: z.string().min(10).max(1000),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const validated = contactSchema.parse(body);
    // 처리
  } catch (error) {
    return NextResponse.json({ error: "잘못된 입력입니다." }, { status: 400 });
  }
}
```

---

## 11. 에러 처리 및 디버깅

### 11.1 에러 처리 패턴

**API Route 에러 처리**:

```typescript
export async function POST(request: NextRequest) {
  try {
    // 작업 수행
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);

    // Firebase 에러
    if (error.code === "permission-denied") {
      return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
    }

    // 일반 에러
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
```

**클라이언트 에러 처리**:

```typescript
try {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }

  const result = await response.json();
} catch (error) {
  console.error("Client Error:", error);
  alert(error.message);
}
```

### 11.2 디버깅 도구

**브라우저 DevTools**:

- Network 탭: API 요청/응답 확인
- Console 탭: 로그 및 에러 확인
- Application 탭: 쿠키, Storage 확인

**Firebase Emulator** (로컬 개발):

```bash
# Firebase Emulator 설치
npm install -g firebase-tools

# Emulator 실행
firebase emulators:start
```

### 11.3 일반적인 에러 및 해결

| 에러                | 원인                | 해결 방법        |
| ------------------- | ------------------- | ---------------- |
| `permission-denied` | Firestore 규칙 위반 | 보안 규칙 확인   |
| `not-found`         | 문서/파일 없음      | 경로 확인        |
| `unauthenticated`   | 인증 실패           | 로그인 상태 확인 |
| `CORS error`        | CORS 설정 문제      | CORS 헤더 추가   |
| `Network error`     | 네트워크 문제       | 연결 상태 확인   |

---

## 12. 백업 및 복구

### 12.1 Firestore 백업

**자동 백업 설정**:

```bash
# gcloud CLI 설치 필요
gcloud firestore export gs://[BUCKET_NAME]/[EXPORT_PREFIX]
```

**백업 스케줄** (권장):

- 매일: 증분 백업
- 매주: 전체 백업
- 매월: 장기 보관용 백업

### 12.2 복구 프로세스

**Firestore 복구**:

```bash
gcloud firestore import gs://[BUCKET_NAME]/[EXPORT_PREFIX]
```

**주의사항**:

- 복구 시 기존 데이터 덮어씀
- 백업 전 현재 상태 스냅샷 생성 권장

### 12.3 코드 백업

**Git 전략**:

```bash
# 주요 브랜치
main        # Production
develop     # Development
feature/*   # 기능 개발

# 릴리즈 태그
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### 12.4 환경 변수 백업

**안전한 보관**:

1. `.env.local` 파일을 암호화된 저장소에 보관
2. 1Password, LastPass 등 비밀번호 관리자 사용
3. 팀원과 안전하게 공유

---

## 부록

### A. Firebase CLI 명령어

```bash
# 로그인
firebase login

# 프로젝트 선택
firebase use [project-id]

# Firestore 인덱스 배포
firebase deploy --only firestore:indexes

# 보안 규칙 배포
firebase deploy --only firestore:rules
firebase deploy --only storage:rules

# Emulator 실행
firebase emulators:start

# 백업
firebase firestore:delete --all-collections
```

### B. 유용한 Firestore 쿼리

```typescript
// 날짜 범위 검색
const q = query(
  collection(db, "inquiries"),
  where("createdAt", ">=", startDate),
  where("createdAt", "<=", endDate),
  orderBy("createdAt", "desc")
);

// 복합 필터
const q = query(
  collection(db, "inquiries"),
  where("status", "==", "pending"),
  where("organization", "==", "○○고등학교"),
  orderBy("createdAt", "desc")
);

// 배치 업데이트
const batch = writeBatch(db);
batch.update(docRef1, { status: "completed" });
batch.update(docRef2, { status: "completed" });
await batch.commit();
```

### C. API 테스트

**cURL 예시**:

```bash
# 문의 접수
curl -X POST https://semi-play.kr/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "테스트",
    "organization": "테스트학교",
    "phone": "010-1234-5678",
    "email": "test@example.com",
    "content": "테스트 문의입니다."
  }'

# 로그인
curl -X POST https://semi-play.kr/api/auth \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@semi-play.kr",
    "password": "password123"
  }' \
  -c cookies.txt

# 다운로드 URL 생성
curl "https://semi-play.kr/api/download?file=teacher-guide.pdf" \
  -b cookies.txt
```

### D. 성능 지표

**목표 지표**:
| 항목 | 목표 | 측정 방법 |
|------|------|-----------|
| API 응답 시간 | < 500ms | Vercel Analytics |
| Firestore 읽기 | < 10,000/day | Firebase Console |
| 이메일 발송 성공률 | > 99% | Resend Dashboard |
| 페이지 로드 시간 | < 3s | Lighthouse |

---

**문서 끝**

이 문서는 서버 운영 및 백엔드 시스템에 대한 기술적 참조 자료입니다. 정기적으로 업데이트하여 최신 상태를 유지하세요.
