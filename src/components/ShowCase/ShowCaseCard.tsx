import type { Project } from "@/lib/types/ProjectType";

import { motion, Variants, MotionConfig } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.32, 0.72, 0, 1];

// Variants for framer-motion
const parentVariants: Variants = {
  initial: {},
  animate: {},
  hover: {},
};

const imageVariants: Variants = {
  initial: {},
  hover: {
    scale: 1.03,
  },
};

const detailsVariants: Variants = {
  initial: {
    opacity: 1,
    y: 85,
    display: "hidden",
  },
  hover: {
    display: "block",
    opacity: 1,
    height: "auto",
    y: 0,
  },
};

const descVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  hover: {
    opacity: 1,
    y: 0,
  },
};

const backdropVariants: Variants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

function ShowCaseCard(props: Project) {
  const { title, type, imgPath, desc, slug } = props;

  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative text-white h-[450px] rounded-2xl overflow-hidden"
    >
      <MotionConfig transition={{ ease: EASE }}>
        <Link href={slug}>
          <motion.div
            variants={imageVariants}
            className="absolute h-full w-full"
          >
            <Image
              loading="lazy"
              className="object-cover absolute"
              fill
              src={imgPath}
              alt={title}
            />
          </motion.div>
          <motion.div
            variants={backdropVariants}
            className="bg-black/40 backdrop-blur-lg h-full w-full absolute inset-0"
          />
          <motion.div className="p-6 sm:p-8 flex flex-col justify-end h-full space-y-1.5">
            <motion.div variants={detailsVariants}>
              <div className="bg-white/40 rounded-full px-2 py-0.5 w-fit shadow-xl mb-0.5 sm:mb-2">
                <p className="text-xs tracking-wider mix font-black uppercase shadow-sm">
                  {type}
                </p>
              </div>
              <h3 className="text-3xl font-bold  w-fit">{title}</h3>
            </motion.div>
            <motion.div variants={descVariants}>
              <p className="font-medium leading-5 opacity-80 md:max-w-xl">
                {desc}
              </p>
              <div className="hidden sm:block mt-4 font-bold">View Project</div>
            </motion.div>
          </motion.div>
        </Link>
      </MotionConfig>
    </motion.div>
  );
}

export default ShowCaseCard;
