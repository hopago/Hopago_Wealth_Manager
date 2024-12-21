import { Hero } from "./components/nav-bar/hero";
import { Navbar } from "./components/nav-bar/navbar";

export default function MarketingPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
