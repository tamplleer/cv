import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

import { Switch } from "./components/Switch";

/**
 * text-text bg-bg
 * @param children
 * @constructor
 */
export const UiProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme !== null && isTheme(Theme, theme)) {
      setTheme(theme);
      updateHtmlDataTheme(theme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      localStorage.setItem("theme", systemTheme);
      setTheme(systemTheme);
      updateHtmlDataTheme(systemTheme);
    }
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    updateHtmlDataTheme(newTheme);
  };
  return <UIContext.Provider value={{ theme, switchTheme }}>{children}</UIContext.Provider>;
};

const updateHtmlDataTheme = (theme: ThemeType) => {
  document.documentElement.setAttribute("data-theme", theme);
};


type UIContextType = {
  theme?: ThemeType;
  switchTheme: () => void;
};

// Контекст
const UIContext = createContext<UIContextType | undefined>(undefined);

enum Theme {
  light = "light",
  dark = "dark"
}

type ThemeType = keyof typeof Theme

function isTheme<T extends string>(enumObj: Record<string, T>, value: string): value is T {
  return Object.values(enumObj).includes(value as T);
}

export const useUIContext = (): UIContextType => {
  const context = useContext(UIContext);
  if (!context) {
    return {
      theme: "light",
      switchTheme: () => {
      },
    };
  }
  return context;
};

export const ThemeSwitcher = () => {
  const { theme, switchTheme } = useUIContext();

  return <Switch setSelected={switchTheme} selected={theme === "light"} />;
};
