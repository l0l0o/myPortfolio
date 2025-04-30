"use client";

import Image from "next/image";
import { useState } from "react";
import PostHoverText from "./PostHoverText";
import Post from "@/types/post.type";
import PostModal from "./PostModal";

export default function PostCard({
  post,
  allPosts = [],
}: {
  post: Post;
  allPosts?: Post[];
}) {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState<number>(() => {
    return allPosts.findIndex((p) => p.id === post.id);
  });
  const [currentPost, setCurrentPost] = useState<Post>(post);

  const handlePostChange = (newIndex: number) => {
    setCurrentPostIndex(newIndex);
    setCurrentPost(allPosts[newIndex]);
  };

  const handleCloseModal = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsClicked(true)}
        className="h-[412px] w-full bg-gray-300 cursor-pointer relative"
      >
        {post && (
          <Image
            src={post.image}
            alt="Post Card"
            fill
            className="object-cover"
          />
        )}
        {isHover && (
          <div className="absolute top-0 left-0 w-full h-full gap-7.5 bg-black/70 flex flex-row justify-center items-center">
            <PostHoverText
              icon="icons/like_post.svg"
              text={String(post.likes)}
            />
            <PostHoverText
              icon="icons/comment_post.svg"
              text={String(post.comments.length)}
            />
          </div>
        )}
      </div>

      {isClicked && (
        <PostModal
          post={currentPost}
          allPosts={allPosts}
          currentPostIndex={currentPostIndex}
          onClose={handleCloseModal}
          onChangePost={handlePostChange}
        />
      )}
    </>
  );
}
