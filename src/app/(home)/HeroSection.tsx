import CardCanvas from "@/components/Band";
import SectionWrapper from "@/components/SectionWrapper";
import { Display, P } from "@/components/ui/Typography";

const HeroSection = () => {
  return (
    <SectionWrapper>
      <section className="h-[540px] relative">
        <div className="flex flex-col max-w-lg gap-4 justify-center h-full">
          <Display>
            Designing delightful experiences and scalable applications
          </Display>
          <P size={"large"}>
            Delivered products that has reached over a millions of users world
            wide
          </P>
          <p className="max-w-96 text-neutral-500 font-text"></p>
        </div>

        <div className="hidden lg:block absolute -inset-10">
          <CardCanvas />
        </div>
      </section>
    </SectionWrapper>
  );
};

export default HeroSection;
