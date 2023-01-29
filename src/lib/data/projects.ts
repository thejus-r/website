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
        title: "CECify Radio",
        type: "Branding",
        desc: "A college talk show for which a calming and professional design system was created for embedding its brand identity to its motives",
        imgPath: "/images/scout/banner.png",
        slug: "https://medium.com/@thejusr/scout-app-case-study-9b992d9385b4",
        dateCreated: "2022-08-19",
        public: false,
    },
]

export default projects;