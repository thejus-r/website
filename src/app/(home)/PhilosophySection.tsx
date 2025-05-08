import SectionWrapper from "@/components/SectionWrapper";
import { H3, P, DisplaySmall } from "@/components/ui/Typography";

const PhilosophySection = () => {
  return (
    <SectionWrapper noPadding>
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 my-10 p-8 md:p-14 flex flex-col gap-4">
        <DisplaySmall intent={"inverted"}>
          &quot;The alternative to good design is bad design.
          <br className="hidden md:block" />
          There is no such thing as no design&quot;
        </DisplaySmall>
        <P size={"large"} intent={"invertedSecondary"}>
          This philosophy is what drives the designer in me.
        </P>
      </div>
    </SectionWrapper>
  );
};

export default PhilosophySection;
