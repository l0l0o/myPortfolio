import StoryItem from "@/components/ui/StoryItem";

export default function StoryList() {
  return (
    <div className="flex flex-row gap-8 px-6 mb-11">
      <StoryItem title="Compétences" image="images/logo.svg" />
      <StoryItem title="Outils" image="images/logo.svg" />
      <StoryItem title="Projets" image="images/logo.svg" />
    </div>
  );
}
