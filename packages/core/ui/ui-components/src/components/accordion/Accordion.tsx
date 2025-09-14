import React, { useState } from "react";
import { Box } from "../Box";
import { Text } from "../text/Text";

type SimpleAccordionProps = {
  title: string;
  content: React.ReactNode;
}

export const Accordion = ({ title, content }: SimpleAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="gap-2 w-full text-left flex items-center transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Text variant={"body1"} color={"neutral-400"}>{title}</Text>
        <span
          className={`inline-block transition-transform text-neutral-400 duration-500 transform ${
            isOpen ? "-rotate-180" : "rotate-0"
          }`}
        >
    ↓
  </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out rounded-b-lg ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: isOpen ? "28rem" : "0" }}
        aria-hidden={!isOpen}
      >
        <div className="p-4 text-start whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  );
};
