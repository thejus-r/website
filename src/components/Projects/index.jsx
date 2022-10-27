import React from "react"
import { motion } from "framer-motion"

export default function Projects({ bgColor, title }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: -100, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      href="https://www.google.com"
      className={` md:m-12  p-8 md:p-12 ${bgColor} text-white grid lg:grid-cols-2`}
    >
      <div>
        <h4 className="text-3xl font-bold">{title}</h4>
        <p className="text-base md:text-lg lg:text-2xl mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus
          eos nobis facere explicabo accusamus ad labore maiores fugiat autem
          quae tempora unde doloremque, non esse dolorem ipsum ea officiis!
        </p>
      </div>
      <div className="overflow-clip mt-8">
        <img
          alt="project 1"
          src="assets/projects/project1.png"
          className="object-cover mx-auto  shadow-lg"
        ></img>
      </div>
    </motion.a>
  )
}

// bg-white shadow-2xl
