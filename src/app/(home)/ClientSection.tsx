import clients from "@/content/clients";
import SectionWrapper from "@/components/SectionWrapper";
import { H3, P } from "@/components/ui/Typography";
import Image from "next/image";

const ClientsSection = () => {
  return (
    <SectionWrapper>
      <section>
        <div className="flex flex-col gap-2">
          <H3>Clients! Clients! Clients!</H3>
          <P>Have worked with some of the best ones out there</P>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-8 mb-4">
          {clients.map((client, index) => {
            return (
              <div
                className="h-16 md:h-20 bg-neutral-100 flex items-center justify-center"
                key={index}
              >
                <Image
                  className="object-left-top"
                  src={client.iconSrc}
                  alt={client.name}
                  height={100}
                  width={270}
                />
              </div>
            );
          })}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default ClientsSection;
