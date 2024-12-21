import Link from "next/link";

const items = [
  {
    label: "소개",
    href: "/about",
  },
  {
    label: "이용 방법",
    href: "/how-it-works",
  },
  {
    label: "문의하기",
    href: "/contact",
  },
];

export const Links = () => {
  return (
    <div className="hidden xl:flex items-center justify-center flex-1 gap-x-3">
      <div className="flex items-center justify-around w-full">
        {items.map((el) => (
          <Link key={el.label} href={el.href} className="relative group">
            <span className="relative z-10">{el.label}</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </div>
  );
};
