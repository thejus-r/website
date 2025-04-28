import { geistMono, inter } from "@/styles/fonts";
import SectionWrapper from "@/components/SectionWrapper";
import { Insight, Project } from "@/types/project";
import { projects } from "@/content/projects";

const ProjectCard = (project: Project) => {
  const { name, description, insights } = project;
  return (
    <div className="flex flex-col-reverse md:flex-row p-5 md:p-10 gap-8 not-last:border-b border-b-neutral-200">
      <div className="hidden lg:block h-24 w-24 bg-neutral-200"></div>
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-1">
          <h4 className="text-2xl font-bold">{name}</h4>
          <p className={`${inter.className} text-base text-neutral-500`}>
            {description}
          </p>
        </div>
        <div className="flex gap-10">
          {insights.map((insight, index) => {
            return <InsightCard key={index} {...insight} />;
          })}
        </div>
        <button className="px-4 text-white bg-neutral-950 h-14 md:h-12 min-w-32 md:w-fit">
          Read case study
        </button>
      </div>
      <div className="md:w-[350] h-[350] bg-neutral-200"></div>
    </div>
  );
};

const InsightCard = ({ value, description }: Insight) => {
  return (
    <div className="flex flex-col max-w-32">
      <p className={`${geistMono.className} font-bold text-lg`}>{value} </p>
      <p className={`${geistMono.className} text-sm/snug text-neutral-500`}>
        {description}
      </p>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <SectionWrapper noPadding>
      <section>
        <div className="flex p-5 md:p-10 flex-col gap-1 border-b border-b-neutral-200">
          <h3 className="font-bold text-xl">Projects</h3>
          <p className={`text-base ${inter.className} text-neutral-500`}>
            Only the best of the best has made to here.
          </p>
        </div>
        {projects.map((project) => {
          return <ProjectCard key={project.name} {...project} />;
        })}
      </section>
    </SectionWrapper>
  );
};

export default ProjectSection;
