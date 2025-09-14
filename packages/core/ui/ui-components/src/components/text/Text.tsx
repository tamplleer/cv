import { ReactElement, ReactNode } from "react";

import { tv } from "tailwind-variants";

const textStyle = tv({
  base: "font-medium font-sansation",
  variants: {
    variant: {
      h1: "text-h1 font-semibold",
      h2: "text-h2 font-bold",
      h3: "text-h3 font-bold ",
      h4: "text-h4 font-bold",
      h5: "text-h5 font-bold",
      h6: "text-h6 font-semibold",
      sub1: "text-sub1 font-medium",
      sub2: "text-sub2 font-medium",
      body1: "text-body1 font-normal",
      body2: "text-body2 font-bold",
      body3: "text-body3 font-normal",
      body4: "text-body4 font-semibold",
      body5: "text-body5 font-normal",
      body6: "text-body6 font-semibold",
      tiny1: "text-tiny1 font-medium",
      tiny2: "text-tiny2 font-semibold",
      body_link: "text-body_link font-normal",
      button1: "text-button1 font-medium",
      button2: "text-button2 font-medium",
      button3: "text-button3 font-semibold",
      button4: "text-button4 font-medium",
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

type TypographyProps = {
  className?: string;
  children?: ReactNode | ReactElement[] | string[] | number;
  weigth?: "light" | "normal" | "medium" | "bold";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "sub1"
    | "sub2"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "body5"
    | "body6"
    | "tiny1"
    | "tiny2"
    | "body_link"
    | "button1"
    | "button2"
    | "button3"
    | "button4";
  color?:
    | "neutral-100"
    | "neutral-800"
    | "neutral-400"
    | "neutral-500"
    | "primary-500"
    | "secondary-500"
    | "secondary-600"
    | "grey"
    | "neutral-0"
    | "error-500";
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

/**
 *
 * @param className
 * @param children
 * @param variant
 * @param weigth !font-light font-normal font-medium font-bold
 * @param color text-neutral-400 text-neutral-800 text-neutral-500 text-primary-500 text-secondary-500 text-secondary-600 text-grey text-neutral-0 text-error-500
 * @param onMouseOver
 * @param onMouseOut
 * @param onFocus
 * @param onBlur
 */
export const Text = ({
  className,
  children,
  weigth,
  variant,
  color,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
}: TypographyProps) => {
  return (
    <p
      className={` ${textStyle({ variant: variant })} ${color ? `text-${color}` : ""} ${weigth ? `!font-${weigth}` : ""} ${className ?? ""}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </p>
  );
};
