import Link from "next/link";
import RoundedPicture from "@/components/ui/RoundedPicture";
import Story from "@/types/story.type";

export default function StoryItem({
  story: { id, image, title },
}: {
  story: Story;
}) {
  return (
    <>
      <Link href={`/stories/highlights/${id}`}>
        <div className="flex flex-col gap-3 items-center px-3.5 py-2.5 cursor-pointer">
          {image && (
            <RoundedPicture
              hasBorder={true}
              size="md"
              src={image}
              width={75}
              height={75}
            />
          )}
          <span className="text-xs font-semibold">{title}</span>
        </div>
      </Link>
    </>
  );
}
