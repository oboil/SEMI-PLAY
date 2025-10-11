"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase-client";

const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30분 (밀리초)
const WARNING_TIME = 5 * 60 * 1000; // 5분 전 경고

export function useAutoLogout() {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const warningRef = useRef<NodeJS.Timeout | null>(null);
  const [showWarning, setShowWarning] = useState(false);

  const logout = async () => {
    try {
      if (auth) {
        await signOut(auth);
      }

      // 세션 쿠키 삭제
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      // 로그인 페이지로 이동
      router.push("/admin");

      alert("30분 동안 활동이 없어 자동 로그아웃되었습니다.");
    } catch (error) {
      console.error("자동 로그아웃 실패:", error);
    }
  };

  const resetTimer = () => {
    // 경고 숨기기
    setShowWarning(false);

    // 기존 타이머들 제거
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (warningRef.current) {
      clearTimeout(warningRef.current);
    }

    // 5분 전 경고 타이머
    warningRef.current = setTimeout(() => {
      setShowWarning(true);
    }, INACTIVITY_TIMEOUT - WARNING_TIME);

    // 로그아웃 타이머
    timeoutRef.current = setTimeout(() => {
      logout();
    }, INACTIVITY_TIMEOUT);
  };

  useEffect(() => {
    // 사용자 활동 감지 이벤트
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    // 초기 타이머 시작
    resetTimer();

    // 모든 이벤트에 리스너 등록
    events.forEach((event) => {
      document.addEventListener(event, resetTimer);
    });

    // 클린업: 이벤트 리스너 제거 및 타이머 정리
    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer);
      });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (warningRef.current) {
        clearTimeout(warningRef.current);
      }
    };
  }, []);

  return { showWarning };
}
