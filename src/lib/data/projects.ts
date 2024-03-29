import type { Project } from "../types/ProjectType";

const projects: Project[] = [
  {
    title: "Scout",
    type: "UI/UX",
    desc: "A small case-study on how we can implement a modern experience for easier food exploration based on users prefererance and dieatary restrictions",
    imgPath: "/images/scout/banner.png",
    slug: "https://medium.com/@thejusr/scout-app-case-study-9b992d9385b4",
    dateCreated: "2023-03-16",
    public: true,
  },
  {
    title: "CECify Radio",
    type: "Design",
    desc: "A complete design and branding of a college student initiative. From social media campaigns to motion graphics.",
    imgPath: "/images/cecify/banner.png",
    slug: "https://www.behance.net/gallery/150723417/CECify-Season-2-%282021%29-Rebranding",
    dateCreated: "2023-03-15",
    public: true,
  },
  {
    title: "Tic-Tac-Toe",
    type: "Web App",
    desc: "A simple tic-tac-toe web game build with ReactJS and TailwindCSS, while exploring libraries such as Zustand, framer-motion, etc",
    imgPath: "/images/tic-tac-toe/banner1.png",
    slug: "https://github.com/thejus-r/tic-tac-toe",
    dateCreated: "2023-03-06",
    public: true,
  },
  {
    title: "Tasky",
    type: "Web App",
    desc: "A modern looking React app that helps to manage and schedule your tasks, using React Query, Redux ToolKit, TailwindCSS, Supabase and Zustand",
    imgPath: "/images/tasky/banner.png",
    slug: "https://github.com/thejus-r/tasky",
    dateCreated: "2023-03-14",
    public: true,
  },
];

export default projects;
