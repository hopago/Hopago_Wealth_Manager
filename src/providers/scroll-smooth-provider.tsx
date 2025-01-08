"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { gsap } from "gsap";

interface ScrollSmoothProviderProps {
  children: React.ReactNode;
}

export const ScrollSmoothProvider: React.FC<ScrollSmoothProviderProps> = ({
  children,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current ?? undefined,
      smooth: true,
    });

    scroll.scrollTo(0, { duration: 0 });

    scroll.on("scroll", () => {
      const elements = scrollContainerRef.current?.querySelectorAll(".fade-in");
      elements?.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          gsap.to(el, { opacity: 1, y: 0, duration: 1 });
        } else {
          gsap.to(el, { opacity: 0, y: 50, duration: 1 });
        }
      });
    });

    return () => {
      scroll.destroy();
    };
  }, [pathname]);

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      {children}
    </div>
  );
};
