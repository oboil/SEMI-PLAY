import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/auth";

export async function POST() {
  try {
    await deleteSession();

    return NextResponse.json(
      { message: "로그아웃 성공", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("로그아웃 오류:", error);
    return NextResponse.json(
      { error: "로그아웃 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
