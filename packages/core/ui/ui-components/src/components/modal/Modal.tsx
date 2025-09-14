import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }: PropsWithChildren) => {
  const portalRoot = document.getElementById("root");
  if (!portalRoot) return null;
  return createPortal(
    <div className={"fixed z-50 top-0 left-0"}>
      {children}
    </div>,
    portalRoot
  ) as unknown as React.ReactElement;
};
