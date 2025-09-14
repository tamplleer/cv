import { PropsWithChildren } from "react";

import "./style.css";

export const Tooltip = ({ children, title, className }: PropsWithChildren & { title: string, className?: string }) => {

  return <div className={`bg-zinc-800 rounded-md ${className ?? ""}`}>
    <div
      className="tooltip-button"
      data-tooltip={title}
    >{children}
    </div>
  </div>;

};
