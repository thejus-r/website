import { motion } from "framer-motion";

export default function BrandLogo({ isOpen }) {
  const logoVariants = {
    open: {
      color: "#000",
    },
    closed: {
      color: "#fff",
    },
  };
  return (
    <motion.div
      className="text-3xl font-bold p-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        variants={logoVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        tr
      </motion.span>
      <span className="text-red-500">.</span>
    </motion.div>
  );
}
