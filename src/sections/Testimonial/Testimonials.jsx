import { testimonials } from "../../utils/constants";
import Testimonial from "./Testimonial";
export default function Testimonials() {
  return (
    <section>
      <h2>
        See what our
        <span>satisfied</span>
        <br />
        customers are saying
      </h2>
      <div className="relative ">
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
