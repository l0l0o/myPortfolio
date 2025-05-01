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
  const [loading, setLoading] = useState(true);

  const handleClick = (title: string) => {
    setIsFocus(postCategories.find((item) => item.title === title));
  };
  const [postsList, setPostsList] = useState<Post[]>([]);
  const newPosts = useGetPostsList();

  useEffect(() => {
    setPostsList(newPosts);
    setLoading(false);
  }, [newPosts]);

  const PostCardSkeletons = () => {
    return (
      <>
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-[412px] w-full bg-gray-200 dark:bg-gray-700 animate-pulse relative"
          >
            <div className="absolute bottom-0 right-0 p-4 flex flex-row gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>
        ))}
      </>
    );
  };

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
        {loading ? (
          <PostCardSkeletons />
        ) : (
          postsList.map((post) => (
            <PostCard post={post} key={post.id} allPosts={postsList} />
          ))
        )}
      </div>
    </div>
  );
}
