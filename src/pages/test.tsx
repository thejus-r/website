import { motion, Variants } from "framer-motion";

const parentVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childrenVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function Test() {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 p-4"
    >
      <Children index={1} />
      <Children index={2} />
      <Children index={3} />
    </motion.div>
  );
}

function Children({ index }: { index: number }) {
  return (
    <motion.div
      variants={childrenVariants}
      className="p-6 w-full h-24 bg-red-500 text-white"
    >
      Child {index}
    </motion.div>
  );
}
