import { CustomThemeConfig } from "tailwindcss/types/config";
//todo https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js
export const themeTailwind: Partial<
  CustomThemeConfig & { extend: Partial<CustomThemeConfig> }
> = {
  screens: {
    xxs: { max: "640px" },
    xs: { max: "1200px" },
    xm: { min: "1201px", max: "1440px" },
    xl: { min: "1441px" },
    s: "640px",
    m: "1200px",
    l: "1920px",
  },
  colors: {
    primary: {
      900: "var(--color-neutral-900)",
      600: "var(--color-neutral-800)",
      500: "var(--color-neutral-500)",
      400: "var(--color-neutral-400)",
      300: "var(--color-neutral-300)",
      200: "var(--color-neutral-200)",
      100: "var(--color-neutral-100)",
      50: "var(--color-neutral-50)",
      0: "var(--color-neutral-0)",
    },
    secondary: {
      600: "#6373BC",
      500: "#6D7ECF",
      400: "#8A98D9",
      200: "#BCC4E9",
      100: "#D2D7F0",
      50: "#F0F2FA",
    },
    neutral: {
      900: "var(--color-neutral-900)",
      800: "var(--color-neutral-800)",
      500: "var(--color-neutral-500)",
      400: "var(--color-neutral-400)",
      300: "var(--color-neutral-300)",
      200: "var(--color-neutral-200)",
      100: "var(--color-neutral-100)",
      50: "var(--color-neutral-50)",
      0: "var(--color-neutral-0)",
    },
    error: {
      800: "var(--color-error-800)",
      500: "var(--color-error-500)",
      300: "var(--color-error-300)",
    },
    warning: {
      500: "var(--color-warning-500)",
    },
    bg: "var(--color-bg)",
    text: "var(--color-text)",
  },
  fontFamily: {
    sansation: ["Roboto", "sans-serif"],
    jura: ["Jura", "sans-serif"],
  },
  extend: {
    borderRadius: {
      s: "6px",
      m: "10px",
      l: "16px",
    },
    borderWidth: {
      s: "1px",
      m: "2px",
      3: "3px",
    },
    boxShadow: {
      s: "0px 1px 5px 0px #37366B21",
    },
    fontSize: {
      h1: ["48px", { lineHeight: "120%" }],
      h2: ["24px", { lineHeight: "120%" }],
      h3: ["20px", { lineHeight: "120%" }],
      h4: ["18px", { lineHeight: "120%" }],
      h5: ["16px", { lineHeight: "130%" }],
      h6: ["14px", { lineHeight: "130%" }],
      sub1: ["16px", { lineHeight: "130%" }],
      sub2: ["14px", { lineHeight: "130%" }],
      body1: ["16px", { lineHeight: "140%" }],
      body2: ["16px", { lineHeight: "140%" }],
      body3: ["14px", { lineHeight: "140%" }],
      body4: ["14px", { lineHeight: "140%" }],
      body5: ["12px", { lineHeight: "140%" }],
      body6: ["12px", { lineHeight: "140%" }],
      tiny1: ["10px", { lineHeight: "100%" }],
      tiny2: ["10px", { lineHeight: "100%" }],
      body_link: ["14px", { lineHeight: "130%" }],
      button1: ["16px", { lineHeight: "100%" }],
      button2: ["16px", { lineHeight: "100%" }],
      button3: ["14px", { lineHeight: "100%" }],
      button4: ["14px", { lineHeight: "100%" }],
    },
    keyframes: {
      fadeInOut: {
        "0%": {
          opacity: "0",
        },
        "10%": {
          opacity: "1",
        },
        "90%": {
          opacity: "1",
        },
        "100%": {
          opacity: "0",
        },
      },
    },
    animation: {
      fadeInOut: "fadeInOut 4s linear 0s 1",
    },
  },
};
