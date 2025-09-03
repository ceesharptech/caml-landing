import { Check, X } from "lucide-react";
import { motion } from "motion/react";

interface pricingProps {
  id: string;
  name: string;
  price: string;
  description: string;
  features: Feature[];
  buttonContent: string;
  animationDelay: number;
}

interface Feature {
  feature: string;
  available: boolean;
}

const PricingCard = ({
  id,
  name,
  price,
  description,
  features,
  buttonContent,
  animationDelay,
}: pricingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
      }}
      viewport={{ once: true }}
      className="relative pt-3"
    >
      {id === "pro" && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-60 bg-amber-500 text-white font-medium text-xs px-2 py-1 rounded-md">
          Most Popular
        </div>
      )}
      <div
        className={`${
          id === "pro" ? "border border-amber-500" : "border border-neutral-200"
        } flex p-8 rounded-3xl flex-col gap-6 bg-white shadow-lg relative h-full`}
      >
        <div className="price-header flex flex-col gap-2 items-center">
          <h3 className="text-md font-medium mb-6">{name}</h3>
          <h1
            className={`${
              id === "pro" ? "text-4xl text-amber-500" : "text-3xl"
            } font-bold`}
          >
            {price}
          </h1>
          <span className="text-sm text-gray-600">{description}</span>
        </div>
        <hr className=" border-neutral-200" />
        <div className="feature-list flex flex-col gap-4 items-start">
          {/* map through features */}
          {features.map((feature, i) => (
            <div
              key={i}
              className="l-item flex items-center justify-center gap-2"
            >
              <div
                className={`${
                  feature.available
                    ? "bg-amber-500 text-white"
                    : "bg-none text-neutral-500"
                } rounded-full flex item-center justify-center p-[2px]`}
              >
                {feature.available ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <X className="h-3 w-3" />
                )}
              </div>
              <span
                className={`${
                  feature.available ? "text-black" : "text-neutral-500"
                } text-sm text-left`}
              >
                {feature.feature}
              </span>
            </div>
          ))}
        </div>
        <div className="h-full flex flex-col justify-end">
          <button
            className={`${
              id === "pro"
                ? "bg-amber-500 text-white"
                : "bg-neutral-100 text-black"
            } p-2 text-center text-sm w-full hover:cursor-pointer font-medium rounded-md`}
          >
            {buttonContent}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
