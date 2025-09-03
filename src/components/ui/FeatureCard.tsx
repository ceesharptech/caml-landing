import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  content: string;
  icon: LucideIcon;
  animationDelay?: number;
}

const FeatureCard = ({
  title,
  content,
  icon: Icon,
  animationDelay,
}: FeatureCardProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: animationDelay,
        }}
        viewport={{ once: true }}
        className="card-container p-10 rounded-lg flex flex-col gap-4 justify-center items-center"
      >
        <div className="icon-container text-amber-500 bg-[#fafafa] p-4 rounded-full">
          <Icon className="w-6 h-6" />
        </div>
        <div className="card-title font-bold text-lg">{title}</div>
        <div className="card-content text-sm text-center">{content}</div>
      </motion.div>
    </>
  );
};

export default FeatureCard;
