import { motion } from "framer-motion"

export default function BrandLogo({ isOpen }) {
  const logoVariants = {
    open: {
      color: "#000",
    },
    closed: {
      color: "#fff",
    },
  }
  return (
    <motion.a
      className="text-3xl font-bold p-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href="/"
    >
      <motion.span
        variants={logoVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        tr
      </motion.span>
      <span className="text-red-500">.</span>
    </motion.a>
  )
}
