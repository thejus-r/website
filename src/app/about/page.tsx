import SectionWrapper from "@/components/SectionWrapper";
import { Display, DisplaySmall, Label, P } from "@/components/ui/Typography";

const AboutPage = () => {
  return (
    <>
      <SectionWrapper>
        <section className="h-[540px] relative">
          <Label size={"small"} intent={"tertiary"}>
            About
          </Label>
          <div className="flex flex-col max-w-lg gap-4 justify-center h-full">
            <Display>A little but about myself.</Display>
            <P size={"large"}>
              Thejus Rajendran is passionate about creating new products that
              improve the lives of others through design.
            </P>
            <P size={"large"}>
              I'm constantly learning new things everyday and I love meeting
              people who are motivated and unafraid of sharing their ideas with
              the world.
            </P>
          </div>
        </section>
      </SectionWrapper>
      <SectionWrapper>
        <section>
          <div className="flex flex-col max-w-lg gap-4 justify-center h-full">
            <DisplaySmall>The detour became my destination.</DisplaySmall>
            <P size={"large"}>
              Before graduating as a computer science engineer, I used to
              volunteer on forums as a designer. I was my start of the designer
              journey.
            </P>
            <P size={"large"}>
              However, I still liked the aspect of building products as an
              software engineer.
            </P>
            <P size={"large"}>
              Thus the path of Product Designer, hit me like a home run.
              Combining both crafting the product and building the product.
            </P>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
};
export default AboutPage;
