import { testimonials } from "../../utils/constants";
import Testimonial from "./Testimonial";
export default function Testimonials() {
  return (
    <section className="m-auto max-w-[90rem] py-24 ">
      <h2 className="px-24 pb-16 text-[3.5rem]/[4rem] font-bold tracking-tight text-orange-500">
        See what our  {" "}<span className="underline  decoration-purple-500 decoration-8 underline-offset-2">satisfied</span>
        <br className="block " />
        customers are saying
      </h2>
      <div className="relative ">
       <div className="absolute left-0 top-0 z-10 h-full w-64 bg-gradient-to-r   from-white-to-transparent"/>
       <div className="absolute right-0 top-0 z-10 h-full w-64 bg-gradient-to-l from-white to-transparent"/>


        <div className="mb-6 overflow-hidden whitespace-nowrap bg-white ">
          <div className="inline-block animate-translate-x-reverse">
            {testimonials.slice(0,4).map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
          <div className="inline-block animate-translate-x-reverse">
            {testimonials.slice(0,4).map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
         <div className="mb-6 overflow-hidden whitespace-nowrap bg-white ">
          <div className="inline-block animate-translate-x-reverse-slowed">
            {testimonials.slice(0,4).map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
          <div className="inline-block animate-translate-x-reverse-slowed">
            {testimonials.slice(0,4).map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
