import { animate, motion } from "framer-motion";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const letterAnimation = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

export default function TextAnimation({ text = "text goes here" }) {
  return (
    <div>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className=" flex overflow-hidden text-9xl text-white"
      >
        {[...text].map((letter) => (
          <motion.span variants={letterAnimation}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
