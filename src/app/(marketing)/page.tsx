import { Footer } from "@/features/(marketing)/components/footer/footer";
import { Hero } from "@/features/(marketing)/components/hero";
import { Navbar } from "@/features/(marketing)/components/navbar/navbar";
import { ServiceInfo } from "@/features/(marketing)/components/service-info/service-info";

export default function MarketingPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ServiceInfo title="service info" subtitle="lorem 100" />
      <Footer />
    </div>
  );
}
