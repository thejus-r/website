import type { Project } from "../types/ProjectType";

const projects: Project[] = [
  {
    title: "Scout",
    type: "UI/UX",
    desc: "A small case-study on how we can implement a modern experience for easier food exploration based on users prefererance and dieatary restrictions",
    imgPath: "/images/scout/banner.png",
    slug: "https://medium.com/@thejusr/scout-app-case-study-9b992d9385b4",
    dateCreated: "2023-01-12",
    public: true,
  },
  {
    title: "Tic-Tac-Toe",
    type: "ReactJS Dev",
    desc: "A simple tic-tac-toe web game build with ReactJS and TailwindCSS, while exploring libraries such as Zustand, framer-motion, etc",
    imgPath: "/images/scout/banner.png",
    slug: "https://medium.com/@thejusr/scout-app-case-study-9b992d9385b4",
    dateCreated: "2023-03-06",
    public: true,
  },
];

export default projects;
