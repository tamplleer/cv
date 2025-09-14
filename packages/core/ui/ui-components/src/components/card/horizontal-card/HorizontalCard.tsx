import { MouseEventHandler, ReactNode } from "react";

import { horizontalCard, horizontalDataCard } from "./HorizontalCardStyle";
import { Box } from "../../Box";

type HorizontalCardProps = {
  imageUrl?: string;
  imageCover?: string;
  size?: "s" | "m" | "l";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  statusElement: ReactNode;
  className?: string;
};

export const HorizontalCard = ({
  imageUrl,
  imageCover,
  statusElement,
  size = "s",
  onClick,
  children,
  className = "",
}: HorizontalCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`${horizontalCard({ size })} ${className}`}
    >
      <Box
        justifyContent="center"
        alignItems="center"
        className="absolute left-unit-10 bottom-unit-10 flex-1"
      >
        {statusElement}
      </Box>
      <Box flex={2}>
        <img
          src={imageUrl ?? "staticImages/mock.svg"}
          alt={imageCover}
          className="w-full bg-secondary-dark object-cover object-center transition-all duration-500 hover:flex-2"
        />
      </Box>
      <Box
        flex={3}
        flexDirection="col"
        justifyContent="between"
        className={`w-1/2 ${horizontalDataCard({ size })}`}
      >
        {children}
      </Box>
    </button>
  );
};
