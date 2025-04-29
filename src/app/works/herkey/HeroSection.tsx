import SectionWrapper from "@/components/SectionWrapper";

const HeroSection = () => {
  return (
    <SectionWrapper>
      <section className="h-[720] md:h-[540] flex flex-col-reverse md:flex-row gap-8">
        <div className="flex-1 flex flex-col justify-between h-full">
          <span className="font-mono text-sm text-neutral-400">Case Study</span>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl xl:text-5xl/snug font-bold">
              Bridging the gap between gender and the work force
            </h1>
            <p className="text-lg font-text text-neutral-400">
              I was part of the ambitious project to redesign JobsForHer, the
              largest career engagement platform for women in India
            </p>
          </div>
          <div className="bg-neutral-100 p-4 font-mono text-sm text-neutral-500">
            All information in this case study is my own and does not
            necessarily reflect the views of HerKey or Flood{" "}
          </div>
        </div>
        <div className="h-full flex-1 bg-neutral-100">photo</div>
      </section>
    </SectionWrapper>
  );
};

export default HeroSection;
