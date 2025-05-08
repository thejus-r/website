import SectionWrapper from "@/components/SectionWrapper";
import { Display, DisplaySmall, Label, P } from "@/components/ui/Typography";
import Image from "next/image";

// images
//
import detourImage from "./detour.png";
import me from "./me.png";

const AboutPage = () => {
  return (
    <>
      <SectionWrapper>
        <section className="h-fit relative flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="flex flex-col gap-4 max-w-2xl">
              <Label size={"small"} intent={"tertiary"}>
                About
              </Label>
              <div className="flex flex-col gap-4 justify-center h-full">
                <Display>A little but about myself.</Display>
                <P size={"large"}>
                  Thejus Rajendran is passionate about creating new products
                  that improve the lives of others through design.
                </P>
                <P size={"large"}>
                  I&apos;m constantly learning new things everyday and I love
                  meeting people who are motivated and unafraid of sharing their
                  ideas with the world.
                </P>
              </div>
            </div>
            <div className="order-first md:order-last">
              <Image
                className="h-full w-full object-contain"
                src={me}
                alt="Thejus"
                width={500}
                height={500}
                placeholder="blur"
              />
            </div>
          </div>
        </section>
      </SectionWrapper>
      <SectionWrapper>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 justify-center h-full">
            <Label size={"small"} intent={"tertiary"}>
              Pathway
            </Label>
            <DisplaySmall>The detour became my destination.</DisplaySmall>
            <div className="flex flex-col gap-4 mt-4">
              <P size={"large"}>
                Before graduating as a computer science engineer, I used to
                volunteer on forums as a designer. I was my start of the
                designer journey.
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
          </div>
          <div>
            <Image
              className="w-full md:max-w-lg h-full object-contain"
              alt="detour"
              src={detourImage}
              width={500}
              height={500}
              placeholder="blur"
            />
          </div>
        </section>
      </SectionWrapper>
    </>
  );
};
export default AboutPage;
