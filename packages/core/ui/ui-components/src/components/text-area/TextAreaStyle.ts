import { tv } from "tailwind-variants";

export const textAreaStyle = tv({
  base: "flex-1 bg-neutral-0 font-normal rounded-m box-border inline-flex items-center justify-between transition duration-300 text-neutral-800 outline-none focus:border-secondary-500",
  variants: {
    variant: {
      error:
        "border-solid border-s border-error-500 focus:border-solid focus:border-s focus:border-secondary-500 focus:outline-none",
      normal:
        "border-neutral-300 hover:border-secondary-400 active:border-secondary-500",
    },
    disabled: {
      true: "",
      false: "",
    },
    size: {
      s: "border-s text-body3 px-unit-16 py-unit-11",
      m: "border-s text-body2 px-unit-20 py-unit-13",
    },
  },
  compoundVariants: [],
  defaultVariants: { size: "m" },
});
