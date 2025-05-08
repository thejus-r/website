import SectionWrapper from "@/components/SectionWrapper";
import { DisplaySmall, Label, P } from "@/components/ui/Typography";

type Insight = {
  adlib: string;
  value: string;
  description: string;
};

const insights: Insight[] = [
  {
    adlib: "Only",
    value: "10%",
    description: "of Indian women stay engaged in their careers",
  },
  {
    adlib: "Up to",
    value: "59%",
    description: "of women wanted help in learning new skills",
  },
  {
    adlib: "Interestingly",
    value: "67%",
    description:
      "of women seek personal content/experience which competitors lack",
  },
  {
    adlib: "Sadly",
    value: "75.5%",
    description:
      "of women find managing family and work commitments challenging",
  },
];

const KickOffSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4">
        <Label intent={"tertiary"}>Kickoff</Label>
        <DisplaySmall>Early insights from the fields</DisplaySmall>
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <P size={"large"}>
            We interviewed more than ten women across different domains, age and
            career levels.
          </P>
          <P size={"large"}>
            Our goals were to understand the challengers faced by them.
          </P>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 xl:gap-8">
          {insights.map((insight, index) => {
            return <InsightCard key={index} {...insight} />;
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

const InsightCard = (insight: Insight) => {
  const { adlib, value, description } = insight;
  return (
    <div className="bg-neutral-100 col-span-1 p-4 flex flex-col gap-2">
      <Label intent={"tertiary"} weight={"normal"}>
        {adlib}
      </Label>
      <Label intent={"primary"} weight={"light"} size={"xlarge"}>
        {value}
      </Label>
      <P>{description}</P>
    </div>
  );
};

export default KickOffSection;
