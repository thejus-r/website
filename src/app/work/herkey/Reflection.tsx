import SectionWrapper from "@/components/SectionWrapper";
import { StarterIcon } from "@/components/ui/Icons";
import { DisplaySmall, Label, P } from "@/components/ui/Typography";

const problems = [
  {
    cause: "Lacked engagement features",
  },
  {
    cause: "Inconsistent design system",
  },
  {
    cause: "Inconsistent design system",
  },
  {
    cause: "Inconsistent design system",
  },
];

const ReflectionSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 my-4 max-w-2xl">
        <Label intent={"tertiary"}>Reflection</Label>
        <DisplaySmall>Evaluating our old platform</DisplaySmall>
        <P size={"large"}>
          JobsForHer had the right mission but struggled with poor usability,
          irrelevant job recommendations, and a lack of community features.
        </P>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-2 md:gap-4">
          {problems.map((problem, index) => {
            return (
              <div className="p-2 md:p-4 border border-neutral-200" key={index}>
                <div className="flex gap-4 items-center">
                  <div className="bg-neutral-100 p-2">
                    <StarterIcon className="w-6 h-6" />
                  </div>
                  <Label type={"sans"} size={"default"} weight={"semibold"}>
                    {problem.cause}
                  </Label>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-full order-first lg:order-last bg-neutral-50">
          content
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ReflectionSection;
