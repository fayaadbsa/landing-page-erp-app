import React from "react";
import illustration from "@/assets/illustration-1.svg";
import shapePurple from "@/assets/shape-purple.svg";

const AboutSection = () => {
  return (
    <div id="about" className="relative mt-12 overflow-x-clip">
      <div className="flex flex-col container mx-auto px-4">
        <div className="flex flex-col self-end text-center gap-6">
          <h1 className="text-5xl font-medium">Welcome to ERP Solution</h1>
          <h5 className="text-xl">
            With the help of our robust ERP software, you can streamline
            business operations.
          </h5>
        </div>
        <div className="flex flex-col items-center sm:mr-auto">
          <p className="mt-48 italic text-2xl font-medium">
            "ERP: Boosting efficiency through integrated operations"
          </p>
          <div className="mt-16">
            <img src={illustration} className="w-[400px]" alt="illustration" />
          </div>
        </div>
      </div>
      <img
        src={shapePurple}
        className="absolute w-[1000px] bottom-44 -right-[200px] translate-y-1/2 -z-10"
        alt="shape"
      />
    </div>
  );
};

export default AboutSection;
