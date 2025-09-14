import { useCallback, useEffect, useState } from "react";

const checkSmallScreenSize = () => window.innerWidth <= 1200;

export const useCheckSmallScreenApp = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const handleScreenSize = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    const isSmallScreenNow = checkSmallScreenSize();
    if (isSmallScreen !== isSmallScreenNow) {
      setIsSmallScreen(isSmallScreenNow);
    }
  }, [isSmallScreen]);

  handleScreenSize();

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [handleScreenSize]);

  return isSmallScreen;
};

const checkXMScreenSize = () =>
  window.innerWidth > 1200 && window.innerWidth < 1440;
const checkXLScreenSize = () =>
  window.innerWidth >= 1440 && window.innerWidth < 1920;

export const useCheckXMScreenApp = () => {
  const [isXMScreen, setIsXMScreen] = useState<boolean>(false);
  const [isXLScreen, setIsXLScreen] = useState<boolean>(false);

  const handleScreenSize = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    const isXMScreenNow = checkXMScreenSize();
    const isXLScreenNow = checkXLScreenSize();
    if (isXMScreen !== isXMScreenNow) {
      setIsXMScreen(isXMScreenNow);
    }
    if (isXLScreen !== isXLScreenNow) {
      setIsXLScreen(isXLScreenNow);
    }
  }, [isXMScreen, isXLScreen]);

  handleScreenSize();

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [handleScreenSize]);

  return { isXMScreen, isXLScreen };
};
