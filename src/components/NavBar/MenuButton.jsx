import { motion } from "framer-motion"

const iconVarients = {
  initial: {
    rotate: 0,
    backgroundColor: "#000",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },

  openTop: {
    x: -5,
    y: 5,
    backgroundColor: "#fff",
    rotate: 45,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  openBottom: {
    x: -5,
    y: -5,
    backgroundColor: "#fff",
    rotate: -45,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

export default function MenuButton({ toggleOpen, isOpen }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
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
    </motion.div>
  )
}
