import Image from "next/image";

export default function Button({
  text = "button",
  className = "",
  hasIcon = false,
  icon = "",
  hasSmallText = false,
  rotateIcon = "rotate-180",
  onClick,
}: {
  text: string;
  className?: string;
  hasIcon?: boolean;
  icon?: string;
  hasSmallText?: boolean;
  rotateIcon?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`h-8 rounded-lg px-4 py-2 flex flex-row items-center justify-center gap-1 cursor-pointer ${className}`}
    >
      <span className={`font-semibold ${hasSmallText ? "text-sm" : "text-md"}`}>
        {text}
      </span>
      {hasIcon && (
        <Image
          src={icon}
          alt="logo"
          width={12}
          height={12}
          className={`${rotateIcon}`}
        />
      )}
    </button>
  );
}
