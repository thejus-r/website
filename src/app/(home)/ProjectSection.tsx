import SectionWrapper from "@/components/SectionWrapper";
import { Insight, Project } from "@/types/project";
import { projects } from "@/content/projects";
import Link from "next/link";
import { H2, H3, P, Label } from "@/components/ui/Typography";

const ProjectCard = (project: Project) => {
  const { name, description, insights } = project;
  return (
    <div className="flex flex-col-reverse md:flex-row p-5 md:p-10 gap-8 not-last:border-b border-b-neutral-200">
      <div className="hidden lg:block h-24 w-24 bg-neutral-200"></div>
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-2">
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
    <div className="flex flex-col gap-1 max-w-32">
      <Label weight={"semibold"} size={"large"}>
        {value}
      </Label>
      <P type={"mono"} size={"small"}>
        {description}
      </P>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <SectionWrapper noPadding>
      <section>
        <div className="flex p-5 md:p-10 flex-col gap-2 border-b border-b-neutral-200">
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
