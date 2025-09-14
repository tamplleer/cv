import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from "react";

import { textAreaStyle } from "./TextAreaStyle";
import { Box } from "../Box";
import { Text } from "../text/Text";

type TextAreaProps = {
  size?: "s" | "m";
  errorMessage?: string;
};

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps &
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >
>((props, ref) => {
  return (
    <Box flexDirection="col">
      <Box
        flexDirection="col"
        className={`${textAreaStyle({ variant: props.errorMessage ? "error" : "normal", size: props.size, disabled: props.disabled })} ${props.className}`}
      >
        <textarea
          ref={ref}
          {...props}
          onChange={(event) => {
            const string = props?.onChange?.(event);
            event.target.value =
              typeof string === "string" ? string : event.target.value;
          }}
          className="border-none outline-none w-full resize-none"
        />
      </Box>
      <Text
        className="pt-unit-6"
        variant={props.size === "s" ? "body4" : "body3"}
        color="error-500"
      >
        {props.errorMessage?.toString() ?? ""}
      </Text>
    </Box>
  );
});
