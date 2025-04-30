import SectionWrapper from "@/components/SectionWrapper";
import { Display, Label, P } from "@/components/ui/Typography";

const HeroSection = () => {
  return (
    <SectionWrapper>
      <section className="h-[720] md:h-[540] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <Label intent={"tertiary"} size={"small"}>
            Case Study
          </Label>
          <div className="flex flex-col gap-4">
            <Display>
              Bridging the gap between gender and the work force
            </Display>
            <P size={"large"}>
              I was part of the ambitious project to redesign JobsForHer, the
              largest career engagement platform for women in India
            </P>
          </div>
          <div className="bg-neutral-100 p-4 font-mono text-sm text-neutral-500">
            <P type={"mono"} size={"small"}>
              All information in this case study is my own and does not
              necessarily reflect the views of HerKey or Flood
            </P>
          </div>
        </div>
        <div className="bg-neutral-100 order-first md:order-last">content</div>
      </section>
    </SectionWrapper>
  );
};

export default HeroSection;
