import { useCallback, useRef } from "react";

export const useIntersection = (onIntersect: () => void) => {
  const unsubscribe = useRef<() => void>();

  return useCallback(
    (el: HTMLDivElement | null) => {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            onIntersect();
          }
        }
      });

      if (el) {
        observer.observe(el);

        unsubscribe.current = () => {
          observer.disconnect();
        };
      } else {
        unsubscribe.current?.();
      }
    },
    [onIntersect]
  );
};
