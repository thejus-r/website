import React from "react"
import { motion } from "framer-motion"
import projectDetails from "../../config/projects"

const container = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.75,
  },
  inView: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      staggerChilder: 1,
      when: "beforeChildren",
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

const children = {
  initial: {
    y: 100,
    opacity: 0,
  },
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={container}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      className={`${project.bgColor} text-white p-8 lg:p-16 grid lg:grid-cols-2`}
    >
      <motion.div variants={children} className="flex flex-col h-full">
        <h5 className="hidden lg:block text-xl font-bold text-white/70 pb-4">
          {project.type}
        </h5>
        <h4 className="text-2xl lg:text-4xl font-bold mb-8">{project.title}</h4>
        <p className="hidden lg:block text-2xl">{project.decription}</p>
        <a
          href={project.mediumLink}
          className="hidden lg:flex items-center mt-auto p-4 text-2xl border-2 w-max"
        >
          Read full case study on
          <img className="h-10 ml-2" src="/assets/medium-logo.png"></img>
        </a>
      </motion.div>
      <motion.div variants={children}>
        <img
          className="h-[450px] lg:h-[750px] mx-auto shadow-2xl"
          src={project.image1}
          alt={project.title}
        />
      </motion.div>
      <motion.div
        variants={children}
        className="flex justify-between items-center pt-8 lg:hidden"
      >
        <h5 className="text-xl font-bold text-white/70">{project.type}</h5>
        <a
          className="text-lg underline underline-offset-4"
          href={project.mediumLink}
        >
          <img className="h-10" src="/assets/medium-symbol.png" alt="" />
        </a>
      </motion.div>
    </motion.div>
  )
}
