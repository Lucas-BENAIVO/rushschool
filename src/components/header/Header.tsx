import { Navbar } from "@/components/header/Navbar";
import { TopBanner } from "@/components/header/TopBanner";

export function Header() {
  return (
    <div className="w-full">
      <TopBanner />
      <Navbar />
    </div>
  );
}
