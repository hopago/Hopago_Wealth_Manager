import { RenderThree } from "@/lib/three/render-three";

interface ServiceInfoProps {
  title: string;
  subtitle: string;
}

export const ServiceInfo = ({ title, subtitle }: ServiceInfoProps) => {
  return (
    <article>
      <RenderThree />
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </article>
  );
};
