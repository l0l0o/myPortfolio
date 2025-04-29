"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import MediaDisplay from "@/components/ui/MediaDisplay";
import { useStories } from "@/context/StoryProvider.context";
import Story from "@/types/story.type";

const HighlightStory = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const shouldShowLastContent = searchParams.get("lastContent") === "true";

  console.log("id", id);

  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const newStories = useStories();

  useEffect(() => {
    setStories(newStories);
    setLoading(false);
  }, [newStories]);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-10">
      <Logo className="absolute top-4 left-4" color="white" />
      <Link
        href={"/"}
        className="absolute top-5 right-5 cursor-pointer p-2 size-9"
      >
        <Image src="/icons/close.svg" alt="logo" fill />
      </Link>
      {!loading && stories[Number(id)] && (
        <MediaDisplay
          story={stories[Number(id)]}
          storyIndex={Number(id)}
          isActive={true}
          totalStories={stories.length}
          initialContentIndex={
            shouldShowLastContent ? stories[Number(id)].content.length - 1 : 0
          }
        />
      )}
    </div>
  );
};

export default HighlightStory;
