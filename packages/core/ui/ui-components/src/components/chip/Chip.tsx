import { Icon, IconType } from "@cv/icon";

import { ChipColor, chipsStyle } from "./chipsStyle";
import { Box } from "../Box";
import { Button } from "../button/Button";
import { Text } from "../text/Text";

type ChipProps = {
  icon?: IconType;
  label?: string;
  onClose?: () => void;
  color?: ChipColor;
  variant?: "solid";
  animate?: "selected"
  size?: "m" | "s";
  className?: string;
};
export const Chip = ({
                       icon,
                       label,
                       onClose,
                       size = "s",
                       animate,
                       className,
                       variant = "solid",
                       color = "neutral",
                     }: ChipProps) => {

  const { base, iconStyle, textStyle } = chipsStyle({ variant: variant, size: size, color: color,animate:animate });
  return (
    <div>
      <Box
        className={`${base()} ${className ?? ""}`}
        alignItems="center"
        alignContent="center"
        justifyContent={"center"}
        gap={4}
      >
        {icon ? <Icon size={"20px"} icon={icon} color={"neutral-0"} className={iconStyle()} /> : null}
        {label ? (
          <Text
            className={textStyle()}
            variant={"h6"}
          >
            {label}
          </Text>
        ) : null}
        {onClose ? (
          <Button
            variant={"text"}
            size={"m"}
            color={"primary"}
            onClick={onClose}
          >
            <Icon icon={"react"} color={"neutral-0"} />
          </Button>
        ) : null}
      </Box>
    </div>
  );
};
