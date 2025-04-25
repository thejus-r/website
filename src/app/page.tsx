import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  );
}

const logos = [
  {
    name: "Microsoft Logo",
    src: "logos/microsoft-logo.svg",
  },
  {
    name: "Herkey Logo",
    src: "logos/herkey-logo.svg",
  },
  {
    name: "DB Bank Logo",
    src: "logos/dbs-logo.svg",
  },
  {
    name: "Naukri Logo",
    src: "logos/naukri-logo.svg",
  },
  {
    name: "OMI Foundation Logo",
    src: "logos/omi-logo.svg",
  },
  {
    name: "ValueQuest Logo",
    src: "logos/vq-logo.svg",
  },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen py-24 px-16 text-white">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-1 justify-center gap-4 flex-col">
          <h1 className="text-5xl/14 font-serif text-white/85 mix-blend-plus-lighter">
            Product & <br /> Experience Designer
          </h1>
          <h2 className="text-white/60 text-lg mix-blend-plus-lighter">
            Designing reliable and delightful experiences
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="text-sm text-white/60 mix-blend-plus-lighter">
            Have worked with the best
          </h6>
          <div className="flex gap-8 my-4 flex-wrap max-w-5/12">
            {logos.map((logo) => (
              <div key={logo.src}>
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-screen h-full bg-linear-to-b from-black to-black/0 -z-40"></div>

      {/* Background Image
      TODO: Replace with a three.js gradient shader */}
      <Image
        className="absolute top-0 left-0 -z-50 h-screen  w-screen object-fill"
        alt="gradient-background"
        src={"/images/section-1-bg.png"}
        width={"100"}
        height={"100"}
        quality={"100"}
      />
    </section>
  );
};
