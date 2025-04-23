import Sidebar from "@/components/sections/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1"></main>
    </div>
  );
}
