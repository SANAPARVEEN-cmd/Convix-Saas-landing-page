import { CiCircleCheck } from "react-icons/ci";

export default function PricingCard({ card, paymentPlan }) {
  const pclass = {
    container: card.primary
      ? "pb-14 hover:scale-105 transition-transform duration-300"
      : "pb-12 my-2 hover:scale-105 transition-transform duration-300",
    bulletColor: card.primary ? "stroke-accent-500" : "stroke-white",
    cta: card.primary
      ? "bg-gradient-to-t from-purple-500 to-purple-300 text-white shadow-md hover:shadow-xl hover:from-purple-600 hover:to-purple-400"
      : "bg-white text-orange-500 hover:bg-orange-600 hover:text-white shadow-md",
    ctaWrapper: card.primary
      ? "bg-gradient-to-b from-purple-500 to-purple-200 p-1 md:p-2 rounded-2xl drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
      : "",
  };

  // computing price
  const price =
    card.price[paymentPlan] === "Free"
      ? card.price[paymentPlan]
      : "$" + card.price[paymentPlan];

  // computing payment plan text
  const paymentPlanText =
    card.price[paymentPlan] === "Free"
      ? "Free"
      : paymentPlan === "monthly"
      ? "per month"
      : "per year";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-orange-500 px-6 sm:px-8 md:px-10 pt-8 ${pclass.container} w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-lg hover:shadow-2xl`}
    >
      {card.primary && (
        <>
          {/* Most Popular Badge */}
          <div className="absolute right-0 top-0 z-10 rounded-bl-2xl rounded-tr-2xl bg-gradient-to-b from-purple-500 to-purple-200 py-1 px-2">
            <p className="text-xs font-medium text-white">Most Popular</p>
          </div>

          {/* Gradient background shapes */}
          <div className="absolute left-[10%] sm:left-[15%] md:left-[20%] h-28 w-[20rem] sm:w-[25rem] md:w-[30rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl" />
          <div className="absolute left-[20%] sm:left-[25%] md:left-[30%] h-28 w-[20rem] sm:w-[25rem] md:w-[30rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl" />
        </>
      )}

      {/* Program name */}
      <p className="opacity-80 mb-6 sm:mb-8 px-4 py-2 border rounded-2xl max-w-max text-sm sm:text-base text-white font-medium bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm">
        {card.program}
      </p>

      {/* Price */}
      <div className="flex items-end gap-x-2 mb-2 flex-wrap">
        <p className="font-bold text-2xl sm:text-4xl md:text-[3.5rem] text-white tracking-tight drop-shadow-md">
          {price}
        </p>
        <span className="opacity-60 text-white text-sm sm:text-base">{paymentPlanText}</span>
      </div>

      {/* Subheading */}
      <p className="mb-4 sm:mb-6 text-white text-sm sm:text-base opacity-90">
        {card.subheading}
      </p>

      {/* Features bullets */}
      <ul className="flex flex-col gap-y-3 sm:gap-y-4">
        {card.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-center gap-x-2 group hover:text-orange-200 transition-colors duration-200"
          >
            <CiCircleCheck
              className={`h-5 w-5 sm:h-6 sm:w-6 stroke-1 ${pclass.bulletColor} group-hover:text-white transition-colors duration-200`}
            />
            <p className="text-white text-sm sm:text-base">{bullet}</p>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <div className={`mt-6 sm:mt-8 ${pclass.ctaWrapper}`}>
        <button
          className={`w-full rounded-2xl py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${pclass.cta}`}
        >
          {card.cta}
        </button>
      </div>
    </div>
  );
}