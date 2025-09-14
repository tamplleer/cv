import { tv } from "tailwind-variants";

export const squareCard = tv({
  base:
    "flex flex-col gap-unit-12 box-border bg-white border border-solid border-secondary-100" +
    " rounded-m overflow-hidden items-stretch hover:bg-secondary-50 active:bg-secondary-100",
  variants: {
    size: {
      s: "p-unit-12 h-[374px]",
      m: "p-unit-20 h-[474px]",
      l: "p-unit-12 h-[374px]",
    },
  },
  defaultVariants: {
    size: "m",
  },
});

export const squareDataCard = tv({
  variants: {
    size: {
      s: "",
      m: "",
      l: "",
    },
  },
  defaultVariants: {
    size: "m",
  },
});

export const squareImageCard = tv({
  variants: {
    size: {
      s: "",
      m: "",
    },
  },
  defaultVariants: {
    size: "m",
  },
});
