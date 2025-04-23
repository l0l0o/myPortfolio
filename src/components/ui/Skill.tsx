import Image from "next/image";

export default function Skill({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  const isSvg = image.endsWith(".svg");

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-10 h-10 outline-1 outline-gray-300 rounded-full flex items-center justify-center">
        {isSvg ? (
          <img src={image} alt={name} width={80} height={80} />
        ) : (
          <Image src={image} alt={name} width={80} height={80} />
        )}
      </div>
      <p className="text-sm text-gray-500">{name}</p>
    </div>
  );
}
