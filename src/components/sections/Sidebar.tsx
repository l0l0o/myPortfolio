"use client";

import NavItem from "@/components/ui/NavItem";
import { useState } from "react";
import { navItemList } from "@/data/navItems";
import Image from "next/image";

export default function Sidebar() {
  const [isFocus, setIsFocus] = useState(navItemList[0].title);

  const handleClick = (title: string) => {
    setIsFocus(title);
  };

  return (
    <div className="flex flex-col justify-start p-4 pt-2 pb-5 px-3 w-[244px] h-screen border-r border-gray-200">
      <div className="flex justify-start items-center mb-5 pt-6 px-3 pb-4">
        <Image src="images/logo.svg" alt="logo" width={103} height={29} />
      </div>
      <div className="flex flex-col justify-start">
        {navItemList.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            focusIcon={item.focusIcon}
            isFocus={isFocus === item.title}
            onClick={() => handleClick(item.title)}
          />
        ))}
      </div>
    </div>
  );
}
