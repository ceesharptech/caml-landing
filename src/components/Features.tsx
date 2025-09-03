import { featureCardInfo } from "../data/index";
import FeatureCard from "./ui/FeatureCard";
import { motion } from "motion/react";

const Features = () => {
  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl text-center font-extrabold"
      >
        Our Features
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {featureCardInfo.map((card, i) => (
          <FeatureCard
            key={i}
            title={card.title}
            content={card.content}
            icon={card.icon}
            animationDelay={i * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
