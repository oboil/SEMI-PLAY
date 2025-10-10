"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import AdminHeader from "./admin/AdminHeader";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");
  const isAdminLogin = pathname === "/admin";

  // 관리자 로그인 페이지
  if (isAdminLogin) {
    return <>{children}</>;
  }

  // 관리자 대시보드 (헤더만)
  if (isAdminPage) {
    return (
      <>
        <AdminHeader />
        <div className="pt-16">{children}</div>
      </>
    );
  }

  // 일반 페이지 (헤더 + 푸터)
  return (
    <>
      <Header />
      <div className="pt-17">{children}</div>
      <Footer />
    </>
  );
}
