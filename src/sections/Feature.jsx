import { features } from "../utils/constants";

export default function Feature() {
  return (
    <section className="m-auto max-w-[90rem] px-6 md:px-10 lg:px-16 pb-20 md:pb-24 pt-20 md:pt-32">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-24 items-start">
        
        {/* LEFT SIDE */}
        <div className="max-w-full lg:max-w-[65%] text-center lg:text-left">
          
          <h1 className="mb-4 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-orange-500 tracking-tight">
            Why become a creator
          </h1>

          <p className="mb-8 md:mb-10 text-base sm:text-lg tracking-tight text-orange-500">
            Engage with your supporters and subscribers to sell your skills,
            knowledge and passions
          </p>

          <button className="bg-orange-500 px-6 md:px-8 py-3 md:py-4 text-white hover:bg-purple-500 tracking-tight transition-all duration-300 hover:scale-105 rounded-xl shadow-sm">
            Become a creator
          </button>
        </div>

        {/* RIGHT SIDE */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16 justify-items-start">
          
          {features.map((feature) => (
            <li
              key={feature.id}
              className="w-full sm:w-5/6 text-center sm:text-start tracking-tight"
            >
              <img
                src={feature.icon}
                alt={feature.name}
                className="mb-4 md:mb-6 w-10 h-10 object-contain mx-auto sm:mx-0"
              />

              <h4 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold text-orange-500 leading-snug">
                {feature.name}
              </h4>

              <p className="text-sm sm:text-base md:text-lg text-orange-500 tracking-tight">
                {feature.description}
              </p>
            </li>
          ))}

        </ul>
      </div>
    </section>
  );
}