"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import InquiryList from "@/components/admin/InquiryList";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Firebase Auth 상태 확인
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인되어 있음
        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        // 로그인 안 되어 있음 -> 로그인 페이지로
        router.push("/admin");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center py-12">
          <p className="text-gray-500">인증 확인 중...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-black">문의 관리</h1>
      <InquiryList />
    </div>
  );
}
