import { TfiQuoteLeft } from "react-icons/tfi";

export default function Testimonial({ testimonial }) {
  return (
    <figure className="inline-block bg-white/80 backdrop-blur-sm mr-4 px-6 md:px-8 py-6 md:py-8 rounded-xl md:rounded-2xl w-full max-w-sm sm:max-w-md lg:w-96 shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.03]">

      <blockquote className="text-wrap">

        {/* TOP */}
        <div className="flex justify-between items-start mb-3">
          <TfiQuoteLeft className="w-10 h-10 md:w-14 md:h-14 text-orange-500 stroke-[0.04rem] drop-shadow-sm" />

          <p className="bg-gradient-to-t from-purple-500 to-purple-200 px-2 md:px-3 py-1 rounded-md font-medium text-orange-500 text-xs sm:text-sm tracking-tight shadow-sm">
            {testimonial.program}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="mb-6 md:mb-8 text-sm sm:text-base font-medium text-orange-500 tracking-tight leading-relaxed transition-all duration-300 hover:text-purple-600">
          {testimonial.description}
        </p>

        {/* USER */}
        <div className="flex items-center gap-x-3 md:gap-x-4 mt-2">
          
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-cover border-2 border-purple-200 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />

          <div>
            <cite className="block font-semibold not-italic tracking-tight text-purple-500 text-sm sm:text-base drop-shadow-sm">
              {testimonial.name}
            </cite>

            <p className="text-xs sm:text-sm text-purple-400">
              {testimonial.title}
            </p>
          </div>

        </div>
      </blockquote>

      {/* Subtle gradient glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 opacity-30 blur-xl pointer-events-none" />

    </figure>
  );
}