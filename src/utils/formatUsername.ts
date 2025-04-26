export default function formatUsername(username: string) {
  // Remplacer les espaces normaux par des espaces insécables
  const nonBreakingSpaceUsername = username.replace(/ /g, "\u00A0");

  return nonBreakingSpaceUsername
    .split("\u00A0")
    .map((name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    })
    .join("\u00A0");
}
