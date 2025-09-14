import React, { ReactNode } from "react";

import { Icon,IconType } from "@cv/icon";

import { buttonStyle, colorIcon } from "./ButtonStyle";
import { Text } from "../text/Text";

const isOnlyIcon = (
  icon?: IconType,
  text?: string,
  endIcon?: IconType,
  endText?: string
) => {
  return !text && !endText && (icon !== undefined || endIcon !== undefined);
};
const isOnlyText = (
  icon?: IconType,
  text?: string,
  endIcon?: IconType,
  endText?: string
) => {
  return !icon && !endIcon && (text !== undefined || endText !== undefined);
};

type ButtonProps = {
  variant: "solid" | "outline" | "text";
  color: "primary" | "secondary" | "neutral" | "red" | "white";
  text?: string;
  endText?: string;
  icon?: IconType;
  endIcon?: IconType;
  disabled?: boolean;
  size: "s" | "m";
  children?: ReactNode;
  label?: string;
  classNameIcon?: string;
  iconColor?: "inherit" | "none" | string; //todo нужно вынести цвет в вариант а это убрать
};

/**
 * When an icon is passed to the button component, it should change its color to match the button's text color.
 * In the case of a solid button, the button color should become white.
 *
 * If the icon does not change its color, ensure that the SVG file of the icon has the property:
 * <code>fill='currentColor'</code>.
 * This will allow the icon to inherit the text color and ensure proper style rendering.
 *
 * Example of using an SVG icon:
 *
 * ```svg
 * <svg fill='currentColor' ...>
 *     ...
 * </svg>
 * ```
 */
export const Button = (
  props: ButtonProps &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
) => {
  const onlyIcon = isOnlyIcon(
    props.icon,
    props.text,
    props.endIcon,
    props.endText
  );
  const onlyText = isOnlyText(
    props.icon,
    props.text,
    props.endIcon,
    props.endText
  );
  const { base, icon, text } = buttonStyle({
    color: props.color,
    variant: props.variant,
    size: props.size,
    disabled: props.disabled,
    onlyIcon: onlyIcon,
    onlyText: onlyText,
  });
  return (
    <button {...props} className={`${base()} ${props.className ?? ""}`}>
      {props.icon ? (
        <Icon
          icon={props.icon}
          className={`${icon()} [&>*]:fill-[currentColor] ${props?.classNameIcon ? colorIcon(props.classNameIcon) : ""}`}
        />
      ) : null}
      {props.text ? <Text className={text()}>{props.text}</Text> : null}
      {props.endIcon ? (
        <Icon
          icon={props.endIcon}
          className={`${icon()} [&>*]:fill-[currentColor] ${props?.classNameIcon ? colorIcon(props.classNameIcon) : ""}`}
        />
      ) : null}
      {props.endText ? <Text className={text()}>{props.endText}</Text> : null}
      {props.children}
    </button>
  );
};
