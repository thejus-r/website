import { motion, Variants, MotionConfig } from "framer-motion";

const EASE = [0.32, 0.72, 0, 1];

const parentVarients: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};
const childrenVarients: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Banner = () => {
  return (
    <MotionConfig transition={{ ease: EASE, duration: 1.2 }}>
      <motion.section
        variants={parentVarients}
        initial="hidden"
        animate="visible"
        className="md:h-72 md:px-12 flex flex-col justify-end space-y-8"
      >
        <motion.div
          variants={childrenVarients}
          className="text-xl md:text-4xl font-black md:max-w-2xl"
        >
          <h1>
            Thejus is an aspirant Front-end Engineer, seeking for full-time
            position right now.
          </h1>
        </motion.div>
        <motion.div variants={childrenVarients}>
          <p className="text-base font-bold text-stone-400">Currently in</p>
          <p className="text-base font-bold text-stone-900">Kollam, Kerala</p>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
};

export default Banner;
