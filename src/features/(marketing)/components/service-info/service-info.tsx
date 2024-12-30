import dynamic from "next/dynamic";
import { Loader } from "@/components/loader";

interface ServiceInfoProps {
  title: string;
  subtitle: string;
  modelName: string;
}

interface RenderThreeProps {
  name: string;
}

const RenderThree = dynamic<RenderThreeProps>(
  () => import("@/lib/three/render-three"),
  { ssr: false, loading: () => <Loader /> }
);

export const ServiceInfo = ({
  title,
  subtitle,
  modelName,
}: ServiceInfoProps) => {
  return (
    <section className="flex items-center justify-between py-14 h-[600px]">
      <div className="flex-1 h-full flex items-center justify-center">
        <RenderThree name={modelName} />
      </div>
      <div className="flex-1 h-full relative flex flex-col justify-center text-balance">
        <div className="w-fit h-fit flex items-center gap-1">
          <div className="rounded-full w-[12px] h-[12px] bg-[#6A0DAD]" />
          <div className="rounded-full w-[12px] h-[12px] bg-[#D8B4FE]" />
        </div>
        <h2 className="text-7xl mt-3 mb-7">{title}</h2>
        <p className="text-xl text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  );
};
