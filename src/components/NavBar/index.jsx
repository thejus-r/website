import { motion, AnimatePresence, useCycle } from "framer-motion"
import MenuButton from "./MenuButton"
import routes from "../../config/routes"
import BrandLogo from "./BrandLogo"

const navBarVariants = {
  closed: {
    height: "96px",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  open: {
    height: "70vh",
    backgroundColor: "#262626",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

const dropDownVariants = {
  closed: {
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      staggerChildren: 0.2,
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, -0.05, 0.95],
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const dropDownItemVariants = {
  closed: {
    y: -20,
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
}

export default function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <AnimatePresence>
      <motion.div
        variants={navBarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="w-full top-0 sticky"
      >
        <div className="flex h-[96px] px-8 justify-between items-center">
          <BrandLogo isOpen={isOpen} />
          <MenuButton toggleOpen={toggleOpen} isOpen={isOpen} />
        </div>

        {isOpen && (
          <motion.div
            className=" text-white text-5xl md:text-6xl lg:text-7xl text-center"
            variants={dropDownVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {routes.map((route) => {
              return (
                <motion.div
                  className="m-10 md:m-12 lg:m-14"
                  key={route.name}
                  variants={dropDownItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={route.path}>{route.name}</a>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
