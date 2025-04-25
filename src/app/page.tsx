import Header from "@/components/sections/Header";
import Sidebar from "@/components/sections/Sidebar";
import Wrapper from "@/components/ui/Wrapper";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Wrapper widthPx={975}>
          <Header />
        </Wrapper>
      </main>
    </div>
  );
}
