import SectionWrapper from "@/components/SectionWrapper";

const ChallengeSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-mono text-neutral-400">
          The Challenge
        </span>
        <h3 className="text-2xl md:text-3xl font-bold md:max-w-xl">
          Increase engagement of women in the work force
        </h3>
        <p className="font-text text-neutral-500 md:max-w-2xl">
          Over goal for HerKey was to make impact on each women across India to
          actively engage with other allies for their career goal. Our ambitions
          were to create a strong and trusted platform that embraced engagement
          and networking.
        </p>
        <div className="flex flex-col mt-4 gap-4 font-text text-neutral-500 md:max-w-2xl">
          <h4 className="font-sans text-neutral-950 text-lg font-bold">
            My Role
          </h4>
          <p>
            I was part of the design team, through the whole project timeline
            and collaborated with two other designers.
          </p>
          <p>
            In addition, I worked alongside a Researcher and a Product Manager.
          </p>
          <p>The app officially launched on May of 2024</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ChallengeSection;
