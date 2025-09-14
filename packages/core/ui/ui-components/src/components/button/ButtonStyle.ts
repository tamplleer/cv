import { tv } from "tailwind-variants";

export const colorIcon = (color: string) => `[&>*]:fill-${color}`;
export const buttonStyle = tv({
  slots: {
    base: "font-medium rounded-m box-border inline-flex items-center justify-center transition duration-300",
    icon: `shrink-0`,
    text: "",
  },
  variants: {
    color: {
      primary: "",
      secondary: "",
      neutral: "",
    },
    variant: {
      solid: { base: "text-neutral-0" },
      outline:
        "!p-1 text-primary-500 hover:text-primary-400 active:text-primary-600",
      ghost:
        "!p-1 text-primary-500 hover:text-primary-400 active:text-primary-600",
    },
    disabled: {
      true: "",
      false: "",
    },
    shape: {
      round: "",
      square: "",
    },
    size: {
      s: {
        base: "px-[10px] py-[11px]",
        icon: "w-5 h-5",
        text: "text-button3",
      },
      m: {
        base: "px-3 py-[17px]",
        icon: "w-6 h-6",
        text: "text-button3",
      },
    },
    onlyIcon: {
      true: "aspect-square max-w-12 max-h-12",
      false: "",
    },
    onlyText: {
      true: "px-9",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      class: "bg-primary-500 hover:bg-primary-600 active:bg-primary-600",
    },
    {
      variant: "solid",
      color: "secondary",
      class:
        "text-secondary-500 bg-secondary-50 hover:bg-secondary-100 active:bg-secondary-100",
    },
    {
      variant: "text",
      color: "primary",
      class: {
        base: "text-primary-500 hover:text-primary-400 active:text-primary-600",
      },
    },
    {
      variant: "text",
      color: "secondary",
      class: {
        base: "text-secondary-500 hover:text-secondary-400 active:text-secondary-600",
      },
    },
    {
      variant: "solid",
      disabled: true,
      class: "bg-neutral-300 hover:bg-neutral-300 active:bg-neutral-300",
    },
    {
      variant: "solid",
      color: "primary",
      disabled: true,
      class: "bg-primary-200 hover:bg-primary-200 active:bg-primary-200",
    },
    {
      variant: "text",
      disabled: true,
      class: {
        base: "disabled:text-neutral-500 hover:text-transparent active:text-transparent",
      },
    },
    {
      variant: "solid",
      size: "s",
      class: "px-4 py-3",
    },
    {
      variant: "solid",
      size: "m",
      class: "px-5 py-3",
    },
    {
      onlyIcon: true,
      variant: "solid",
      class: "!p-3",
    },
    {
      onlyIcon: true,
      size: "s",
      class: "!max-w-11 !max-h-11",
    },
    {
      onlyText: true,
      size: "s",
      variant: "solid",
      class: "!px-7",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
  },
});
