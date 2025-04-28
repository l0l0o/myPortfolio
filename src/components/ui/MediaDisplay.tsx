"use client";

import ProgressBar from "@/components/ui/ProgressBar";
import React, { useEffect, useRef, useState } from "react";
import VideoButton from "@/components/ui/VideoButton";
import StoryTitle from "@/components/ui/StoryTitle";
import Story from "@/types/story.type";
import Image from "next/image";
import { redirect } from "next/navigation";

const MediaDisplay = ({
  story,
  isActive,
}: {
  story: Story;
  isActive: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Reset timer and progress when changing to a new story item
  useEffect(() => {
    if (isActive && story && currentIndex < story.content.length) {
      setDuration(story.content[currentIndex].time);
      setCurrentTime(0);
      setProgress(0);
    }
  }, [isActive, story, currentIndex]);

  // Handle the timer logic
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Only start timer if we're active, have a story, and are playing
    if (isActive && story && isPlaying && currentIndex < story.content.length) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 0.01;
          const newProgress = (newTime / duration) * 100;

          setProgress(newProgress);

          // Move to the next story item when the current one is done
          if (newProgress >= 100) {
            clearInterval(timerRef.current as NodeJS.Timeout);

            // If there are more items to show
            if (currentIndex < story.content.length - 1) {
              setCurrentIndex((prev) => prev + 1);
            } else {
              // Reached the end of all content
              setIsPlaying(false);
              redirect("/");
            }
            return 0;
          }

          return newTime;
        });
      }, 10);
    }

    // Clean up timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, story, isPlaying, currentIndex, duration]);

  // Set initial state when becoming active
  useEffect(() => {
    if (isActive && story) {
      setCurrentIndex(0);
      setIsPlaying(true);
    }
  }, [isActive, story]);
  return (
    <>
      {story && isActive && (
        <div className="h-screen max-w-[366px] w-full py-4">
          <div className="w-full h-full bg-white relative rounded-md overflow-hidden">
            <div className="absolute top-0 left-0 z-10 w-full flex flex-col gap-4 pt-5 px-4 pb-8 bg-gradient-to-b from-black to-transparent">
              <div className="w-full flex flex-row gap-0.5">
                {story.content.map((item, index) => (
                  <ProgressBar
                    key={index}
                    progress={
                      index === currentIndex
                        ? progress
                        : index < currentIndex
                        ? 100
                        : 0
                    }
                  />
                ))}
              </div>
              <div className="w-full flex flex-row justify-between">
                <StoryTitle
                  src={story.image}
                  title={story.title}
                  width={10}
                  height={10}
                />
                <VideoButton isPlaying={isPlaying} onClick={handlePlayPause} />
              </div>
            </div>
            {currentIndex < story.content.length && (
              <Image
                src={story.content[currentIndex].image}
                alt=""
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaDisplay;
