import RoundedPicture from "./RoundedPicture";
import Image from "next/image";
export default function Story({
  username,
  isSvg = false,
  image,
}: {
  username: string;
  isSvg?: boolean;
  image?: string;
}) {
  return (
    <div className="flex flex-col gap-3 items-center px-3.5 py-2.5 cursor-pointer">
      {image && (
        <RoundedPicture hasBorder={true} size="md">
          <Image
            src={image}
            alt={isSvg ? "logo" : username}
            width={75}
            height={75}
          />
        </RoundedPicture>
      )}
      <span className="text-xs font-semibold">{username}</span>
    </div>
  );
}
