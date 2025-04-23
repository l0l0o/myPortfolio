import Button from "@/components/ui/button";
import NumberedText from "@/components/ui/NumberedText";

export default function Header() {
  const username = "loic_caille";
  const formattedUsername = username.replace(/ /g, "\u00A0");
  username.split(" ").map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  return (
    <div className="flex items-center">
      <div className="flex gap-0 w-full">
        <section className="flex items-center h-45 w-71 justify-center">
          <div className="flex items-center w-[150px] h-[150px] rounded-full bg-gray-100">
            <picture>
              <img src="images/logo.svg" alt="logo" width={150} height={150} />
            </picture>
          </div>
        </section>

        <section className="flex flex-col justify-start items-start">
          <div className="flex flex-row items-center mb-5">
            <span className="text-xl font-regular mr-5">
              {formattedUsername}
            </span>
            <div className="flex flex-row gap-2">
              <Button
                text="Suivi(e)"
                isSmallText={true}
                isIcon={true}
                icon="icons/chevron_up.svg"
              />
              <Button text="Contacter" isSmallText={false} />
            </div>
            <picture className="p-2 cursor-pointer">
              <img src="icons/more.svg" alt="logo" width={32} height={32} />
            </picture>
          </div>
          <div className="flex flex-row gap-12 mb-3">
            <NumberedText number={0} text="publications" />
            <NumberedText number={0} text="followers" />
            <NumberedText number={0} text="suivi(e)s" />
          </div>
          <div className="flex flex-row gap-12"></div>
        </section>
      </div>
    </div>
  );
}
