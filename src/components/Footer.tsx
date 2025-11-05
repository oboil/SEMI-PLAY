"use client";

import Image from "next/image";
import { MessageCircle, Phone, Mail, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F3FA] py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 카카오톡 채널 문의 버튼 */}
        {/* <div className="flex items-center gap-2 mb-6">
          <MessageCircle className="w-6 h-6 text-black" />
          <span className="font-bold text-xl md:text-2xl text-black font-sans">
            카카오톡 채널 문의하기
          </span>
        </div> */}

        {/* 연락처 정보 */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-black" />
              <span className="font-medium text-base text-black">
                전화 : 010-6898-1125
              </span>
            </div>

            {/* 구분선 - 모바일에서는 숨김 */}
            <div className="hidden sm:block w-px h-4 bg-black"></div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-black" />
              <span className="font-medium text-base text-black">
                이메일 : seonung5973@ajou.ac.kr
              </span>
            </div>
          </div>

          {/* 하단 구분선 */}
          <div className="w-full max-w-md h-px bg-[#797979]"></div>
        </div>

        {/* 인스타그램 계정 영역 */}
        <a
          className="flex items-center gap-3 mb-6 "
          href="https://www.instagram.com/semiplay_ajou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Instagram className="text-black w-5 h-5" />
          </div>
          <span className="font-medium text-base text-black">
            semiplay_ajou
          </span>
        </a>

        {/* 저작권 정보 */}
        <div className="flex items-center justify-between">
          <div className="text-[#797979] text-sm">
            Copyright 2025. SEMI PLAY. all rights reserved
          </div>
          <Link
            href="/admin"
            className="text-[#797979] text-sm hover:text-black transition-colors"
          >
            관리자
          </Link>
        </div>
      </div>
    </footer>
  );
}
