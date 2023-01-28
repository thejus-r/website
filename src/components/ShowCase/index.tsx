import { Project } from "@/lib/types/ProjectType";
import ShowCaseCard from "./ShowCaseCard";

function ShowCase({ projects }: { projects: Project[] }) {
    return <section className="mt-12 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project: Project, index: number) => {
            if (index == 0) return <div key={index} className="md:col-span-2"><ShowCaseCard key={index} {...project} /></div>
            return <ShowCaseCard key={index} {...project} />
        })}
    </section>
};

export default ShowCase;