import { tv } from "tailwind-variants";

export const checkboxStyle = tv({
  slots: {
    base: "absolute font-normal z-[-1] opacity-0",
    label:
      'text-body2 cursor-pointer inline-flex items-center select-none before:content-[""] before:mr-unit-4 before:flex-shrink-0 before:flex-grow-0 before:rounded before:bg-no-repeat before:bg-center before:bg-[50%_50%] hover:before:bg-primary-100',
  },
  variants: {
    orientation: {
      left: "",
      right: { label: "flex-row-reverse" },
    },
    color: {
      error: {
        label: 'before:content-[""] before:border-2 before:border-error-500',
      },
      normal: {
        label: 'before:content-[""] before:border-2 before:border-primary-500',
      },
      secondary: {
        label:
          'before:content-[""] before:border-2 before:border-secondary-400 hover:before:bg-secondary-100',
      },
    },
    size: {
      m: {
        label: "before:w-unit-24 before:h-unit-24",
      },
      s: {
        label: "text-body3 before:w-unit-20 before:h-unit-20",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: { size: "m" },
});
