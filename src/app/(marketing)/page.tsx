import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar/navbar";

export default function MarketingPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      {/* TODO: Service Info */}
      <Footer />
    </div>
  );
}
