import { forwardRef, ReactElement, Ref } from "react";

import { checkboxStyle } from "./CheckboxStyle";
import { Box } from "../Box";

import "./Checkbox.scss";

export type CheckboxProps = {
  label?: string | ReactElement;
  errorComponent?: string | ReactElement;
  orientation?: "left" | "right";
  color?: "error" | "normal" | "secondary";
  sizeCheckbox?: "s" | "m";
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Checkbox = forwardRef(
  (props: CheckboxProps, ref: Ref<HTMLInputElement>): JSX.Element => {
    const { base, label } = checkboxStyle({
      color: props.errorComponent ? "error" : props.color ?? "normal",
      orientation: props.orientation,
      size: props.sizeCheckbox,
    });
    return (
      <>
        <Box alignContent="center" gap={10} flex={1} className={"relative"}>
          <input
            {...props}
            type="checkbox"
            className={`${props.color === "secondary" ? "custom-checkbox-secondary" : "custom-checkbox"}  ${base()}`}
            ref={ref}
          />
          {props.label ? (
            <label
              className={`${label()} ${props.className} `}
              htmlFor={props.id}
            >
              {props.label}
            </label>
          ) : (
            <></>
          )}
        </Box>
      </>
    );
  }
);
