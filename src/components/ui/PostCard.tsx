"use client";

import Image from "next/image";
import { useState } from "react";
import PostHoverText from "@/components/ui/PostHoverText";
import Post from "@/types/post.type";
import PostModal from "@/components/ui/PostModal";

export default function PostCard({
  post,
  allPosts = [],
  loading = false,
}: {
  post?: Post;
  allPosts?: Post[];
  loading?: boolean;
}) {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState<number>(() => {
    return post ? allPosts.findIndex((p) => p.id === post.id) : -1;
  });
  const [currentPost, setCurrentPost] = useState<Post | undefined>(post);

  const handlePostChange = (newIndex: number) => {
    setCurrentPostIndex(newIndex);
    setCurrentPost(allPosts[newIndex]);
  };

  const handleCloseModal = () => {
    setIsClicked(false);
  };

  if (loading) {
    return (
      <div className="h-[412px] w-full bg-gray-200 dark:bg-gray-700 animate-pulse relative">
        <div className="absolute bottom-0 right-0 p-4 flex flex-row gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        </div>
      </div>
    );
  }

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
              text={String(post?.likes || 0)}
            />
            <PostHoverText
              icon="icons/comment_post.svg"
              text={String(post?.comments?.length || 0)}
            />
          </div>
        )}
      </div>

      {isClicked && currentPost && (
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
