import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from "react";

import { linkStyle } from "./LinkStyle";

type LinkProps = {
  variant: "link1" | "link2" | "link3" | "link4";
  text?: string;
  color?: "primary" | "neutral";
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: HTMLAttributeAnchorTarget;
};

export const Link = ({
  text = "",
  variant,
  color = "primary",
  href,
  className,
  onClick,
  target,
  children,
}: LinkProps &
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >) => {
  return (
    <a
      onClick={onClick}
      href={href}
      className={`${linkStyle({ variant, color })} ${className}`}
      target={target}
    >
      {children ?? text}
    </a>
  );
};
