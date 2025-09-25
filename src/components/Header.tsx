"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "SEMI PLAY" },
    { href: "/program", label: "서비스" },
    { href: "/materials", label: "자료집" },
    { href: "/contact", label: "문의" },
  ];

  const isActive = (href: string) => pathname === href;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3"
              onClick={closeMobileMenu}
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={28}
                height={28}
                priority
                className="h-7 w-7"
              />
              <span className="font-semibold tracking-tight text-lg leading-none font-sans">
                SEMI PLAY
              </span>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? "text-[#005AFF] font-bold"
                    : "text-black hover:text-[#005AFF]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기"
          >
            <Menu className="h-6 w-6 text-black" />
          </button>
        </div>
      </header>

      {/* 모바일 사이드바 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* 모바일 사이드바 */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* 사이드바 헤더 */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={closeMobileMenu}
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={24}
                height={24}
                priority
                className="h-6 w-6"
              />
              <span className="font-semibold text-base">SEMI PLAY</span>
            </Link>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="메뉴 닫기"
            >
              <X className="h-6 w-6 text-black" />
            </button>
          </div>

          {/* 사이드바 네비게이션 */}
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`px-6 py-4 text-base transition-colors border-l-4 ${
                  isActive(item.href)
                    ? "text-[#005AFF] font-bold bg-blue-50 border-[#005AFF]"
                    : "text-black hover:text-[#005AFF] hover:bg-gray-50 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
