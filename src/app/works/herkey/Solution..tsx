import SectionWrapper from "@/components/SectionWrapper";
import { DisplaySmall, Label, P } from "@/components/ui/Typography";

const SolutionSection = () => {
  return (
    <SectionWrapper>
      <Label intent={"tertiary"}>The Solution</Label>
      <DisplaySmall>Evaluating our old platform</DisplaySmall>
      <P size={"large"}>
        JobsForHer had the right mission but struggled with poor usability,
        irrelevant job recommendations, and a lack of community features.
      </P>
    </SectionWrapper>
  );
};

export default SolutionSection;
