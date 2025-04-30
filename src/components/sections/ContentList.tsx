"use client";

import { useEffect, useState } from "react";
import { postCategories } from "@/data/postCategoryList";
import CategoryListItem from "@/components/ui/CategoryListItem";
import PostCard from "@/components/ui/PostCard";
import useGetPostsList from "@/hooks/useGetPosts";
import Post from "@/types/post.type";

export default function ContentList() {
  const [isFocus, setIsFocus] = useState(
    postCategories.find((item) => item.title === "PUBLICATIONS")
  );

  const handleClick = (title: string) => {
    setIsFocus(postCategories.find((item) => item.title === title));
  };
  const [postsList, setPostsList] = useState<Post[]>([]);
  const newPosts = useGetPostsList();

  useEffect(() => {
    setPostsList(newPosts);
  }, [newPosts]);

  return (
    <div className="flex flex-col">
      <ul className="flex flex-row h-14.5 border-t border-gray-300 justify-center items-center">
        {postCategories.map((category) => (
          <li key={category.title} className="h-full">
            <CategoryListItem
              category={category}
              isFocus={isFocus?.title === category.title}
              onClick={() => handleClick(category.title)}
            />
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 gap-1">
        {postsList.map((post) => (
          <div key={post.id} className="h-[412px] w-full">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
