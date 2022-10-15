import { motion, useCycle } from "framer-motion";

const iconVarients = {
  initial: { rotate: 0 },

  openTop: { x: -3, y: 5, rotate: 45 },
  openBottom: { x: -3, y: -5, rotate: -45 },
};

export default function MenuButton() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div className="flex flex-col justify-center" onClick={() => toggleOpen()}>
      <motion.div
        className="w-[64px] h-1 bg-black m-1"
        variants={iconVarients}
        initial="initial"
        animate={isOpen ? "initial" : "openTop"}
      ></motion.div>
      <motion.div
        className="w-[64px] h-1 bg-black m-1"
        variants={iconVarients}
        initial="initial"
        animate={isOpen ? "initial" : "openBottom"}
      ></motion.div>
    </div>
  );
}
