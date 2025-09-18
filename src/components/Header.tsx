"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Roboto, Noto_Sans_KR } from "next/font/google";
import { Label } from "@radix-ui/react-label";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const notoSansKr = Noto_Sans_KR({ weight: "500" });

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/about", label: "SEMI PLAY" },
    { href: "/program", label: "서비스" },
    { href: "/materials", label: "자료집" },
    { href: "/contact", label: "문의" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
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
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href)
                  ? "text-[#005AFF] font-bold" // 활성 상태: 파란색, 굵게
                  : "text-black hover:text-[#005AFF]" // 기본 상태: 검정색, 호버 시 파란색
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
