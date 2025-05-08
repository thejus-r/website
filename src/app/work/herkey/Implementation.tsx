import SectionWrapper from "@/components/SectionWrapper";
import { DisplaySmall, Label, P } from "@/components/ui/Typography";

type Feature = {
  title: string;
  desciption: string;
  imgSrc: string;
};
const features: Feature[] = [
  {
    title: "Learn from the best",
    desciption:
      "Enables the users to host a discussion with others, through an audio only space to get feedbacks or influence them.",
    imgSrc: "",
  },
  {
    title: "Connections made easy",
    desciption:
      "Enables the users to connect and actively engage with like minded users for support, learning or just networking.",
    imgSrc: "",
  },
  {
    title: "Showcase yourself",
    desciption:
      "Users can now showcase their life and career events, through their profile, thus making it unique & personalised for each of them.",
    imgSrc: "",
  },
  {
    title: "Jobs find you now!",
    desciption:
      "Enables the users to connect and actively engage with like minded users for support, learning or just networking.",
    imgSrc: "",
  },
];

const ImplementationSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 max-w-2xl">
        <Label intent={"tertiary"}>Implementation</Label>
        <DisplaySmall>Giving them the platform they needed!</DisplaySmall>
        <P size={"large"}>
          The main goals for Herkey is to become a dependable companion for
          every women on her career journey, enabling her growth, opening up her
          opportunities, creating meaningful engagements and facilitating her
          career journey onwards and upwards.
        </P>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-8 md:gap-4">
        {features.map((feature, index) => {
          return <FeatureCard key={index} {...feature} />;
        })}
      </div>
    </SectionWrapper>
  );
};

const FeatureCard = (feature: Feature) => {
  return (
    <div className="p-0 md:p-4 flex flex-col gap-4 border-0 md:border border-neutral-200">
      <div className="w-full  grid-pattern h-96"></div>
      <div className="flex flex-col gap-1">
        <Label size={"large"} type={"sans"} weight={"semibold"}>
          {feature.title}
        </Label>
        <P size={"default"}>{feature.desciption}</P>
      </div>
    </div>
  );
};

export default ImplementationSection;
