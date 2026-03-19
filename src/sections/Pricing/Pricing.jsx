import Toggle from "../../UI/Toggle";
import {pricingCards} from "../../utils/constants";
import PricingCards from "./PricingCard";
import { useState } from "react"; 
export default function Pricing() {
  const[paymentPlan, setPaymentPlan] = useState("monthly");
  function handlePaymentPlanChange() {    setPaymentPlan((prevPlan) => (prevPlan === "monthly" ? "annual" : "monthly"));
  }
  return (
    <section className="m-auto max-w-[90rem] px-24 py-8">
      <div className=" flex flex-col items-center">
        <h2 className="mb-6 text-[3.5rem]/[4rem] font-bold tracking-tight text-orange-500">Start creating today
          <span className="text-purple-500">.</span>
        </h2>
        <div className="flex items-center gap-x-4 ">
          <p className="text-lg tracking-tight text-orange-500">Monthly</p>
          <Toggle  handleToggle = {handlePaymentPlanChange} togglelabel = "Toggle between monthly and annual plans"/>
          <p className="text-lg tracking-tight text-orange-500">Annual</p>
        </div>
        <ul  className = "my-10 grid w-full grid-cols-[32fr_34fr_32fr] gap-x-4 gap-y-4 ">
          {
            pricingCards.map((card) =>(
                <PricingCards card = {card} key = {card.program} paymentPlan={paymentPlan} />
            ))}
        </ul>
      </div>
    </section>
  )
}
