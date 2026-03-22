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
      <div>
        <div>
          <div>
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
