import React from "react";
import { FaTimes } from "react-icons/fa";
import { MENUS } from "@/utils/enum";

const MobileBar = ({ handleClose, open }) => {
  return (
    <div
      onClick={handleClose}
      className={`fixed z-50 w-full h-full grid items-center left-0
        ease-in-out duration-300 bg-white
        ${open ? "opacity-100 top-0" : "opacity-0 -top-full"}`}
    >
      <div
        onClick={handleClose}
        className="absolute top-5 right-6 bg-transparent
          cursor-pointer outline-none"
      >
        <FaTimes className="text-cyan-400" size={32} />
      </div>
      <div className="grid grid-cols-1 grid-rows-6 gap-6 text-center">
        {MENUS.map((menu) => {
          return (
            <a
              href={menu.to}
              onClick={handleClose}
              className="flex items-center content-center justify-center text-2xl ease-in-out
              text-cyan-400 cursor-pointer font-medium"
            >
              {menu.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBar;
