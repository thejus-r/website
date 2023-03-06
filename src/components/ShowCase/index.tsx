import { Project } from "@/lib/types/ProjectType";
import ShowCaseCard from "./ShowCaseCard";
import { motion, Variants } from "framer-motion";

const parentVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.3,
    },
  },
};

const childrenVarients: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    transition: {
      ease: [0.32, 0.72, 0, 1],
      duration: 3,
    },
    y: 0,
  },
};

function ShowCase({ projects }: { projects: Project[] }) {
  return (
    <motion.section
      variants={parentVariants}
      initial="hidden"
      animate="show"
      className="mt-12 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {projects.map((project: Project, index: number) => {
        return (
          <motion.div
            variants={childrenVarients}
            key={index}
            className={`${index === 0 ? "md:col-span-2 p-4" : "p-4"}`}
          >
            <ShowCaseCard {...project} />
          </motion.div>
        );
      })}
    </motion.section>
  );
}

export default ShowCase;
