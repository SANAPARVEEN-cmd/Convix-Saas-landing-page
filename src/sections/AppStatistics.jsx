import { appStatsImgs } from "../utils/constants";
import { appStats } from "../utils/constants";
import {RxCaretRight} from "react-icons/rx";
export default function AppStatistics() {
  return (
    <section className="bg-orange-500 -mt-[1px]">
      <div className="flex flex-col gap-y-28 m-auto px-24 pt-16 pb-32 max-w-[90rem]"> 
        <div>
          <h2 className="bg-gradient-to-t from-purple-500 to-purple-600 font-bold text-7xl/[5rem] text-transparent bg-clip-text ">Get direct</h2>
          <h2 className="font-bold text-7xl/[5rem]  text-white tracking-tight">knowledge and insight</h2>
        </div>
        <ul className="grid gap-x-2 gap-y-4 grid-cols-3 ">
          {appStatsImgs.map((img) => (
            <li key={img.id} className="group relative ">
              <p className=" absolute top-0 left-0 right-0 bottom-0 bg-orange-500 bg-opacity-40 px-6 py-8 text-lg text-whit tracking-tight transition-all duration-200 opacity-0 group-hover:visible group-hover:opacity-100 hover:text-white">{img.description}</p>
              <img src={img.image} alt={img.name} key={img.name} className="rounded-xl" />
              <p className="absolute bottom-8 left-6 bg-white bg-opacity-20 opacity-100 group-hover :opacity-0 backdrop-blur-sm px-2 py-1 transition-all duration-200 group-hover:invisible rounded:lg ">{img.name}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-between items-end">
          <ul className="flex flex-row gap-24 ">
            {appStats.map((stat)=>(
                <li key = {stat.id}>
                   <p className="font-bold text-7xl/[5rem] text-purple-500 text-left tracking-tigh ">{stat.value}</p>
                   <p className="mt-2 font-normal text-[2rem]/[2.5rem] text-left text-white ">{stat.description}</p>
                </li>
            ))}
          </ul>
          <div className="flex items-end gap-6">
            <p className="text-[2rem]/[2.5rem] text-white ">Explore <br className=" block "/> the marketplace</p>
            <button className="group flex justify-center items-center bg-gradient-to-t from-purple-500 to-purple-600 rounded-full h-16 w-16 transition-all duration-200  ">
                <RxCaretRight className="group-hover:text-white
                h-12 w-12  text-primary-500 transition-colors "/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
