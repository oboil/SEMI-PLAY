"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase-client";
import InquiryList from "@/components/admin/InquiryList";
import { useAutoLogout } from "@/hooks/useAutoLogout";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [renderKey, setRenderKey] = useState(0);

  // 자동 로그아웃 훅 사용
  useAutoLogout();

  useEffect(() => {
    if (!auth) {
      router.push("/admin");
      return;
    }

    console.log("=== 대시보드: 인증 상태 확인 시작 ===");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(
        "인증 상태 변경:",
        user ? `로그인됨 (${user.email})` : "로그아웃됨"
      );

      if (user) {
        setIsAuthenticated(true);
        setIsLoading(false);
        setRenderKey((prev) => prev + 1);
      } else {
        console.log("인증되지 않음 - 로그인 페이지로 이동");
        router.push("/admin");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">인증 확인 중...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">문의 관리</h1>
        <p className="text-sm text-gray-500 mt-1">
          접수된 문의를 확인하고 관리할 수 있습니다.
        </p>
      </div>
      <InquiryList key={renderKey} />
    </div>
  );
}
