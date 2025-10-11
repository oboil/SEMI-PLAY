"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Firebase Authentication으로 로그인
      await signInWithEmailAndPassword(auth, formData.email, formData.password);

      // 세션 생성
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "로그인에 실패했습니다.");
      }
    } catch (error) {
      // error는 이제 unknown 타입으로 추론됩니다.
      console.error("로그인 에러:", error);

      // 1. Error 타입인지 확인하고, code 속성을 가진 객체인지 확인합니다.
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        typeof (error as { code: unknown }).code === "string"
      ) {
        // error를 { code: string } 타입으로 캐스팅하여 접근합니다.
        const firebaseError = error as { code: string };

        // Firebase 에러 메시지 처리
        if (firebaseError.code === "auth/invalid-credential") {
          setError("이메일 또는 비밀번호가 올바르지 않습니다.");
        } else if (firebaseError.code === "auth/user-not-found") {
          setError("존재하지 않는 사용자입니다.");
        } else if (firebaseError.code === "auth/wrong-password") {
          setError("비밀번호가 올바르지 않습니다.");
        } else if (firebaseError.code === "auth/invalid-email") {
          setError("올바른 이메일 형식이 아닙니다.");
        } else {
          setError("로그인 중 오류가 발생했습니다.");
        }
      } else {
        // Firebase 오류 형식이 아닌 다른 종류의 오류일 경우 처리
        setError("알 수 없는 로그인 오류가 발생했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2 text-black">
          이메일
        </label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="이메일을 입력하세요"
          required
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-black">
          비밀번호
        </label>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="비밀번호를 입력하세요"
          required
          className="w-full"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "로그인 중..." : "로그인"}
      </Button>
    </form>
  );
}
