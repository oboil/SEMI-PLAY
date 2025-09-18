"use client";

import Image from "next/image";
import Link from "next/link";
import { Roboto, Noto_Sans_KR } from "next/font/google";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const notoSansKr = Noto_Sans_KR({ weight: "500" });

export default function Header() {
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
        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <Link
            href="@/app/"
            className="hover:text-foreground transition-colors"
          >
            SEMI PLAY
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            서비스
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            자료집
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            문의
          </Link>
        </nav>
      </div>
    </header>
  );
}
