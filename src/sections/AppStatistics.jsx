import { appStatsImgs } from "../utils/constants";
import { appStats } from "../utils/constants";
import { RxCaretRight } from "react-icons/rx";

export default function AppStatistics() {
  return (
    <section className="bg-orange-500 -mt-[1px]">
      
      <div className="flex flex-col gap-y-16 md:gap-y-24 m-auto px-6 md:px-10 lg:px-16 pt-16 pb-24 md:pb-32 max-w-[90rem]">

        {/* HEADING */}
        <div>
          <h2 className="bg-gradient-to-t from-purple-500 to-purple-600 font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text leading-tight">
            Get direct
          </h2>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
            knowledge and insight
          </h2>
        </div>

        {/* IMAGE GRID */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {appStatsImgs.map((img) => (
            <li key={img.id} className="group relative overflow-hidden">
              
              {/* HOVER OVERLAY */}
              <p className="absolute inset-0 bg-orange-500 bg-opacity-40 px-4 md:px-6 py-6 md:py-8 text-sm sm:text-base md:text-lg text-white tracking-tight transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center">
                {img.description}
              </p>

              <img
                src={img.image}
                alt={img.name}
                className="rounded-xl w-full h-full object-cover"
              />

              {/* LABEL */}
              <p className="absolute bottom-4 md:bottom-8 left-4 md:left-6 bg-white bg-opacity-20 backdrop-blur-sm px-2 py-1 text-sm md:text-base transition-all duration-200 opacity-100 group-hover:opacity-0 rounded-lg text-white">
                {img.name}
              </p>

            </li>
          ))}
        </ul>

        {/* STATS + CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-y-10">
          
          {/* STATS */}
          <ul className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24">
            {appStats.map((stat) => (
              <li key={stat.id}>
                <p className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-purple-500 text-left tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 font-normal text-lg sm:text-xl md:text-2xl text-left text-white leading-snug">
                  {stat.description}
                </p>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <p className="text-lg sm:text-xl md:text-2xl text-white">
              Explore <br className="block" /> the marketplace
            </p>

            <button className="group flex justify-center items-center bg-gradient-to-t from-purple-500 to-purple-600 rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 transition-all duration-300 hover:scale-110">
              <RxCaretRight className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white transition-colors" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}