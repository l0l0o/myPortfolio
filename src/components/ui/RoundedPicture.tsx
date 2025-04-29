import Image from "next/image";

export default function RoundedPicture({
  className = "",
  src,
  width,
  height,
  size,
  hasBorder = false,
  borderColor = "gray",
  color = "bg-gray-200",
  onClick,
}: {
  className?: string;
  src: string;
  width: number;
  height: number;
  size: "xs" | "sm" | "md" | "lg";
  hasBorder?: boolean;
  borderColor?: "gray" | "colored";
  color?: string;
  onClick?: () => void;
}) {
  const pictureSize = {
    xs: 24,
    sm: 32,
    md: 77,
    lg: 150,
  };

  const BORDER_SIZE_ADDITION = {
    xs: 2,
    sm: 0,
    md: 8,
    lg: 8,
  };

  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div
        className={`flex items-center justify-center rounded-full overflow-hidden ${color} ${className}`}
        style={{
          width: `${pictureSize[size]}px`,
          height: `${pictureSize[size]}px`,
        }}
      >
        <Image src={src} alt="" width={width} height={height} />
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
        />
      )}
    </div>
  );
}
