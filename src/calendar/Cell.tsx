import React, { FC, PropsWithChildren } from "react";
import clsx from "classnames";

interface Props extends PropsWithChildren {
  className?: string;
  isActive?: boolean;
}

const Cell: FC<Props> = ({ children, className, isActive }) => {
  return (
    <div
      className={clsx(
        "h-10 flex items-center justify-center select-none transition-colors bg-neutral-900 text-slate-400",
        {
          "cursor-pointer hover:bg-gray-600 active:bg-neutral-800": !isActive,
          "font-bold text-white bg-neutral-400 text-slate-800": isActive,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Cell;
