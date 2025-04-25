export default function formatUsername(username: string) {
  return username.split(" ").map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });
}
