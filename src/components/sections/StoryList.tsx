import Story from "@/components/ui/Story";

export default function StoryList() {
  return (
    <div className="flex flex-row gap-8 px-6 mb-11">
      <Story username="Compétences" isSvg={false} image="images/logo.svg" />
      <Story username="Outils" isSvg={false} image="images/logo.svg" />
      <Story username="Projets" isSvg={false} image="images/logo.svg" />
    </div>
  );
}
