"use client";

import { useEffect } from "react";

interface ScrollSmoothProviderProps {
  children: React.ReactNode;
}

export const ScrollSmoothProvider: React.FC<ScrollSmoothProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    let isThrottling = false;
    const throttleDelay = 75;

    const smoothScroll = (
      domElement: HTMLElement,
      pixel: number,
      delay: number
    ) => {
      const intervalToRepeat = 25;
      const step = (intervalToRepeat * pixel) / delay;
      if (step < pixel) {
        domElement.scrollTop += step;
        setTimeout(
          () => smoothScroll(domElement, pixel - step, delay),
          intervalToRepeat
        );
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (isThrottling) return;
      isThrottling = true;
      setTimeout(() => (isThrottling = false), throttleDelay);

      if (event.deltaY > 0) {
        event.preventDefault();
        smoothScroll(document.documentElement, 100, 500);
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return <>{children}</>;
};
