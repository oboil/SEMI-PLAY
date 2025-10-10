"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      router.push("/admin");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={28}
            height={28}
            priority
            className="h-7 w-7"
          />
          <span className="font-semibold tracking-tight text-lg">
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
