import SectionWrapper from "@/components/SectionWrapper";
import { DisplaySmall, Label, P } from "@/components/ui/Typography";

type UserGroup = {
  name: string;
  description: string;
};

const userGroups: UserGroup[] = [
  {
    name: "Starters",
    description:
      "Freshers who are just starting their career or will be joining the work force after graduation",
  },
  {
    name: "Risers",
    description:
      "Those around middle management roles, who wants to advance their career forward",
  },
  {
    name: "Restarters",
    description:
      "Those who have taken a break in the career, now trying to join back the work force",
  },
  {
    name: "Champions",
    description:
      "Those with immense experience who wanted to guide, support and engage with other women",
  },
];

const DiscoverySection = () => {
  return (
    <SectionWrapper noBorder noPadding>
      <div className="bg-gradient-to-br from-neutral-950  via-neutral-900 to-neutral-950 flex flex-col gap-4 px-5 md:px-10 py-10">
        <Label intent={"tertiary"}>The Discovery</Label>
        <div className="md:max-w-xl flex flex-col gap-4">
          <DisplaySmall intent={"inverted"}>
            Curiosity revealed an opportunity to perfect the platform
          </DisplaySmall>
          <P size={"large"} intent={"invertedSecondary"}>
            While refining the data, we got to find out women needed more than
            just job listing platform.
          </P>
          <P size={"large"} intent={"invertedSecondary"}>
            Based on the challenges and requirements, we where able to define
            user groups.
          </P>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
          {userGroups.map((userGroup, index) => {
            return <GroupCard key={index} {...userGroup} />;
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

const GroupCard = (userGroup: UserGroup) => {
  const { name, description } = userGroup;
  return (
    <div className="p-4 flex gap-4 bg-white/5">
      <div className="h-16 w-16 bg-white/10"></div>
      <div className="flex flex-1 flex-col gap-1">
        <Label weight={"semibold"} size={"large"} intent={"invertedPrimary"}>
          {name}
        </Label>
        <P intent={"invertedSecondary"}>{description}</P>
      </div>
    </div>
  );
};

export default DiscoverySection;
