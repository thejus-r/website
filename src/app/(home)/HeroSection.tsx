import SectionWrapper from "@/components/SectionWrapper";
import { H1, P } from "@/components/ui/Typography";

const HeroSection = () => {
  return (
    <SectionWrapper>
      <section className="h-[480px] relative">
        <div className="flex flex-col max-w-lg gap-4 justify-center h-full">
          <H1>Designing delightful experiences and scalable applications</H1>
          <P>
            Delivered products that has reached over a millions of users world
            wide
          </P>
          <p className="max-w-96 text-neutral-500 font-text"></p>
        </div>

        <div className="hidden -z-50 lg:block absolute -inset-10">
          {/* ThreeJS Canvas Placeholder for ID Card Design */}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default HeroSection;
