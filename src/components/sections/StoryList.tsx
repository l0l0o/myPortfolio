"use client";

import StoryItem from "@/components/ui/StoryItem";
import { useStories } from "@/context/StoryProvider.context";
import Story from "@/types/story.type";
import { useEffect, useState } from "react";

export default function StoryList() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const newStories = useStories();

  useEffect(() => {
    setStories(newStories);
    setLoading(false);
  }, [newStories]);

  const StorySkeletons = () => {
    return (
      <>
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex flex-col gap-3 items-center px-3.5 py-2.5"
          >
            <div className="w-[75px] h-[75px] rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse">
              <div className="w-full h-full rounded-full border-1 border-transparent p-[2px]">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full"></div>
              </div>
            </div>
            <div className="w-16 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="flex flex-row gap-8 px-6 mb-11">
      {loading ? (
        <StorySkeletons />
      ) : (
        stories.map((story) => (
          <StoryItem key={story.id} story={story} className="bg-white" />
        ))
      )}
    </div>
  );
}
