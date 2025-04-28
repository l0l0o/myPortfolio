"use client";

import useGetStories from "@/hooks/useGetStories";
import React from "react";

type StoryContextType = {
  stories: ReturnType<typeof useGetStories>;
};

const StoryContext = React.createContext<StoryContextType | undefined>(
  undefined
);

export function StoryProvider({ children }: { children: React.ReactNode }) {
  const stories = useGetStories();

  return (
    <StoryContext.Provider value={{ stories }}>
      {children}
    </StoryContext.Provider>
  );
}

export function useStories() {
  const context = React.useContext(StoryContext);
  if (!context) {
    throw new Error("useStories must be used within a StoryProvider");
  }
  return context.stories;
}
