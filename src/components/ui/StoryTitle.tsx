import RoundedPicture from "@/components/ui/RoundedPicture";
import Link from "next/link";

const StoryTitle = ({
  src,
  width,
  height,
  title,
}: {
  src: string;
  width: number;
  height: number;
  title: string;
}) => {
  return (
    <Link
      href={"/"}
      className="flex flex-row gap-2 items-center cursor-pointer"
    >
      <RoundedPicture size="sm" src={src} width={width} height={height} />
      <span className="text-sm font-regular text-white">{title}</span>
    </Link>
  );
};

export default StoryTitle;
