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

  return (
    <div className="flex flex-row gap-8 px-6 mb-11">
      {loading ? (
        <div className="flex justify-center items-center">Loading...</div>
      ) : (
        stories.map((story) => <StoryItem key={story.id} story={story} />)
      )}
    </div>
  );
}
