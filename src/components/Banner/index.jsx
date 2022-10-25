import { animate, motion } from "framer-motion"
import TextAnimation from "../../utils/TextAnimation"

// variants
const banner = {
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

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
}

// Main Banner Component
export default function Banner() {
  return (
    <div className="m-12 sm:m-20 md:m-32 lg:m-48 xl:m-55 text-gray-800"></div>
  )
}

// Middle Banner
