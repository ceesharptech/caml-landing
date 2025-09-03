import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import { motion } from "motion/react";

const CTASection = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl text-center font-bold mb-3"
        >
          Ready to turn your ideas into full blown stories
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm lg:text-lg font-medium text-center text-neutral-500"
        >
          Join Caml. and share your stories with the world
        </motion.p>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button type="primary" content="Get Started" icon={ArrowUpRight} />
      </motion.div>
    </div>
  );
};

export default CTASection;
