import { features } from "../utils/constants";
export default function Feature() {
  return (
    <section className="m-auto max-w-90rem px-24 pb-24 pt-32">
      <div className="grid grid-cols-2 gap-y-24 ">
        <div className="max-w-[65%]">
          <h1 className="mb-4 font-bold text-[3.5rem]/[4rem] text-orange-500 tracking-tight">Why become a creator</h1>
          <p className="mb-10 text-lg tracking-tight text-orange-500">
            Engage with your supporters and subscribers to sell your skills,
            knowledge and passions
          </p>
          <button className="bg-orange-500 px-8 py-4 text-white hover:bg-purple-500 tracking-tight transition-all duration-200 hover:px-9 rounded-2xl">Become a creator</button>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-20 justify-items-start ">
          {features.map((feature) => (
            <li key={feature.id} className="w-5/6 text-start tracking-tight">
              <img src={feature.icon} alt={feature.name} className="mb-6 w-auto h-auto " />
              <h4 className="mb-2 text-2xl/8 font-bold text-orange-500">{feature.name}</h4>
              <p className="text-lg  text-orange-500 tracking-tight">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
