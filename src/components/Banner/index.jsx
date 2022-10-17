import { animate, motion } from "framer-motion";
import TextAnimation from "../../utils/TextAnimation";

// variants
const banner = {
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const textAnimation = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

// Main Banner Component
export default function Banner() {
  return (
    <div className="m-12 sm:m-20 md:m-32 lg:m-48 xl:m-55 text-white">
      <motion.div
        className="sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-[Chillax]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.75, duration: 0.3 },
        }}
      >
        thejus rajendran
      </motion.div>
      <motion.div variants={banner} initial="initial" animate="animate">
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl overflow-hidden font-thin md:my-2">
          <motion.div variants={textAnimation}>user experience</motion.div>
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl overflow-hidden font-semibold">
          <motion.div variants={textAnimation}>designer</motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Middle Banner
