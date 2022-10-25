import React from "react"

export default function Button({ content, link }) {
  return (
    <a
      href={link}
      className="bg-neutral-800 w-36 md:w-64 h-16 text-white flex justify-center items-center text-md md:text-2xl"
    >
      {content}
    </a>
  )
}
