import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/firebase-admin";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const fileName = searchParams.get("file");

    if (!fileName) {
      return NextResponse.json(
        { error: "파일명이 필요합니다." },
        { status: 400 }
      );
    }

    // Firebase Storage에서 파일 가져오기
    const bucket = storage.bucket();
    const file = bucket.file(`materials/${fileName}`);

    // 파일 존재 여부 확인
    const [exists] = await file.exists();
    if (!exists) {
      return NextResponse.json(
        { error: "파일을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    // 서명된 URL 생성 (1시간 유효)
    const [signedUrl] = await file.getSignedUrl({
      action: "read",
      expires: Date.now() + 60 * 60 * 1000, // 1시간
    });

    return NextResponse.json({ url: signedUrl }, { status: 200 });
  } catch (error) {
    console.error("다운로드 URL 생성 실패:", error);
    return NextResponse.json(
      { error: "다운로드 URL 생성 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
