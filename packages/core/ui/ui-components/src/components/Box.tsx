import { ReactNode } from "react";

import clsx from "clsx";

export type WrapValues = "wrap" | "wrap-reverse" | "nowrap";
export type FlexDirectionValues = "row" | "col" | "row-reverse" | "col-reverse";
export type AlignContentValues =
  | "normal"
  | "center"
  | "start"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "baseline"
  | "stretch";
export type JustifyContentValues =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";
export type AlignItemsValues =
  | "start"
  | "end"
  | "center"
  | "baseline"
  | "stretch";
export type GapValues =
  | 0
  | 0.5
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16;
export type FlexValues = 1 | 2 | 3 | 4;
export type OrderValues =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "first"
  | "last"
  | "none";

type BoxProps = {
  className?: string;
  id?: string;
  wrap?: WrapValues;
  flexDirection?: FlexDirectionValues;
  alignContent?: AlignContentValues;
  justifyContent?: JustifyContentValues;
  alignItems?: AlignItemsValues;
  gap?: GapValues;
  flex?: FlexValues;
  order?: OrderValues;
  children?: ReactNode;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};
/**
 *
 * @param className
 * @param id
 * @param wrap flex-wrap flex-wrap-reverse flex-nowrap
 * @param flexDirection flex-row flex-col flex-row-reverse flex-col-reverse
 * @param alignContent content-normal content-center content-start content-end content-between content-around content-evenly content-baseline content-stretch
 * @param justifyContent justify-normal justify-start justify-end justify-center justify-between justify-around justify-evenly justify-stretch
 * @param alignItems items-start items-end items-center items-baseline items-stretch
 * @param gap gap-0 gap-0.5 gap-1 gap-2 gap-3 gap-4 gap-5 gap-6 gap-7 gap-8 gap-9 gap-10 gap-11 gap-12 gap-14 gap-16
 *            gap-18 gap-20 gap-24 gap-26 gap-27 gap-28 gap-32 gap-36 gap-40 gap-44 gap-48
 *
 * @param flex flex-[1] flex-[2] flex-[3] flex-[4] flex-[20] flex-[11]
 * @param order order-1 order-2 order-3 order-4 order-6 order-7 order-8 order-9 order-10 order-11 order-12 order-first order-last order-none
 * @param children
 * @param onMouseOver
 * @param onMouseOut
 * @param onFocus
 * @param onBlur
 * @constructor
 */
export const Box = ({
  className = "",
  id,
  wrap = "nowrap",
  flexDirection = "row",
  alignContent = "center",
  justifyContent,
  alignItems,
  gap,
  flex,
  order,
  children,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
}: BoxProps) => {
  const boxClassName = clsx(
    "flex",
    `flex-${wrap}`,
    `flex-${flexDirection}`,
    `content-${alignContent}`,
    {
      [`justify-${justifyContent}`]: justifyContent,
      [`items-${alignItems}`]: alignItems,
      [`flex-[${flex}]`]: flex,
      [`gap-${gap}`]: gap,
      [`order-${order}`]: order,
    },
    className
  );
  return (
    <div
      className={boxClassName}
      id={id}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </div>
  );
};
