import {CiCircleCheck} from "react-icons/ci"

export default function PricingCard({card , paymentPlan}) {
  const pclass ={
    container: card.primary ?" pb-14":"pb-12 my-2",
    bulletColor : card.primary ? "strok-accent-500" : "strok-white" ,
    cta: card.primary  ? "bg-gradient-to-t bg-accent-500 from-purple-500 to-purple-200":"bg-white",
    ctaWrapper: card.primary ? "bg-gradient-to-b from-purple-500 to-purple-200 p-[125rem] rounded-2xl drop-shadow-[0_0px_35px_rgba(255,184,76,0,20)]  hover:drop-shadow-[0_0px_35px_rgba(255,184,76,0,35)]":"",
  };

  // computing price.....
const price = card.price[paymentPlan]=== "Free" ?card.price[paymentPlan] : "$" + card.price[paymentPlan];
  // computing payment plan text.....


  return (
    <div className={`relative overflow-hidden rounded-2xl bg-orange-500 px-8 pt-8 ${pclass.container}`}>
      {
        card.primary && (
          <>
          <div className="absolute right-0 top-0 z-10 rounded-bl-2xl rounded-tr-2xl bg-gradient-to-b from-purple-500 to-purple-200 py-[-125rem]">
            <p className="rouded-bl-2xl rounded-tr-xl bg-gradient-to-t from-purple-500 to-purple-200 px-4 py-2 text-xs">Most Popular</p>
          </div>
          <div className="absolute left-[20%] h-28 w-[30rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl "/>
          <div className="absolute left-[30%] h-28 w-[30rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl "/>
          <div />
          </>
        )
      }
      <p className=" opacity-80 mb-12 px-6 py-2 border rounded-2xl max-w-min text-sm text-white">{card.program}</p>
      <div className="flex items-end gap-x-2 mb-2 ">
        <p className="font-bold text-[3.5rem]/[4rem] text-white tracking-tight">{price}</p>
        <span className="opacity-50 mb-2  text-white tracking-tight">{"per month"}</span>
        </div>
        <p className="text-white">{card.subheading}</p>
        <ul className="flex flex-col gap-y-4  ">
          {card.bullets.map((bullet) =>(
            <li key = {bullet} className ='flex items-center gap-x-2'>
              <CiCircleCheck  className={`h-6 w-6 stroke-1 text-white ${pclass.bulletColor}` }/>
              <p className="text-white">{bullet}</p>
              </li>
          ))}
        </ul>
        <div className={"mt-8 ${pclass.ctaWrapper}"}>
          <button className={`w-full rounded-2xl py-4 text-orange-500 transition-all duration-200 hover:bg-purple-500 hover:text-white ${pclass.cta}`}>{card.cta}</button>
          </div>
    </div>
  )
}
