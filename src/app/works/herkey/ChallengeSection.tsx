import SectionWrapper from "@/components/SectionWrapper";
import { H4, Label, P, DisplaySmall } from "@/components/ui/Typography";

const ChallengeSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4">
        <Label intent={"tertiary"}>The Challenge</Label>
        <DisplaySmall>
          Increase engagement of women in the work force
        </DisplaySmall>
        <P size={"large"}>
          Over goal for HerKey was to make impact on each women across India to
          actively engage with other allies for their career goal. Our ambitions
          were to create a strong and trusted platform that embraced engagement
          and networking.
        </P>
        <div className="flex flex-col mt-4 gap-4">
          <H4>My Role</H4>
          <P size={"large"}>
            I was part of the design team, through the whole project timeline
            and collaborated with two other designers.
          </P>
          <P size={"large"}>
            In addition, I worked alongside a Researcher and a Product Manager.
          </P>
          <P size={"large"}>The app officially launched on May of 2024</P>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ChallengeSection;
