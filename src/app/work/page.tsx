import SectionWrapper from "@/components/SectionWrapper";
import { Display, DisplaySmall, Label, P } from "@/components/ui/Typography";
import Image, { StaticImageData } from "next/image";

// images
import teamImage1 from "./team-1.png";
import teamImage2 from "./team-2.png";
import teamImage3 from "./team-3.png";

// herkey thumbnail
import herkeyThumbnail from "./herkey-thumbnail.png";
import addngPlusThumbnail from "./adding-plus-thumbnail.png";
import astroSureThumbnail from "./astro-sure-thumbnail.png";

type Work = {
  name: string;
  description: string;
  type: string;
  category: string[];
  thumbnail: StaticImageData;
};

const works: Work[] = [
  {
    name: "Herkey",
    description:
      "India's largest career community for women - to nurture, support and elevate her career aspirations",
    type: "app",
    category: ["career", "networking"],
    thumbnail: herkeyThumbnail,
  },
  {
    name: "Addng.Plus",
    description:
      "Optimize your marketing funnels by up to 2X, at 20-30% lower costs with our funnel optimizer platform.",
    type: "app",
    category: ["ad-tech", "marketing"],
    thumbnail: addngPlusThumbnail,
  },
  {
    name: "AstroSure.ai",
    description:
      "AI-driven personalized astrological guidance app with insights from experienced astrologers",
    type: "app",
    category: ["astrology", "ai"],
    thumbnail: astroSureThumbnail,
  },
  // {
  //   name: "ZipSFA",
  //   description:
  //     "Platform that helps to manage the Distributor's Sales, Purchase, Inventory, Beat Planning, Travel and Claims.",
  //   type: "app",
  //   category: ["b2b", "supply-chain"],
  // },
  // {
  //   name: "NeoLife",
  //   description:
  //     "Platform that helps to manage the Distributor's Sales, Purchase, Inventory, Beat Planning, Travel and Claims.",
  //   type: "app",
  //   category: ["b2b", "supply-chain"],
  // },
  // {
  //   name: "ValueQuest",
  //   description:
  //     "Platform that helps to manage the Distributor's Sales, Purchase, Inventory, Beat Planning, Travel and Claims.",
  //   type: "app",
  //   category: ["b2b", "supply-chain"],
  // },
  // {
  //   name: "DBS Bank: Women and Finance",
  //   description:
  //     "Platform that helps to manage the Distributor's Sales, Purchase, Inventory, Beat Planning, Travel and Claims.",
  //   type: "app",
  //   category: ["b2b", "supply-chain"],
  // },
  // {
  //   name: "Microsoft: AI First Movers",
  //   description:
  //     "Platform that helps to manage the Distributor's Sales, Purchase, Inventory, Beat Planning, Travel and Claims.",
  //   type: "app",
  //   category: ["b2b", "supply-chain"],
  // },
  // {
  //   name: "EV Data Labs",
  //   description:
  //     "Platform that helps to manage the Distributor's Sales, Purchase, Inventory, Beat Planning, Travel and Claims.",
  //   type: "app",
  //   category: ["b2b", "supply-chain"],
  // },
];

const WorkPage = () => {
  return (
    <>
      <SectionWrapper>
        <section className="flex flex-col-reverse md:flex-row gap-8">
          <div>
            <Label size={"small"} intent={"tertiary"}>
              Work
            </Label>
            <div className="flex flex-col h-full justify-center gap-4 my-4">
              <Display>Designing Experiences, Delivering Results</Display>
              <P size={"large"}>
                I got my first strip as an experience designer at Flooid (a
                product studio in Bengaluru) where I got to work with a awesome
                team.
              </P>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Image
              className="w-full"
              src={teamImage2}
              width={500}
              height={500}
              alt={"team photo"}
              placeholder="blur"
            />
            <Image
              className="w-full"
              src={teamImage1}
              width={500}
              height={500}
              alt={"team photo"}
              placeholder="blur"
            />
            <Image
              className="col-span-2 w-full"
              src={teamImage3}
              width={500}
              height={250}
              alt={"team photo"}
              placeholder="blur"
            />
          </div>
        </section>
      </SectionWrapper>
      <SectionWrapper>
        <section>
          <div className="flex flex-col gap-4 text-pretty">
            <Label size={"small"} intent={"tertiary"}>
              Products
            </Label>
            <DisplaySmall>Products that has been delivered</DisplaySmall>
            <P size={"large"}>
              Work with 12+ clients such as Microsoft, Herkey, Valuequest,
              Astrosure.ai, etc.
            </P>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-8 md:mt-8">
            {works.map((work, index) => {
              return (
                <div
                  className="flex flex-col md:p-4 md:border gap-4 border-neutral-200"
                  key={index}
                >
                  <div className="w-full h-96">
                    <Image
                      className="h-full w-full object-cover"
                      alt=""
                      src={work.thumbnail}
                      width={1200}
                      height={600}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label type={"sans"} size={"large"} weight={"semibold"}>
                      {work.name}
                    </Label>
                    <P size={"small"}>{work.description}</P>
                    <div className="flex gap-2">
                      {work.category.map((item, index) => {
                        return (
                          <Label
                            size={"small"}
                            intent={"secondary"}
                            key={index}
                          >
                            #{item}
                          </Label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </SectionWrapper>
    </>
  );
};

export default WorkPage;
