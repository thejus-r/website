import SectionWrapper from "@/components/SectionWrapper";
import { Insight, Project } from "@/types/project";
import { projects } from "@/content/projects";
import Link from "next/link";
import { H2, H3, P } from "@/components/ui/Typography";

const ProjectCard = (project: Project) => {
  const { name, description, insights } = project;
  return (
    <div className="flex flex-col-reverse md:flex-row p-5 md:p-10 gap-8 not-last:border-b border-b-neutral-200">
      <div className="hidden lg:block h-24 w-24 bg-neutral-200"></div>
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-1">
          <H2>{name}</H2>
          <P>{description}</P>
        </div>
        <div className="flex gap-10">
          {insights.map((insight, index) => {
            return <InsightCard key={index} {...insight} />;
          })}
        </div>
        <Link
          href={project.link}
          className="px-4 text-white bg-neutral-950 h-14 md:h-12 min-w-32 md:w-fit"
        >
          Read case study
        </Link>
      </div>
      <div className="md:w-[350] h-[350] bg-neutral-200"></div>
    </div>
  );
};

const InsightCard = ({ value, description }: Insight) => {
  return (
    <div className="flex flex-col max-w-32">
      <p className="font-mono font-bold text-lg">{value} </p>
      <p className="font-mono tracking-tight text-sm/snug text-neutral-500">
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
          <H3>Projects</H3>
          <P>Only the best of the best has made to here.</P>
        </div>
        {projects.map((project) => {
          return <ProjectCard key={project.name} {...project} />;
        })}
      </section>
    </SectionWrapper>
  );
};

export default ProjectSection;
