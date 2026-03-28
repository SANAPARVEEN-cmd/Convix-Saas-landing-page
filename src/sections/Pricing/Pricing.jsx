import Toggle from "../../UI/Toggle";
import { pricingCards } from "../../utils/constants";
import PricingCards from "./PricingCard";
import { useState } from "react";

export default function Pricing() {
  const [paymentPlan, setPaymentPlan] = useState("monthly");

  function handlePaymentPlanChange() {
    setPaymentPlan((prevPlan) => (prevPlan === "monthly" ? "annual" : "monthly"));
  }

  return (
    <section className="m-auto max-w-[90rem] px-6 md:px-10 lg:px-16 py-12 md:py-16">
      
      <div className="flex flex-col items-center">
        
        {/* HEADING */}
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-orange-500 text-center">
          Start creating today
          <span className="text-purple-500">.</span>
        </h2>

        {/* TOGGLE */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-x-4 mb-10">
          <p className="text-base sm:text-lg tracking-tight text-orange-500">Monthly</p>
          <Toggle handleToggle={handlePaymentPlanChange} togglelabel="Toggle between monthly and annual plans" />
          <p className="text-base sm:text-lg tracking-tight text-orange-500">Annual</p>
        </div>

        {/* PRICING CARDS */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {pricingCards.map((card) => (
            <PricingCards key={card.program} card={card} paymentPlan={paymentPlan} />
          ))}
        </ul>
      </div>
    </section>
  );
}