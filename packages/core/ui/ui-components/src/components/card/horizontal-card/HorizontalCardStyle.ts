import { tv } from "tailwind-variants";

export const horizontalCard = tv({
  base:
    "relative flex box-border bg-white border border-solid border-secondary-200" +
    " rounded-m overflow-hidden items-stretch hover:bg-secondary-50 active:bg-secondary-100",
  variants: {
    size: {
      s: "h-unit-120",
      m: "h-unit-134",
      l: "h-unit-120",
    },
  },
  defaultVariants: {
    size: "m",
  },
});

export const horizontalDataCard = tv({
  variants: {
    size: {
      s: "px-unit-12 pt-unit-14 pb-unit-16",
      m: "px-unit-16 pt-unit-18 pb-unit-20",
      l: "px-unit-12 pt-unit-14 pb-unit-16",
    },
  },
  defaultVariants: {
    size: "m",
  },
});
