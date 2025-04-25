import Image from "next/image";
import type NavItem from "@/types/navItem.type";

export default function NavItem({
  navItem,
  isFocus,
  onClick,
}: {
  navItem: NavItem;
  isFocus: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="flex items-center gap-4 p-3 my-1 h-12 hover:bg-gray-100 rounded-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={isFocus ? navItem.focusIcon : navItem.icon}
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <p
        className={`text-md text-black ${
          isFocus ? "font-bold" : "font-normal"
        }`}
      >
        {navItem.title}
      </p>
    </div>
  );
}
