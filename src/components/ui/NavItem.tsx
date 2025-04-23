export default function NavItem({
  title,
  icon,
  focusIcon,
  isFocus,
  onClick,
}: {
  title: string;
  icon: string;
  focusIcon: string;
  isFocus: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="flex items-center gap-4 p-3 my-1 h-12 hover:bg-gray-100 rounded-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <picture>
        <img src={isFocus ? focusIcon : icon} alt="" width={24} height={24} />
      </picture>
      <p
        className={`text-sm text-black ${
          isFocus ? "font-bold" : "font-normal"
        }`}
      >
        {title}
      </p>
    </div>
  );
}
