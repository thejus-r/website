import SectionWrapper from "@/components/SectionWrapper";
import { DisplaySmall, Label, P } from "@/components/ui/Typography";

const HandoffSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 max-w-2xl">
        <Label intent={"tertiary"}>Handoff</Label>
        <DisplaySmall>Comprehensive information architecture map</DisplaySmall>
        <P size={"large"}>
          The main goals for Herkey is to become a dependable companion for
          every women on her career journey, enabling her growth, opening up her
          opportunities, creating meaningful engagements and facilitating her
          career journey onwards and upwards.
        </P>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-8 md:gap-4"></div>
    </SectionWrapper>
  );
};

export default HandoffSection;
