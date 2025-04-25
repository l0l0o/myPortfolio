"use client";

import { useState } from "react";
import { postCategories } from "@/data/postCategoryList";
import CategoryListItem from "@/components/ui/CategoryListItem";

export default function ContentList() {
  const [isFocus, setIsFocus] = useState(
    postCategories.find((item) => item.title === "PUBLICATIONS")
  );

  const handleClick = (title: string) => {
    setIsFocus(postCategories.find((item) => item.title === title));
  };

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-row gap-4 h-14.5 border-t border-gray-300 justify-center items-center">
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
    </div>
  );
}
