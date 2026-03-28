export default function CTA() {
  return (
    <section className="m-auto px-6 md:px-10 lg:px-16 max-w-[90rem] py-12 md:py-16">
      <div className="relative flex flex-col items-center bg-orange-500 px-6 sm:px-10 md:px-16 py-20 sm:py-24 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] transition-shadow duration-500">

        {/* Top Accent Line */}
        <div className="absolute top-0 z-10 h-1.5 w-1/5 bg-purple-500 rounded-full animate-pulse" />

        {/* Gradient background shapes */}
        <div className="absolute left-[4%] h-24 sm:h-28 w-[20rem] sm:w-[50rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute left-[35%] h-24 sm:h-28 w-[15rem] sm:w-[40rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl animate-[float_8s_ease-in-out_infinite]" />

        {/* Heading */}
        <h3 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] text-center font-bold text-white tracking-tight leading-tight drop-shadow-md animate-fadeIn">
          Unlimited Engagement Awaits
        </h3>

        {/* Subheading */}
        <p className="pb-8 sm:pb-10 text-center text-base sm:text-lg md:text-xl text-white tracking-tight max-w-xl opacity-90 animate-fadeIn delay-200">
          Be part of a growing community and interact with your favorite creators
        </p>

        {/* CTA Button */}
        <div className="z-10 bg-gradient-to-b from-orange-500 to-orange-500 p-[0.125rem] rounded-full">
          <button className="rounded-2xl bg-gradient-to-t from-purple-500 via-purple-400 to-purple-200 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-medium text-orange-500 hover:text-white hover:drop-shadow-2xl hover:scale-105 transition-all duration-300">
            Start Connecting
          </button>
        </div>

        {/* Floating subtle spark effect */}
        <div className="absolute top-1/2 left-1/3 h-1 w-1 bg-white rounded-full opacity-30 animate-ping-slow" />
        <div className="absolute bottom-1/3 right-1/4 h-1 w-1 bg-white rounded-full opacity-25 animate-ping-slow delay-500" />

      </div>

      {/* Animations for custom effects */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-ping-slow {
            animation: ping 2s cubic-bezier(0,0,0.2,1) infinite;
          }
        `}
      </style>
    </section>
  );
}