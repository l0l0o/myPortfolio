"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Story from "@/types/story.type";
import ProgressBar from "@/components/ui/ProgressBar";
import VideoButton from "@/components/ui/VideoButton";
import StoryTitle from "@/components/ui/StoryTitle";
import RoundedPicture from "@/components/ui/RoundedPicture";

const MediaDisplay = ({
  story,
  storyIndex,
  isActive,
  totalStories,
  initialContentIndex = 0,
}: {
  story: Story;
  storyIndex: number;
  isActive: boolean;
  totalStories: number;
  initialContentIndex?: number;
}) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(initialContentIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progressArray, setProgressArray] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCurrentTime(0);
  };

  const goToNextStory = () => {
    resetTimer();
    if (storyIndex < totalStories - 1) {
      router.push(`/stories/highlights/${storyIndex + 1}`);
    } else {
      router.push("/");
    }
  };

  const goToPrevStory = () => {
    resetTimer();
    if (storyIndex > 0) {
      router.push(`/stories/highlights/${storyIndex - 1}?lastContent=true`);
    }
  };

  const leftButton = () => {
    resetTimer();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);

      setProgressArray((prevArray) => {
        const newArray = [...prevArray];
        for (let i = 0; i < newArray.length; i++) {
          if (i < currentIndex - 1) {
            newArray[i] = 100;
          } else {
            newArray[i] = 0;
          }
        }
        return newArray;
      });
    } else {
      if (storyIndex > 0) {
        goToPrevStory();
      } else {
        resetTimer();
        setProgressArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[0] = 0;
          return newArray;
        });
        setIsPlaying(true);
      }
    }
    setIsPlaying(true);
  };

  const rightButton = () => {
    resetTimer();
    if (currentIndex < story.content.length - 1) {
      setCurrentIndex(currentIndex + 1);

      setProgressArray((prevArray) => {
        const newArray = [...prevArray];
        for (let i = 0; i < newArray.length; i++) {
          if (i <= currentIndex) {
            newArray[i] = 100;
          } else {
            newArray[i] = 0;
          }
        }
        return newArray;
      });
    } else {
      if (storyIndex < totalStories - 1) {
        goToNextStory();
      } else {
        router.push("/");
      }
    }
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isActive && story) {
      const initialProgressArray = story.content.map((_, index) => {
        return index < currentIndex ? 100 : 0;
      });
      setProgressArray(initialProgressArray);
    }
  }, [isActive, story, currentIndex]);

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

            // Mettre à jour uniquement la progression de l'élément courant
            // Les éléments précédents sont à 100% et les éléments suivants à 0%
            for (let i = 0; i < newArray.length; i++) {
              if (i < currentIndex) {
                newArray[i] = 100;
              } else if (i === currentIndex) {
                newArray[i] = newProgress;
              } else {
                newArray[i] = 0;
              }
            }

            return newArray;
          });

          if (newProgress >= 100) {
            clearInterval(timerRef.current as NodeJS.Timeout);

            if (currentIndex < story.content.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setIsPlaying(false);
              goToNextStory();
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
  }, [
    isActive,
    story,
    isPlaying,
    currentIndex,
    duration,
    storyIndex,
    totalStories,
  ]);

  useEffect(() => {
    if (isActive && story) {
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
            className={`h-screen w-6 flex items-center transition-all duration-300 ${
              isHovered ? "" : "opacity-25"
            }`}
          >
            {!(storyIndex === 0 && currentIndex === 0) && (
              <RoundedPicture
                onClick={leftButton}
                src={"/icons/chevron_navigation.svg"}
                width={12}
                height={12}
                size="xs"
                className={`rotate-180`}
              />
            )}
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
            className={`h-screen w-6 flex items-center transition-all duration-300 ${
              isHovered ? "" : "opacity-25"
            }`}
          >
            {!(
              storyIndex === totalStories - 1 &&
              currentIndex === story.content.length - 1
            ) && (
              <RoundedPicture
                onClick={rightButton}
                src={"/icons/chevron_navigation.svg"}
                width={12}
                height={12}
                size="xs"
              />
            )}
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
