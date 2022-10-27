import React from "react"
import projectDetails from "../../config/projects"
import ProjectCard from "../ProjectCard"

export default function Projects() {
  return projectDetails.map((project, index) => {
    return <ProjectCard key={index} project={project} />
  })

  // return <ProjectCard project={projectDetails[0]} />
}

// bg-white shadow-2xl
