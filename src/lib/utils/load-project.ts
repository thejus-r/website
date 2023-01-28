import projects from "../data/projects";

export async function loadProject() {

    const filteredProjects = projects.filter((a) => {
        return a.public === true
    })

    filteredProjects.sort((a, b) => new Date(b.dateCreated).valueOf() - new Date(a.dateCreated).valueOf())

    return filteredProjects

}