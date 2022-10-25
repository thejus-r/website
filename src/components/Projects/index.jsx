import React from "react"
import { motion } from "framer-motion"

export default function Projects({ bgColor, title }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: -100, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      href="https://www.google.com"
      className={` md:m-12 h-[600px] p-8 md:p-12 bg-[${bgColor}] text-white grid lg:grid-cols-2`}
    >
      <div>
        <h4 className="text-3xl font-bold">{title}</h4>
        <p className="text-base md:text-lg lg:text-2xl mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus
          eos nobis facere explicabo accusamus ad labore maiores fugiat autem
          quae tempora unde doloremque, non esse dolorem ipsum ea officiis!
        </p>
      </div>
    </motion.a>
  )
}

// bg-white shadow-2xl
