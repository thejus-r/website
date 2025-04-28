import SectionWrapper from "@/components/SectionWrapper";

const HeroSection = () => {
  return (
    <SectionWrapper>
      <section className="h-[480px] relative">
        <div className="flex flex-col max-w-lg gap-4 justify-center h-full">
          <h1 className="text-3xl font-bold">
            Designing delightful experiences and scalable applications
          </h1>
          <p className="max-w-96 text-neutral-500 font-text">
            Delivered products that has reached over a millions of users world
            wide
          </p>
        </div>

        <div className="hidden -z-50 lg:block absolute -inset-8">
          {/* ThreeJS Canvas Placeholder for ID Card Design */}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default HeroSection;
