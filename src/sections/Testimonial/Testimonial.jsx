import { TfiQuoteLeft } from "react-icons/tfi"
export default function Testimonial({testimonial}) {
  return (
    <figure className="inline-block bg-white-sha mr-4 px-8 py-8 rounded-2xl w-96">
      <blockquote className="text-wrap">
        <div className="flex justify-between items-start mb-2 ">
          < TfiQuoteLeft className="w-14 h-14 text-orange-500 overflow-visible stroke-[.04rem]"/>
          <p className="bg-gradient-to-t from-purple-500 to-purple-200 px-3 py-1 rounded-md font-medium text-orange-500 text-small tracking-tight ">{testimonial.program}</p>
        </div>
        <p className="mb-8 font-medium text-orange-500 tracking-tight">{testimonial.description}</p>

        <div className="flex items-center gap-x-4 ">
          <img src= {testimonial.image} alt = {testimonial.name} className="rounded-full h-16 w-16 "/> 
          <div>
            <cite className="font-semibold not-italic tracking-tight text-purple-500">{testimonial.name}</cite>
            <p className="text-sm text-purple-400">{testimonial.title}</p>
          </div>
        </div>
      </blockquote>
    </figure>
  )
}
