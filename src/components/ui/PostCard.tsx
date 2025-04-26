"use client";

import Image from "next/image";
import { useState } from "react";
import PostHoverText from "./PostHoverText";

export default function PostCard({ picture }: { picture: string }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="h-[412px] w-full bg-gray-300 relative"
      href=""
    >
      {picture && (
        <Image src={picture} alt="Post Card" fill className="object-cover" />
      )}
      {isHover && (
        <div className="absolute top-0 left-0 w-full h-full gap-7.5 bg-black/70 flex flex-row justify-center items-center">
          <PostHoverText icon="icons/like_post.svg" text="11" />
          <PostHoverText icon="icons/comment_post.svg" text="11" />
        </div>
      )}
    </a>
  );
}
