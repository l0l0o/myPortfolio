"use client";

import ProgressBar from "@/components/ui/ProgressBar";
import React, { useEffect, useRef, useState } from "react";
import VideoButton from "@/components/ui/VideoButton";
import StoryTitle from "@/components/ui/StoryTitle";
import Story from "@/types/story.type";
import Image from "next/image";
import { redirect } from "next/navigation";
import RoundedPicture from "@/components/ui/RoundedPicture";

const MediaDisplay = ({
  story,
  storyIndex,
  isActive,
}: {
  story: Story;
  storyIndex: number;
  isActive: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progressArray, setProgressArray] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isActive && story) {
      setProgressArray(new Array(story.content.length).fill(0));
    }
  }, [isActive, story]);

  useEffect(() => {
    if (isActive && story && currentIndex < story.content.length) {
      setDuration(story.content[currentIndex].time);
      setCurrentTime(0);
    }
  }, [isActive, story, currentIndex]);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (isActive && story && isPlaying && currentIndex < story.content.length) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 0.01;
          const newProgress = (newTime / duration) * 100;

          setProgressArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[currentIndex] = newProgress;
            return newArray;
          });

          if (newProgress >= 100) {
            clearInterval(timerRef.current as NodeJS.Timeout);

            if (currentIndex < story.content.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setIsPlaying(false);
              redirect("/stories/highlights/" + (storyIndex + 1));
            }
          }

          return newTime;
        });
      }, 10);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, story, isPlaying, currentIndex, duration, storyIndex]);

  useEffect(() => {
    if (isActive && story) {
      setCurrentIndex(0);
      setIsPlaying(true);
    }
  }, [isActive, story]);

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {story && isActive && (
        <div className="flex flex-row items-center justify-center w-full gap-5">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`h-screen flex items-center transition-all duration-300 ${
              isHovered ? "" : "opacity-25"
            }`}
          >
            <RoundedPicture
              onClick={() => {}}
              src={"/icons/chevron_navigation.svg"}
              width={12}
              height={12}
              size="xs"
              className={`rotate-180`}
            />
          </div>
          <div className="h-screen max-w-[366px] w-full py-4">
            <div className="w-full h-full bg-white relative rounded-md overflow-hidden">
              <div className="absolute top-0 left-0 z-10 w-full flex flex-col gap-4 pt-5 px-4 pb-8 bg-gradient-to-b from-black to-transparent">
                <div className="w-full flex flex-row gap-0.5">
                  {story.content.map((item, index) => (
                    <ProgressBar
                      key={index}
                      progress={progressArray[index] || 0}
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
                  <VideoButton
                    isPlaying={isPlaying}
                    onClick={handlePlayPause}
                  />
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
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`h-screen flex items-center transition-all duration-300 ${
              isHovered ? "" : "opacity-25"
            }`}
          >
            <RoundedPicture
              onClick={() => {}}
              src={"/icons/chevron_navigation.svg"}
              width={12}
              height={12}
              size="xs"
            />
          </div>
        </div>
      )}
      {!isActive && (
        <div className="relative w-[146px] h-[260px] bg-gray-500">
          <div className=""></div>
        </div>
      )}
    </>
  );
};

export default MediaDisplay;
