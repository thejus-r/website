import SectionWrapper from "@/components/SectionWrapper";

const PhilosophySection = () => {
  return (
    <SectionWrapper noPadding>
      <div className="bg-neutral-950 my-10 p-8 md:p-14 flex flex-col gap-4">
        <h4 className="text-lg md:text-2xl font-bold text-white max-w-xl">
          {`"The alternative to good design is bad design. There is no such thing as no design"`}
        </h4>
        <p className="text-sm md:text-lg text-white">
          This philosophy is what drives the designer in me.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PhilosophySection;
