import { cn } from "@/lib/utils";

interface CardProps {
  hasTitle: boolean;
  title?: string;
  cardTitle: string;
  description: string;
  className?: string;
}

// TODO: className 구체화

export const Card = ({
  hasTitle,
  title,
  cardTitle,
  description,
  className,
}: CardProps) => {
  const content = (
    <article
      className={cn(
        "w-full h-full max-w-5xl p-12 bg-transparent text-center box-shadow-custom-white rounded-md",
        "font-sans text-base leading-relaxed text-custom-white",
        !hasTitle && className
      )}
    >
      <h3 className="font-bold text-xl">{cardTitle}</h3>
      <p className="mt-4 text-sm text-muted-foreground">{description}</p>
    </article>
  );

  return hasTitle ? (
    <div
      className={cn(
        "w-full flex items-center justify-center flex-col gap-5 py-7 text-center",
        className
      )}
    >
      <h2 className="font-bold text-4xl text-custom-white mb-5">{title}</h2>
      {content}
    </div>
  ) : (
    <>{content}</>
  );
};
