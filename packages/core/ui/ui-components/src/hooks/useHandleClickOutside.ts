import { useEffect, useRef } from "react";

import { useCheckSmallScreenApp } from "./useCheckSmallScreen";

export const useHandleClickOutside = (onClickOutside: () => void) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useCheckSmallScreenApp();
  const event = isSmallScreen ? "touchstart" : "mousedown";

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClickOutside();
    }
  };
  useEffect(() => {
    document.addEventListener(event, handleClickOutside);
    return () => {
      document.removeEventListener(event, handleClickOutside);
    };
  }, [modalRef.current, isSmallScreen]);
  return { modalRef };
};
