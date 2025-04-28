import Link from "next/link";
import RoundedPicture from "./RoundedPicture";
import Story from "@/types/story.type";

export default function StoryItem({
  story: { id, image, title },
}: {
  story: Story;
}) {
  return (
    <>
      <div className="flex flex-col gap-3 items-center px-3.5 py-2.5 cursor-pointer">
        {image && (
          <Link href={`/stories/highlights/${id}`}>
            <RoundedPicture
              hasBorder={true}
              size="md"
              src={image}
              width={75}
              height={75}
            />
          </Link>
        )}
        <span className="text-xs font-semibold">{title}</span>
      </div>
    </>
  );
}
