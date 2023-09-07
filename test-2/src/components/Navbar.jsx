import React from "react";
import Button from "./Button";
import { BsGear } from "react-icons/bs";
import shapeblue from "@/assets/shape-blue.svg";
import { MENUS } from "../utils/enum";

const Navbar = () => {
  return (
    <div className="flex items-center relative justify-between py-6 px-4 sm:px-8">
      <button className="flex items-center gap-4 z-10 text-white ">
        <BsGear className="text-5xl" />
        <h2 className="text-4xl font-bold">HOME</h2>
      </button>
      <div className="flex items-center gap-8">
        {MENUS.map((menu) => (
          <button className="font-extrabold text-xl">{menu.label}</button>
        ))}
        <Button>LOGIN</Button>
      </div>
      <img
        src={shapeblue}
        className="absolute w-[400px] h-[250px] -top-6 -left-2 -z-10"
        alt="shape"
      />
    </div>
  );
};

export default Navbar;
