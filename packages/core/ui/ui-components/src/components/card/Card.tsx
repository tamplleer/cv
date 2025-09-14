import { PropsWithChildren, ReactNode, RefObject } from "react";

import { cardStyle } from "./CardStyle";

type CardProps = {
  variant?: "solid" | "outline";
  color?: "primary" | "secondary";
  size?: "s" | "m" | "l";
  children?: ReactNode;
  className?: string;
  inref?: ((el: HTMLDivElement | null) => void) | null;
};

export const Card = ({
                       variant = "outline",
                       color = "secondary",
                       size = "l",
                       children,
                       inref,
                       className,
                     }: CardProps) => {
  return (
    <div
      ref={inref}
      className={`${cardStyle({ variant: variant, color: color, size: size })} ${className}`}
    >
      {children ? children : null}
    </div>
  );
};

export const CardSimple = ({ children, className, inref }: PropsWithChildren & {
  className?: string,
  inref?: RefObject<HTMLDivElement | null>;
}) => {
  return <section
    ref={inref}
    className={` relative rounded-xl p-4 transition-all bg-neutral-50 duration-500 ${className ?? ""}`}>
    {children}
  </section>;
};
