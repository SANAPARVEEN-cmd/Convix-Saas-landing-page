import { reviewImgs } from "../utils/constants";
export default function Hero() {
  return (
    <section className="pb-16 pt-20">
      <div className="flex flex-nowrap justify-between gap-x-14">
        <div className="max-w-[50rem]">
          <h1 className="mb-4 text-7xl/[5rem] font-bold tracking-tight text-orange-600">
            Learn from your favourite marketers about AI-driven{" "}
            <span className="bg-gradient-to-t from-purple-500 to-purple-60000 bg-clip-text text-transparent ">growth strategies</span>
          </h1>
          <div className="flex items-center gap-4">
            <ul className="flex">
                {
                    reviewImgs.map((headshot)=>(
                        <li key={headshot.id} className="-mr-4 last:mr-0">
                            <img src = {headshot.image} alt = {headshot.name} className="h-12 rounded-full border-4 border-white"/>
                        </li>
                    ))
                }
            </ul>
            <p className="text-lg font-medium text-orange-600">
              <span className="font-bold text-purple-500">5000+</span>satisfied clients in 2026
            </p>
          </div>
        </div>
        <figure>
          <div className="mr-8 flex h-52 w-52 items-center justify-center rounded-full outline-orange-500 outline-1">
            <div className="flex flex-col h-44 w-44 items-center justify-center rounded-full bg-orange-500 ">
              <p className="text-5xl font-bold text-white">1:1</p>
              <p className="text-xl font-bold text-white ">Video calls</p>
            </div>
          </div>
        </figure>
      </div> 
    </section>
  );
}
