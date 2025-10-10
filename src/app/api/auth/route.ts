import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin, generateSessionToken, createSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "아이디와 비밀번호를 입력해주세요." },
        { status: 400 }
      );
    }

    // 관리자 인증 확인
    if (!verifyAdmin(username, password)) {
      return NextResponse.json(
        { error: "아이디 또는 비밀번호가 올바르지 않습니다." },
        { status: 401 }
      );
    }

    // 세션 토큰 생성 및 저장
    const sessionToken = generateSessionToken();
    await createSession(sessionToken);

    return NextResponse.json(
      { message: "로그인 성공", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("로그인 오류:", error);
    return NextResponse.json(
      { error: "로그인 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
