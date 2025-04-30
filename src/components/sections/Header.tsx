"use client";

import Button from "@/components/ui/Button";
import NumberedText from "@/components/ui/NumberedText";
import Image from "next/image";
import RoundedPicture from "@/components/ui/RoundedPicture";
import formatUsername from "@/utils/formatUsername";
import { useState } from "react";
import { DEFAULT_USER_ID, DEFAULT_USERNAME } from "@/constantes/userInfo";

export default function Header({
  user_id = DEFAULT_USER_ID,
  username = DEFAULT_USERNAME,
  description = "Développeur fullstack web et mobile",
  user1 = "la_chance",
  user2 = "la_passion",
  className = "",
}: {
  user_id?: string;
  username?: string;
  description?: string;
  user1?: string;
  user2?: string;
  className?: string;
}) {
  const formattedUsername = formatUsername(username);
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex gap-0 w-full">
        <section className="flex items-center h-45 w-71 justify-center">
          <RoundedPicture
            size="lg"
            src="/stories/profile_picture.webp"
            width={200}
            height={200}
          />
        </section>

        <section className="flex flex-col justify-start items-start">
          <div className="flex flex-row items-center mb-5">
            <span className="text-xl font-regular mr-5">{user_id}</span>
            <div className="flex flex-row gap-2">
              <Button
                text={isFollowed ? "Suivi(e)" : "Suivre"}
                onClick={() => setIsFollowed(!isFollowed)}
                hasSmallText={true}
                hasIcon={isFollowed}
                icon="icons/chevron_up.svg"
                className={
                  isFollowed
                    ? "bg-gray-100 hover:bg-gray-200"
                    : "text-white bg-[#0095F6] hover:bg-[#1877f2]"
                }
              />
              <Button
                text="Contacter"
                className="bg-gray-100 hover:bg-gray-200"
                hasSmallText={false}
              />
            </div>
            <Image
              src="icons/more.svg"
              alt="logo"
              width={32}
              height={32}
              className="cursor-pointer ml-2"
            />
          </div>

          <div className="flex flex-row gap-12 mb-3">
            <NumberedText number={0} text="publications" />
            <NumberedText number={0} text="followers" />
            <NumberedText number={0} text="suivi(e)s" />
          </div>

          <div className="flex flex-row gap-12">
            <span className="text-md font-semibold">{formattedUsername}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-md font-regular text-gray-400">
              {description}
            </span>
            <div className="flex flex-row gap-1.5 items-center">
              <Image src="icons/link.svg" alt="logo" width={12} height={12} />
              <a
                href="https://github.com/l0l0o"
                className="text-sm font-semibold text-[#00376b] hover:underline"
              >
                Github
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-12 mt-3">
            <span className="text-xs font-semibold text-gray-400">
              <span className="text-black">{user1}</span>,{" "}
              <span className="text-black">{user2}</span> et 3 autres personnes
              suivent
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
