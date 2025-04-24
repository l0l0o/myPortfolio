import Svg from "./Svg";
import Image from "next/image";
import { ReactElement } from "react";

export default function RoundedPicture({
  children,
  size,
}: {
  children: ReactElement<typeof Svg | typeof Image>;
  size: "xs" | "sm" | "lg";
}) {
  const sizes = {
    xs: "w-[24px] h-[24px]",
    sm: "w-[77px] h-[77px]",
    lg: "w-[150px] h-[150px]",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gray-100 ${sizes[size]}`}
    >
      {children}
    </div>
  );
}
