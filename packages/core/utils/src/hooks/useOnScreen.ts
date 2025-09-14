import { RefObject, useEffect, useState } from "react";

export const useOnScreen = (
  ref: RefObject<HTMLElement | null>,
  options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 1.0,
  },
  hideTrigger?: boolean
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        rootMargin: "0px",
        threshold: 1.0,
        ...options,
      }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, hideTrigger]);
  return isIntersecting;
};

export const useOnScreenSingleTime = (
  ref: RefObject<HTMLElement | null>,
  options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 1.0,
  },
  hideTrigger?: boolean
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect(); // остановить после появления
        }
      },
      { threshold: 0.25 } // 25% видео должно быть видно
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref?.current, hideTrigger]);
  return isIntersecting;
};
