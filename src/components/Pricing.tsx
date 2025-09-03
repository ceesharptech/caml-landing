import { motion } from "motion/react";
import PricingCard from "./ui/PricingCard";
import { pricingData } from "../data";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl text-center font-extrabold"
      >
        Pricing
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-3 md:px-6">
        {pricingData.map((pricing, i) => (
          <PricingCard
            key={i}
            id={pricing.id}
            name={pricing.name}
            price={pricing.price}
            description={pricing.description}
            features={pricing.features}
            buttonContent={pricing.buttonContent}
            animationDelay={i * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
