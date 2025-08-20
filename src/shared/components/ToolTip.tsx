import React, { PropsWithChildren } from "react";

interface ToolTipProps extends PropsWithChildren {
  text?: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ children, text }) => {
  return (
    <div className="relative group inline-block">
      {children}
      {text && (
        <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-muted px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity  duration-500 ease-in-out z-10">
          {text}
        </span>
      )}
    </div>
  );
};

export default ToolTip;
