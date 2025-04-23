export default function NumberedText({
  number,
  text,
}: {
  number: number;
  text: string;
}) {
  return (
    <div className="flex flex-row gap-2">
      <span className="text-md font-medium">{number}</span>
      <span className="text-md font-regular text-gray-600">{text}</span>
    </div>
  );
}
