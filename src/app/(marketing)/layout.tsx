import { ScrollSmoothProvider } from "../providers/scroll-smooth-provider";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return <ScrollSmoothProvider>{children}</ScrollSmoothProvider>;
};

export default MarketingLayout;
