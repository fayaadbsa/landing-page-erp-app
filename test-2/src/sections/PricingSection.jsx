import React from "react";
import { PLANS } from "../utils/enum";
import clsx from "clsx";
import { BsCheckCircleFill } from "react-icons/bs";

const PricingSection = () => {
  return (
    <div
      id="pricing"
      className="mt-32 flex flex-col container mx-auto px-4 w-full"
    >
      <div className="flex flex-col text-center gap-6">
        <h1 className="text-5xl font-medium">PRICING PLANS</h1>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 gap-8 justify-between">
        {PLANS.map((plan) => (
          <div
            className={clsx(
              "flex flex-col w-full px-6 py-8",
              "bg-white border-2 border-cyan-400 rounded-lg shadow-lg",
              "cursor-pointer hover:scale-105 transition-all"
            )}
          >
            <h4 className="font-bold">{plan.label}</h4>
            <div className="mt-8 flex items-end">
              <h3 className="text-4xl font-medium">{plan.price}</h3>
              {plan.price !== "FREE" && (
                <span className="text-2xl">/Month</span>
              )}
            </div>
            <h4 className="text-xl font-medium mt-10">Features:</h4>
            <div className="flex flex-col mt-4 gap-4">
              {plan.features.map((feature) => (
                <div className="flex items-start gap-2">
                  <div>
                    <BsCheckCircleFill
                      className="text-cyan-400 mt-1"
                      size={20}
                    />
                  </div>

                  <span className="text-xl">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
