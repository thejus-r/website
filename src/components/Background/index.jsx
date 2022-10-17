import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useFollowPointer } from "./useFollowPointer"
import "./index.css"

export default function Background() {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)
  return (
    <div className="graph-paper absolute top-0 left-0 h-screen w-screen text-white">
      <motion.div
        ref={ref}
        className="h-64 w-64 blur-3xl  rounded-full bg-red-400 absolute"
        initial={{ x: "50%", y: "50%" }}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 100,
          stiffness: 10,
          restSpeed: 0,
          restDelta: 0,
        }}
      />
      <motion.div
        ref={ref}
        className="h-64 w-64 blur-3xl  rounded-full bg-purple-400 absolute"
        animate={{ x, y }}
        initial={{ x: "50%", y: "50%" }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 10,
          restSpeed: 0,
          restDelta: 0,
        }}
      />
    </div>
  )
}
