import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navlinks } from "../data/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setIsOpen(!isOpen);
  };

  const lineClasses =
    "h-0.5 w-8 rounded-md bg-black transition-all duration-300 ease-in-out";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
      }}
      className="bg-white lg:bg-white/90 z-50 fixed top-0 right-0 lg:py-4 py-6 left-0 lg:backdrop-blur-sm"
    >
      <div className="mx-auto md:px-[4rem] px-[2rem] relative">
        <div className="flex justify-between items-center ">
          <div className="company-logo">
            <h1 className="text-xl font-bold">caml.</h1>
          </div>

          {/* Desktop Navigation  */}

          <ul className="hidden md:flex justify-center items-center gap-4">
            {navlinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <button className="bg-amber-500 font-medium px-4 py-2 text-white text-sm rounded-lg hover:bg-amber-600 hover:cursor-pointer transition-all hidden md:block duration-300 ease-in-out">
            Get Started
          </button>

          {/* Custom Mobile Button */}
          <motion.button
            onClick={toggleMobileDrawer}
            className="mobile-button flex flex-col justify-center items-center gap-1.5 p-2 rounded-md focus:outline-none md:hidden hover:cursor-pointer"
            aria-label="Toggle menu"
          >
            {/* Top line */}
            <div
              className={`${lineClasses} ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>

            {/* Middle line */}
            <div
              className={`${lineClasses} ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>

            {/* Bottom line */}
            <div
              className={`${lineClasses} ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              key="modal"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="lg:hidden fixed z-20 right-0 w-full p-12
              flex flex-col justify-center items-center gap-6 bg-white/80 backdrop-blur-lg"
            >
              {navlinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
              <button className="bg-amber-500 px-4 py-2 text-white text-sm rounded-full">
                Get Started
              </button>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
