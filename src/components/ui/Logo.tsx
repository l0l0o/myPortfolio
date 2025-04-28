import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Logo = ({
  color = "black",
  className = "",
}: {
  color?: "black" | "white";
  className?: string;
}) => {
  const logoSrc = color === "black" ? "logo" : "logo_story";
  const [opacity, setOpacity] = useState<"" | "opacity-40">("");

  const handleMouseDown = () => {
    setOpacity("opacity-40");
  };
  const handleMouseUp = () => {
    setOpacity("");
  };
  return (
    <Link
      href={"/"}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`${className} ${opacity}`}
    >
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
