import SectionWrapper from "@/components/SectionWrapper";
import { StarterIcon } from "@/components/ui/Icons";
import { DisplaySmall, Label, P } from "@/components/ui/Typography";

const features = [
  {
    type: "Meaningful Engagements",
    icon: <StarterIcon className="w-5 h-5" />,
  },
  {
    type: "Support for learning and growth",
    icon: <StarterIcon className="w-5 h-5" />,
  },
  {
    type: "Opening new opportunities",
    icon: <StarterIcon className="w-5 h-5" />,
  },
];

const SolutionSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 max-w-2xl">
        <Label intent={"tertiary"}>Solution</Label>
        <DisplaySmall>Introducing Herkey</DisplaySmall>
      </div>
      <div className="mt-8 gap-4 grid grid-flow-col-dense md:grid-cols-12 grid-rows-3 md:grid-rows-2">
        <div className="max-w-2xl col-span-full md:col-span-8">
          <P size={"large"}>
            The main goals for Herkey is to become a dependable companion for
            every women on her career journey, enabling her growth, opening up
            her opportunities, creating meaningful engagements and facilitating
            her career journey onwards and upwards.
          </P>
        </div>
        <div className="col-span-full order-last md:col-span-8">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex gap-4 py-2 items-center">
                <div className="bg-neutral-100 p-2">
                  <StarterIcon className="w-5 h-5" />
                </div>
                <Label size={"small"} weight={"light"}>
                  {feature.type}
                </Label>
              </div>
            );
          })}
        </div>
        <div className="flex col-span-full md:col-span-4 row-span-2 items-center relative justify-center">
          <div className="w-full h-full bg-amber-100">image</div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SolutionSection;
