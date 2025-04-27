import Link from "next/link";
import RoundedPicture from "./RoundedPicture";
import Image from "next/image";

export default function StoryItem({
  image,
  alt = "",
  title = "",
  id = "",
}: {
  image: string;
  alt?: string;
  title: string;
  id: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-3 items-center px-3.5 py-2.5 cursor-pointer">
        {image && (
          <Link href={`/stories/highlights/${id}`}>
            <RoundedPicture hasBorder={true} size="md">
              <Image src={image} alt={alt} width={75} height={75} />
            </RoundedPicture>
          </Link>
        )}
        <span className="text-xs font-semibold">{title}</span>
      </div>
    </>
  );
}
