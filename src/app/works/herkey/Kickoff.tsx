import SectionWrapper from "@/components/SectionWrapper";

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
        <span className="text-sm font-mono text-neutral-400">Kickoff</span>
        <h3 className="text-2xl md:text-3xl font-bold md:max-w-xl">
          Early insights from the fields
        </h3>
        <div className="flex flex-col gap-4 font-text text-neutral-500 md:max-w-2xl">
          <p>
            We interviewed more than ten women across different domains, age and
            career levels.
          </p>
          <p>Our goals were to understand the challengers faced by them.</p>
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
      <span className="font-mono text-neutral-400">{adlib}</span>
      <p className="text-4xl font-mono font-light">{value}</p>
      <p className="text-sm text-pretty md:text-balance">{description}</p>
    </div>
  );
};

export default KickOffSection;
