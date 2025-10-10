import { NextRequest, NextResponse } from "next/server";
import { generateSessionToken, createSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "이메일과 비밀번호를 입력해주세요." },
        { status: 400 }
      );
    }

    // Firebase Auth는 클라이언트에서 처리하므로
    // 여기서는 세션만 생성
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
