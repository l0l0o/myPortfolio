export default function SkillList({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
}
