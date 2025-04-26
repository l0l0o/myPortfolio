import Image from "next/image";

export default function PostHoverText({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex flex-row gap-2">
      <Image src={icon} alt="Heart" width={20} height={20} className="mt-0.5" />
      <p className="text-white text-md font-bold">{text}</p>
    </div>
  );
}
