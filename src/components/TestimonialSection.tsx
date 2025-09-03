import React from "react";
import TestimonialCard from "../components/ui/TestimonialCard";
import { testimonials } from "../data/index";
import type { Testimonial } from "../data/index";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="overflow-hidden relative">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        What our writers say
      </h2>

      {/* Scrolling Wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* Infinite Scroll Track */}
        {/*         <div className="flex animate-scroll gap-6 py-4">
          {[...testimonials, ...testimonials].map(
            (item: Testimonial, index) => (
              <TestimonialCard key={index} {...item} />
            )
          )}
        </div> */}

        <div className="flex animate-scroll gap-6 py-4">
          {[...testimonials, ...testimonials, ...testimonials].map(
            (item: Testimonial, index) => (
              <TestimonialCard key={index} {...item} />
            )
          )}
        </div>

        {/* Fade effects */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
