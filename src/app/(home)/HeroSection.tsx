import SectionWrapper from "@/components/SectionWrapper";
import { inter } from "@/styles/fonts";

const HeroSection = () => {
  return (
    <SectionWrapper>
      <section className="h-[480px] relative">
        <div className="flex flex-col max-w-lg gap-4 justify-center h-full">
          <h1 className="font-bold text-3xl ">
            Designing delightful experiences and scalable applications
          </h1>
          <h2 className={`${inter.className} max-w-96 text-neutral-500`}>
            Delivered products that has reached over a millions of users world
            wide
          </h2>
        </div>

        <div className="hidden -z-50 lg:block absolute -inset-8">
          {/* ThreeJS Canvas Placeholder for ID Card Design */}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default HeroSection;
