import React from "react";
import { TiStar } from "react-icons/ti";
import type { Testimonial } from "../../data/index";

const TestimonialCard: React.FC<Testimonial> = ({
  text,
  name,
  role,
  image,
  rating,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-80 flex-shrink-0">
      {/* Stars */}
      <div className="flex mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <TiStar key={i} className="text-yellow-400 w-5 h-5 fill-yellow-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-700 mb-14 text-sm text-left italic">"{text}"</p>

      {/* Footer */}
      <div className="flex items-end justify-start gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-left">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
