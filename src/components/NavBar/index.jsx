import { motion, AnimatePresence, useCycle } from "framer-motion";
import routes from "../../config/routes";
import MenuButton from "../../utils/MenuButton";

const dropDownVariants = {
  hidden: {
    height: 0,
    transition: { duration: 0.2, staggerChildren: 0.1, when: "afterChildren" },
  },
  visible: {
    height: "54vh",
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const dropDownItemVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div className="w-screen absolute top-0 left-0">
      <div className="flex bg-white justify-between items-center">
        <div className="text-3xl p-6">
          <span>tr</span>
          <span className="text-red-500">.</span>
        </div>

        <MenuButton toggleOpen={toggleOpen} isOpen={isOpen} />

        {/* <motion.div
          className="p-8 cursor-pointer"
          whileTap={{ scale: 0.97 }}
          onClick={() => toggleOpen(!isOpen)}
        >
          open/close
        </motion.div> */}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={dropDownVariants}
            initial="hidden"
            animate={isOpen && "visible"}
            exit="hidden"
            className="bg-white"
          >
            {routes.map((route) => {
              return (
                <motion.li
                  key={route.name}
                  variants={dropDownItemVariants}
                  className="text-4xl text-center p-4"
                >
                  <a href={route.path}>{route.name}</a>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
