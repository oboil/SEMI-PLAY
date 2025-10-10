import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /admin/dashboard 경로 보호
  if (pathname.startsWith("/admin/dashboard")) {
    const session = request.cookies.get("admin_session");

    // 세션이 없으면 로그인 페이지로 리다이렉트
    if (!session) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
