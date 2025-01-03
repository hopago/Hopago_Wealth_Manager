import Link from "next/link";

import { navItems } from "../../constants";

// TODO: ADD ACTIVE BY PATHNAME

export const Links = () => {
  return (
    <div className="hidden xl:flex items-center justify-center flex-1 gap-x-3">
      <ul className="flex items-center justify-around w-full">
        {navItems.map((el) => (
          <li key={el.label}>
            <Link href={el.href} className="relative group">
              <span className="relative z-10">{el.label}</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
