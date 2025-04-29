import SectionWrapper from "@/components/SectionWrapper";

type UserGroup = {
  name: string;
  description: string;
};

const userGroups: UserGroup[] = [
  {
    name: "Starters",
    description:
      "Freshers who are just starting their career or will be joining the work force",
  },
  {
    name: "Risers",
    description:
      "Women in mid-management, who wants to advance their career forward",
  },
  {
    name: "Restarters",
    description:
      "Those who have taken a break in the career, now trying to join back the work force",
  },
  {
    name: "Champions",
    description:
      "Those with shit ton of experience who wanted to guide, support and engage with other women",
  },
];

const DiscoverySection = () => {
  return (
    <SectionWrapper noBorder noPadding>
      <div className="bg-linear-135 from-black to-neutral-900 flex flex-col gap-4 px-5 md:px-10 py-10">
        <span className="text-sm font-mono text-neutral-400">
          The Discovery
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-i-primary md:max-w-xl">
          Curiosity revealed an opportunity to perfect the platform
        </h3>
        <div className="text-white/80">
          <p>
            While refining the data, we got to find out women needed more than
            just job listing platform.
          </p>
          <p>
            Based on the challenges and requirements, we where able to define
            user groups.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
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
    <div className="p-4 flex gap-4 bg-white/10">
      <div className="h-16 w-16 bg-white/15"></div>
      <div className="flex flex-1 flex-col gap-1">
        <p className="font-mono">{name}</p>
        <p className="font-text text-sm text-white/50 text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DiscoverySection;
