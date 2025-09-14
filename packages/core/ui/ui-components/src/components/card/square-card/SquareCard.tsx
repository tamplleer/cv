import { MouseEventHandler, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

import { squareCard, squareDataCard } from "./SquareCardStyle";
import { Box } from "../../Box";

type SquareCardProps = {
  imageUrl?: string;
  imageCover?: string;
  size?: "s" | "m" | "l";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  statusElement: ReactNode;
  className?: string;
};

export const SquareCard = ({
  imageUrl,
  imageCover,
  statusElement,
  size = "s",
  onClick,
  children,
  className = "",
}: SquareCardProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(squareCard({ size }), className)}
    >
      <Box flex={2} className={"relative"}>
        <img
          src={imageUrl ?? "staticImages/mock.svg"}
          alt={imageCover}
          className="aspect-[324/220] rounded-m w-full bg-secondary-dark object-cover object-center transition-all duration-500 hover:flex-2"
        />
        <Box
          justifyContent="center"
          alignItems="center"
          className="absolute left-unit-10 bottom-unit-10 flex-1"
        >
          {statusElement}
        </Box>
      </Box>
      <Box
        flex={1}
        flexDirection="col"
        justifyContent="between"
        className={`${squareDataCard({ size })}`}
      >
        {children}
      </Box>
    </button>
  );
};
