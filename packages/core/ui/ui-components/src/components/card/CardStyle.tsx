import { tv } from "tailwind-variants";

export const cardStyle = tv({
  base: "inline-block rounded-m bg-neutral-0",
  variants: {
    variant: {
      solid: "",
      outline: "border-solid border-s",
    },
    color: {
      primary: "",
      secondary: "",
    },
    size: {
      s: "p-3",
      m: "p-unit-32",
      l: "p-unit-40 pb-unit-50",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      class: "",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "bg-secondary-50 border-solid border-s border-secondary-200",
    },
    {
      variant: "outline",
      color: "primary",
      class: "border-primary-500",
    },
    {
      variant: "outline",
      color: "secondary",
      class: "border-secondary-100",
    },
    {
      variant: "outline",
      color: "secondary",
      size: "l",
      class: "border-2",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "m",
  },
});
