import SectionWrapper from "@/components/SectionWrapper";
import { H3, P } from "@/components/ui/Typography";

const PhilosophySection = () => {
  return (
    <SectionWrapper noPadding>
      <div className="bg-neutral-950 my-10 p-8 md:p-14 flex flex-col gap-4">
        <H3 intent={"inverted"}>
          "The alternative to good design is bad design.{" "}
          <br className="hidden md:block" />
          There is no such thing as no design"
        </H3>
        <P intent={"invertedSecondary"}>
          This philosophy is what drives the designer in me.
        </P>
      </div>
    </SectionWrapper>
  );
};

export default PhilosophySection;
