import { motion, useCycle } from "framer-motion";

const iconVarients = {
  initial: { rotate: 0 },

  openTop: { x: -5, y: 5, rotate: 45 },
  openBottom: { x: -5, y: -5, rotate: -45 },
};

export default function MenuButton({ toggleOpen, isOpen }) {
  return (
    <div
      className="flex flex-col justify-center p-4"
      onClick={() => toggleOpen()}
    >
      <motion.div
        className="w-[48px] h-[2px] bg-black m-1"
        variants={iconVarients}
        initial="initial"
        animate={isOpen ? "openTop" : "initial"}
      ></motion.div>
      <motion.div
        className="w-[48px] h-[2px] bg-black m-1"
        variants={iconVarients}
        initial="initial"
        animate={isOpen ? "openBottom" : "initial"}
      ></motion.div>
    </div>
  );
}
