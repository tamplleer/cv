import { tv } from "tailwind-variants";

export type ChipColor = "neutral" | "neutralSelected";
export const chipsStyle = tv({
  slots: {
    base: "font-normal min-w-10 text-center",
    iconStyle: `shrink-0`,
    textStyle: `text-ellipsis whitespace-nowrap overflow-hidden`,
  },
  variants: {
    color: {
      neutral: { base: "bg-neutral-400", iconStyle: "", textStyle: "" },
      neutralSelected: { base: "bg-neutral-900", iconStyle: "", textStyle: "" },
    },
    variant: {
      solid: "text-neutral-0 rounded-full",
    },
    size: {
      m: "px-2.5 py-2 min-w-12",
      s: "px-2 py-1 min-w-8",
    },
    animate:{
      selected:" hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out"
    }
  },
  defaultVariants: { color: "neutral" },
});
