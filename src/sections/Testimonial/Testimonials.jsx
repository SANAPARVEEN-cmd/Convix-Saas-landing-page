import { testimonials } from "../../utils/constants";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <section className="m-auto max-w-[90rem] py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-orange-50 to-white relative">

      {/* HEADING */}
      <h2 className="pb-12 md:pb-16 text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-orange-500 leading-tight drop-shadow-sm">
        See what our{" "}
        <span className="underline decoration-purple-500 decoration-4 md:decoration-8 underline-offset-2">
          satisfied
        </span>
        <br className="hidden sm:block" />
        customers are saying
      </h2>

      <div className="relative">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-40 lg:w-64 bg-gradient-to-r from-white/90 to-transparent" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-40 lg:w-64 bg-gradient-to-l from-white/90 to-transparent" />

        {/* ROW 1 */}
        <div className="mb-6 overflow-hidden whitespace-nowrap bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-2 hover:shadow-xl transition-shadow duration-300">
          <div className="inline-block animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
          <div className="inline-block animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="mb-6 overflow-hidden whitespace-nowrap bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-2 hover:shadow-xl transition-shadow duration-300">
          <div className="inline-block animate-translate-x-reverse-slowed">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
          <div className="inline-block animate-translate-x-reverse-slowed">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}