import React from "react"

import projects from "../../config/projects"

const project = projects[0]

export default function ProjectCard() {
  return (
    <>
      <div
        className={`${project.bgColor} text-white p-8 lg:p-16 grid lg:grid-cols-2`}
      >
        <div>
          <h5 className="hidden lg:block text-xl font-bold text-white/70 pb-4">
            {project.type}
          </h5>
          <h4 className="text-2xl lg:text-4xl font-bold mb-8">
            {project.title}
          </h4>
          <p className="hidden lg:block text-2xl">{project.decription}</p>
        </div>
        <div>
          <img
            className="h-[450px] lg:h-[750px] mx-auto shadow-2xl"
            src={project.image1}
            alt={project.title}
          />
        </div>
        <div className="flex justify-between items-center pt-8 lg:hidden">
          <h5 className="text-xl font-bold text-white/70">{project.type}</h5>
          <a
            className="text-lg underline underline-offset-4"
            href={project.mediumLink}
          >
            <img className="h-10" src="/assets/medium-symbol.png" alt="" />
          </a>
        </div>
      </div>
    </>
  )
}
