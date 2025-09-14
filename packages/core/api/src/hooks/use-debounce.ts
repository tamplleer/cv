import { useEffect, useRef } from "react";

type Callback<T extends any[]> = (...args: T) => void;

export const useDebounce = <T extends any[]>(
  callback: Callback<T>,
  delay: number
): ((...args: T) => void) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debounce = (...args: T): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debounce;
};
