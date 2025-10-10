import { cookies } from "next/headers";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// 세션 쿠키 이름
const SESSION_COOKIE_NAME = "admin_session";

// 간단한 세션 토큰 생성 (실제로는 JWT 사용 권장)
export function generateSessionToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// 관리자 인증 확인
export function verifyAdmin(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
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

// 세션 유효성 검사 (간단한 예시)
export function isValidSession(token: string | undefined): boolean {
  return !!token && token.length > 0;
}
