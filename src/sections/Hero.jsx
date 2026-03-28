import { reviewImgs } from "../utils/constants";

export default function Hero() {
  return (
    <section className="pb-16 pt-16 md:pt-20 px-6 md:px-10 lg:px-16 relative overflow-hidden">

      {/* Floating gradient blobs */}
      <div className="absolute -top-16 -left-16 h-60 w-60 bg-gradient-to-tr from-purple-500 to-orange-400 rounded-full opacity-20 blur-3xl animate-floatSlow"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 bg-gradient-to-bl from-orange-500 to-purple-500 rounded-full opacity-15 blur-3xl animate-floatSlow delay-500"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12 lg:gap-x-14 relative z-10">

        {/* LEFT CONTENT */}
        <div className="max-w-[50rem] text-center lg:text-left">

          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-orange-600 leading-tight">
            Learn from your favourite marketers about AI-driven{" "}
            <span className="bg-gradient-to-t from-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
              growth strategies
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

            <ul className="flex">
              {reviewImgs.map((headshot) => (
                <li key={headshot.id} className="-mr-4 last:mr-0 transition-transform duration-300 hover:scale-110">
                  <img
                    src={headshot.image}
                    alt={headshot.name}
                    className="h-10 sm:h-12 rounded-full border-4 border-white shadow-lg"
                  />
                </li>
              ))}
            </ul>

            <p className="text-base sm:text-lg font-medium text-orange-600 text-center sm:text-left mt-2 sm:mt-0">
              <span className="font-bold text-purple-500">5000+</span> satisfied clients in 2026
            </p>

          </div>
        </div>

        {/* RIGHT SIDE CIRCLE */}
        <figure className="flex justify-center relative">

          <div className="flex items-center justify-center h-40 w-40 sm:h-48 sm:w-48 md:h-52 md:w-52 rounded-full outline outline-2 outline-orange-500 shadow-lg hover:scale-105 transition-transform duration-300">

            <div className="flex flex-col items-center justify-center h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 rounded-full bg-orange-500 shadow-inner animate-pulse">
              
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                1:1
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-bold text-white drop-shadow-md">
                Video calls
              </p>

            </div>
          </div>
        </figure>

      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-floatSlow {
            animation: floatSlow 8s ease-in-out infinite;
          }

          @keyframes gradientText {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradientText 6s ease infinite;
          }
        `}
      </style>
    </section>
  );
}