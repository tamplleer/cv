import { tv } from "tailwind-variants";

export const linkStyle = tv({
  base: "underline text-primary-500 hover:text-primary-400 active:text-primary-600",
  variants: {
    variant: {
      link1: "text-link1 text-primary-500",
      link2: "text-link2 text-primary-500",
      link3: "text-link3 text-primary-500",
      link4: "text-link4 text-primary-500",
    },
    color: {
      primary: "",
      neutral:
        "text-neutral-800 hover:text-secondary-500 active:text-secondary-600",
    },
    size: {
      s: "",
      m: "",
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});
