"use client";

import Link from "next/link";
import { navItems } from "../../constants";
import { usePathname } from "@/hooks/use-pathname";
import { cn } from "@/lib/utils";

export const Links = () => {
  const pathname = usePathname();

  return (
    <div className="hidden xl:flex items-center justify-center flex-1 gap-x-3">
      <ul className="flex items-center justify-around w-full">
        {navItems.map((el) => {
          const active = el.href === `/${pathname}`;
          return (
            <li key={el.label}>
              <Link
                href={el.href}
                className="relative group"
                aria-current={active ? "page" : undefined}
              >
                <span className="relative z-10">{el.label}</span>
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full",
                    active && "w-full"
                  )}
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
