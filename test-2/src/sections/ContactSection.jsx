import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="flex mt-20 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="flex flex-col justify-between container mx-auto px-4 py-10 w-full h-[400px]">
        <h2 className="text-6xl text-white font-bold">Contact Us!</h2>
        <div className="flex flex-col text-white gap-4">
          <div className="flex gap-2 items-center cursor-pointer">
            <FiMail size={24} />
            <span className="text-xl font-medium">erp@solution.com</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <BsWhatsapp size={24} />
            <span className="text-xl font-medium">(+12) 345-678-999</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <BsFacebook size={24} />
            <span className="text-xl font-medium">ERP System</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <BsInstagram size={24} />
            <span className="text-xl font-medium">@ERPSystem</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
