import { TfiQuoteLeft } from "react-icons/tfi"
export default function Testimonial({testimonial}) {
  return (
    <figure>
      <blockquote>
        <div>
          < TfiQuoteLeft />
          <p>{testimonial.program}</p>
        </div>
        <p>{testimonial.description}</p>

        <div>
          <img src= {testimonial.image}/> 
        </div>
      </blockquote>
    </figure>
  )
}
