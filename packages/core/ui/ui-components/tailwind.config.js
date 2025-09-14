import { themeTailwind } from "./src/theme/tailwindTheme";
import { workspacePath } from "../../../../workspace-path";
import path from "path";

/** @type {import('tailwindcss').Config} */
export const config = {
  content: [
    path.join(
      workspacePath,
      "packages/core/ui/ui-components/src/**/*.{js,ts,jsx,tsx}"
    ),
    path.join(workspacePath, "packages/core/ui/icon/index.ts"),
    path.join(workspacePath, "apps/app/src/**/*.{js,ts,jsx,tsx,html}"),
    path.join(workspacePath, "packages/cv/src/**/*.{js,ts,jsx,tsx}"),
    "./public/index.html",
  ],
  theme: themeTailwind,
  darkMode: "class",
};

export default config;
