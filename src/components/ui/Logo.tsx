import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = ({
  color = "black",
  className = "",
}: {
  color?: "black" | "white";
  className?: string;
}) => {
  const logoSrc = color === "black" ? "logo" : "logo_story";
  return (
    <Link href={"/"} className={`${className}`}>
      <Image
        src={`/images/${logoSrc}.svg`}
        alt="logo"
        width={103}
        height={29}
      />
    </Link>
  );
};

export default Logo;
