import SectionWrapper from "@/components/SectionWrapper";
import { Insight, Project } from "@/types/project";
import { projects } from "@/content/projects";
import { H2, H3, P, Label } from "@/components/ui/Typography";
import Image from "next/image";

const ProjectCard = (project: Project) => {
  const { name, description, insights } = project;
  return (
    <div className="flex flex-col-reverse md:flex-row p-5 md:p-10 gap-8 not-last:border-b border-b-neutral-200">
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
        {/* button to be added here for product page */}
      </div>
      <div className="md:w-[400] flex bg-linear-to-t border border-neutral-200 from-black/10 to-white">
        <Image
          className="object-cover"
          src={project.thumbnailImage}
          alt={project.name}
          height={500}
          width={500}
        />
      </div>
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
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <SectionWrapper noPadding>
      <section>
        <div className="flex p-5 md:p-10 flex-col gap-2 border-b border-b-neutral-200">
          <H3>Products</H3>
          <P>Only the best of the best has made to here.</P>
        </div>
        {featuredProjects.map((project) => {
          return <ProjectCard key={project.name} {...project} />;
        })}
      </section>
    </SectionWrapper>
  );
};

export default ProjectSection;
