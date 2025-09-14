import { tv } from "tailwind-variants";

export const tabButtonStyle = tv({
  base: "px-unit-32 py-unit-12",
  variants: {
    variant: {
      solid: "bg-primary-500",
      outline: "bg-neutral-0 hover:bg-primary-50 hover:text-primary-600",
    },
    size: {
      s: "text-h8",
      m: "text-button2",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "m",
  },
});
