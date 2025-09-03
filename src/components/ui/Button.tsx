import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  content: string;
  type: string;
  icon?: LucideIcon;
}

const Button = ({ icon: Icon, content, type }: ButtonProps) => {
  return (
    <a href="/">
      <button
        className={
          type === "primary"
            ? "bg-amber-500 font-medium inline-flex items-center gap-2 px-6 py-2 text-white text-[14px] rounded-lg hover:bg-amber-600 hover:cursor-pointer transition-all duration-300 ease-in-out"
            : "bg-white font-medium px-4 py-2 text-black text-[14px] rounded-full hover:bg-neutral-100 hover:cursor-pointer transition-all duration-300 ease-in-out"
        }
      >
        {Icon && <Icon className="w-4 h-4" />}
        {content}
      </button>
    </a>
  );
};

export default Button;
