"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase-client";
import { signOut } from "firebase/auth";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Firebase 로그아웃
      await signOut(auth);

      // 세션 쿠키 삭제를 위한 API 호출
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      // 로그인 페이지로 이동
      router.push("/admin");
    } catch (error) {
      console.error("로그아웃 실패:", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="SEMI PLAY Logo"
            width={28}
            height={28}
            priority
            className="h-7 w-7"
          />
          <span className="font-semibold tracking-tight text-lg text-black">
            SEMI PLAY 관리자
          </span>
        </Link>

        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="text-sm"
        >
          로그아웃
        </Button>
      </div>
    </header>
  );
}
