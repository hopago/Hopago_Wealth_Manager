interface MarqueeProps {
  text: string[] | string;
}

export const Marquee = ({ text }: MarqueeProps) => {
  const array = Array.isArray(text)
    ? text
    : Array.from({ length: 7 }, () => {
        return text;
      });

  return (
    <div className="marquee relative w-full overflow-hidden bg-transparent text-custom-gray flex items-center justify-center py-7">
      <div className="track flex gap-4 whitespace-nowrap">
        {[...array, ...array].map((feature, index) => (
          <span
            key={index}
            className="text-9xl font-bold px-4 py-2 text-custom-gray rounded-lg"
          >
            {feature}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};
