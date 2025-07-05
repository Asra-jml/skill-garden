import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className='px-20'>
    <div className="pb-20 px-8 md:px-0 bg-black">
  <h2 className="text-3xl font-semibold text-white">Testimonials</h2>
  <p className="md:text-base text-sm text-gray-400 mt-3">
    Hear from our learners as they share their journeys of transformation, success,<br className="hidden md:block" />
    and how our platform has made a difference in their lives.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
    {dummyTestimonial.map((testimonial, index) => (
      <div
        key={index}
        className="text-sm text-left border border-white/10 pb-6 rounded-xl bg-white/5 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-5 py-4 bg-white/10">
          <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
          <div>
            <h1 className="text-lg font-medium text-white">{testimonial.name}</h1>
            <p className="text-gray-300">{testimonial.role}</p>
          </div>
        </div>

        {/* Feedback Content */}
        <div className="p-5 pb-7">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <img
                className="h-5"
                key={i}
                src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                alt="star"
              />
            ))}
          </div>
          <p className="text-gray-400 mt-5">{testimonial.feedback}</p>
        </div>

        {/* CTA */}
        <a href="#" className="text-teal-400 underline px-5 hover:text-teal-300 transition">
          Read more
        </a>
      </div>
    ))}
  </div>
</div>
</div>
  )
}

export default TestimonialsSection

