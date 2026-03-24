export default function CTA() {
  return (
    <section className="m-auto  px-24 max-w-[90rem] py-16">
      <div className="relative flex flex-col items-center bg-orange-500 px-8 py-28 rounded-2xl overflow-hidden">


      <div className="absolute top-0 z-10 h-2 w-1/5 bg-purple-500"/>

      <div className="absolute left-[4%] h-28 w-[50rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl "/>
      <div className="visible absolute  left-[35%] h-28 w-[40rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl "/>
        <h3 className="mb-4 font-bold text-[3.5rem]/[4rem] text-center text-white tracking-tight">Unlimited Engagement Awaits</h3>
        <p className="pb-10 text-center text-lg text-white tracking-tight">
          Be part of a growing community and interact with your favorite
          creators
        </p>
        <div className="z-10 bg-gradient-to-b from-orange-500 to-orange-500 p-[.125rem]">
        <button className="rounded-2xl bg-gradient-to-t from-purple-500 to-purple-200 px-8 py-4 font-medium tracking-tight text-orange-500 transition-all duration-200 hover:text-white hover:drop-shadow-[0_0px_35px_rgba(255,184,76,0.2)] ">
          Start Connecting
        </button>
      </div>
      </div>
      
    </section>
  );
}
