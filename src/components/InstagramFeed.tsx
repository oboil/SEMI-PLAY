"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import {
  instagramPosts,
  getInstagramThumbnail,
  getInstagramPostUrl,
} from "@/data/instagram";

export default function InstagramFeed() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Instagram className="w-8 h-8 text-pink-600" />
          <h2 className="text-3xl font-bold text-black">Instagram</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={getInstagramPostUrl(post.postId)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200"
            >
              <Image
                src={getInstagramThumbnail(post.postId, "l")}
                alt={post.caption}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform group-hover:scale-110 border-2 border-black-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity p-4 text-sm text-center">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/semiplay_ajou/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gradient-to-r from-purple-600 to-pink-600 bg-white border-2 border-black px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
          >
            <Instagram className="w-5 h-5" />더 많은 소식 보기
          </a>
        </div> */}
      </div>
    </section>
  );
}
