import { Navbar } from "@/features/(marketing)/components/navbar/navbar";
import { ScrollSmoothProvider } from "../../providers/scroll-smooth-provider";
import { Footer } from "@/features/(marketing)/components/footer/footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <>
      <Navbar />
      <ScrollSmoothProvider>
        {children}
        <Footer />
      </ScrollSmoothProvider>
    </>
  );
};

export default MarketingLayout;
