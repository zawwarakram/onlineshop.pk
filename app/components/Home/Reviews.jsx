"use client"

import { useState } from "react"
import Image from "next/image"

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahemed",
      role: "Fashion Enthusiast",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ffZXH9tdCu5cRr-0vdp_MVZI_FM6jzKbpQ&s",
      rating: 5,
      text: "I've been shopping here for years and the quality never disappoints. The customer service is exceptional and delivery is always on time. Highly recommend!",
    },
    {
      id: 2,
      name: "Ibrahim",
      role: "Regular Customer",
      image: "https://img.freepik.com/free-photo/group-pakistani-man-wearing-traditional-clothes-salwar-kameez-kurta-with-pakistan-flags_627829-4790.jpg?semt=ais_hybrid",
      rating: 5,
      text: "The attention to detail in every product is remarkable. I appreciate the sustainable practices and ethical sourcing. Will definitely continue shopping here.",
    },
    {
      id: 3,
      name: "Eman ibtahaj",
      role: "Style Blogger",
      image: "https://img.freepik.com/premium-photo/portrait-smiling-woman-standing-market_1048944-29201283.jpg?ga=GA1.1.2036020655.1741895252&semt=ais_authors_boost",
      rating: 4,
      text: "As a style blogger, I'm very particular about where I shop. This store consistently offers trendy pieces that are both high-quality and affordable. My go-to for seasonal updates!",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their shopping
            experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial slider */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                <Image
                  src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex text-amber-400 justify-center md:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < testimonials[activeTestimonial].rating ? "fill-current" : "stroke-current fill-none"}`}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-lg italic mb-4">"{testimonials[activeTestimonial].text}"</p>

                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-500">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? "bg-rose-600" : "bg-gray-300"}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

