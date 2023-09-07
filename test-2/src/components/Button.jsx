import clsx from "clsx";
import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center py-2 px-6 min-w-[160px]",
        "border-2 border-cyan-400 rounded-lg",
        "font-bold text-cyan-400 bg-white",
        "hover:bg-cyan-400 hover:text-white transition-all"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
