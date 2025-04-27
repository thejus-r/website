import BackgroundPlane from "@/components/BackgroundPlane";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import Featured from "./featured";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Featured />
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
    <section className="h-lvh w-full md:py-24 py-8 px-8 md:px-16 text-white">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-1 justify-center gap-4 flex-col">
          <h1 className="text-xl md:text-3xl/12 md:w-3/5 font-serif text-white/95 mix-blend-plus-lighter">
            Product designer who specializes on design systems and scaleable
            user experiences
          </h1>
          <h2 className="text-white/60 md:text-lg mix-blend-plus-lighter">
            Designing reliable and delightful experiences
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="text-sm  text-white/60 mix-blend-plus-lighter">
            Have worked with the best
          </h6>
          <div className="flex gap-8 md:gap-8 my-4 flex-wrap w-full md:max-w-5/12">
            {logos.map((logo) => (
              <div key={logo.src}>
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden xl:flex absolute inset-0 flex-col justify-between">
        <Card />
      </div>

      {/* Gradient Overlay */}
      {/* <div className="h-lvh w-full fixed top-0 left-0 bg-linear-to-b from-black/80 to-black/0 -z-40"></div> */}

      {/* Background Image
      TODO: Replace with a three.js gradient shader */}
      <div className="h-lvh w-full fixed top-0 left-0 -z-50">
        <BackgroundPlane />
      </div>
    </section>
  );
};
