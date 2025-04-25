import Image from "next/image";
import type PostCategory from "@/types/postCategory.type";

export default function CategoryListItem({
  category,
  isFocus,
  onClick,
}: {
  category: PostCategory;
  isFocus: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex flex-row gap-1.5 mr-15 cursor-pointer items-center h-full ${
        isFocus ? "border-t-1 border-black -mt-px" : ""
      }`}
      onClick={onClick}
    >
      <Image
        src={isFocus ? category.focusIcon : category.icon}
        alt={category.title}
        width={12}
        height={12}
      />
      <span
        className={`text-xs font-semibold ${
          isFocus ? "text-black" : "text-gray-500"
        }`}
      >
        {category.title}
      </span>
    </div>
  );
}
