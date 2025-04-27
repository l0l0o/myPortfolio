"use client";

import NavItem from "@/components/ui/NavItem";
import { useState } from "react";
import { navItemList } from "@/data/navItemList";
import Image from "next/image";

export default function Sidebar() {
  const [isFocus, setIsFocus] = useState(
    navItemList.find((item) => item.title === "Accueil")
  );

  const handleClick = (title: string) => {
    setIsFocus(navItemList.find((item) => item.title === title));
  };

  return (
    <div className="sticky top-0 flex flex-col justify-start p-4 pt-2 pb-5 px-3 w-[244px] h-screen border-r border-gray-200">
      <div className="flex justify-start items-center mb-5 pt-6 px-3 pb-4">
        <Image src="images/logo.svg" alt="logo" width={103} height={29} />
      </div>
      <ul className="flex flex-col justify-start">
        {navItemList.map((item) => (
          <li key={item.title}>
            <NavItem
              navItem={item}
              isFocus={isFocus?.title === item.title}
              onClick={() => handleClick(item.title)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
