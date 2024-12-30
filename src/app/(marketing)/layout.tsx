import { Navbar } from "@/features/(marketing)/components/navbar/navbar";
import { ScrollSmoothProvider } from "../../providers/scroll-smooth-provider";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <>
      <Navbar />
      <ScrollSmoothProvider>{children}</ScrollSmoothProvider>
    </>
  );
};

export default MarketingLayout;
