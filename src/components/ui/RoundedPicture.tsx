import Image from "next/image";
import { ReactElement } from "react";

export default function RoundedPicture({
  children,
  size,
  hasBorder = false,
  borderColor = "gray",
}: {
  children: ReactElement<typeof Image>;
  size: "xs" | "md" | "lg";
  hasBorder?: boolean;
  borderColor?: "gray" | "colored";
}) {
  const pictureSize = {
    xs: 24,
    md: 77,
    lg: 150,
  };

  const BORDER_SIZE_ADDITION = {
    xs: 2,
    md: 8,
    lg: 8,
  };

  return (
    <div className="relative cursor-pointer">
      <div
        className="flex items-center justify-center rounded-full bg-blue-500"
        style={{
          width: `${pictureSize[size]}px`,
          height: `${pictureSize[size]}px`,
        }}
      >
        {children}
      </div>

      {hasBorder && (
        <div
          className={`absolute rounded-full bg-transparent border-1 ${
            borderColor === "gray" ? "border-gray-300" : "border-blue-500"
          }`}
          style={{
            width: `${pictureSize[size] + BORDER_SIZE_ADDITION[size]}px`,
            height: `${pictureSize[size] + BORDER_SIZE_ADDITION[size]}px`,
            top: `${-BORDER_SIZE_ADDITION[size] / 2}px`,
            left: `${-BORDER_SIZE_ADDITION[size] / 2}px`,
          }}
        ></div>
      )}
    </div>
  );
}
