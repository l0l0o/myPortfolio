import Button from "@/components/ui/Button";
import NumberedText from "@/components/ui/NumberedText";
import Svg from "@/components/ui/Svg";

export default function Header({
  user_id = "loic_caille",
  username = "Loïc Caillé",
  description = "Développeur web et mobile",
  user1 = "la_chance",
  user2 = "la_passion",
}: {
  user_id?: string;
  username?: string;
  description?: string;
  user1?: string;
  user2?: string;
}) {
  const formattedUsername = username.replace(/ /g, "\u00A0");
  username.split(" ").map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  return (
    <div className="flex items-center">
      <div className="flex gap-0 w-full">
        <section className="flex items-center h-45 w-71 justify-center">
          <div className="flex items-center w-[150px] h-[150px] rounded-full bg-gray-100">
            <Svg src="images/logo.svg" alt="logo" width={150} height={150} />
          </div>
        </section>

        <section className="flex flex-col justify-start items-start">
          <div className="flex flex-row items-center mb-5">
            <span className="text-xl font-regular mr-5">{user_id}</span>
            <div className="flex flex-row gap-2">
              <Button
                text="Suivi(e)"
                isSmallText={true}
                isIcon={true}
                icon="icons/chevron_up.svg"
              />
              <Button text="Contacter" isSmallText={false} />
            </div>
            <Svg
              src="icons/more.svg"
              alt="logo"
              width={32}
              height={32}
              className="p-2 cursor-pointer"
            />
          </div>

          <div className="flex flex-row gap-12 mb-3">
            <NumberedText number={0} text="publications" />
            <NumberedText number={0} text="followers" />
            <NumberedText number={0} text="suivi(e)s" />
          </div>

          <div className="flex flex-row gap-12">
            <span className="text-md font-semibold">{formattedUsername}</span>
          </div>

          <div className="flex flex-row gap-12">
            <span className="text-md font-regular text-gray-400">
              {description}
            </span>
          </div>

          <div className="flex flex-row gap-12 mt-3">
            <span className="text-xs font-semibold text-gray-400">
              <span className="text-black">{user1}</span>,{" "}
              <span className="text-black">{user2}</span> et 3 autres personnes
              suivent
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
