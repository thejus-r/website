import SectionWrapper from "@/components/SectionWrapper";
import { H3 } from "@/components/ui/Typography";

const PhilosophySection = () => {
  return (
    <SectionWrapper noPadding>
      <div className="bg-neutral-950 my-10 p-8 md:p-14 flex flex-col gap-4">
        <H3 intent={"inverted"}>
          "The alternative to good design is bad design. <br />
          There is no such thing as no design"
        </H3>
        <p className="text-sm md:text-lg text-white">
          This philosophy is what drives the designer in me.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PhilosophySection;
