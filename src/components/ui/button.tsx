export default function Button({
  text = "button",
  className = "",
  isIcon = false,
  icon = "",
  isSmallText = false,
  rotateIcon = "rotate-180",
}: {
  text: string;
  className?: string;
  isIcon?: boolean;
  icon?: string;
  isSmallText?: boolean;
  rotateIcon?: string;
}) {
  return (
    <button
      className={`h-8 bg-gray-100 rounded-lg px-4 py-2 flex flex-row items-center gap-0 cursor-pointer hover:bg-gray-200 ${className}`}
    >
      <span className={`font-semibold ${isSmallText ? "text-sm" : "text-md"}`}>
        {text}
      </span>
      {isIcon && (
        <picture className={`${rotateIcon} w-4 h-4`}>
          <img src={icon} alt="logo" width={12} height={12} />
        </picture>
      )}
    </button>
  );
}
