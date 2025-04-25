import Story from "@/components/ui/Story";

export default function StoryList() {
  return (
    <div className="flex flex-row gap-8 px-6 mb-11">
      <Story title="Compétences" image="images/logo.svg" />
      <Story title="Outils" image="images/logo.svg" />
      <Story title="Projets" image="images/logo.svg" />
    </div>
  );
}
