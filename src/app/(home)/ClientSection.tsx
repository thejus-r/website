import { inter } from "@/styles/fonts";
import clients from "@/content/clients";
import SectionWrapper from "@/components/SectionWrapper";

const ClientsSection = () => {
  return (
    <SectionWrapper>
      <section>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xl">Clients! Clients! Clients!</h3>
          <p className={`text-base ${inter.className} text-neutral-500`}>
            Have worked with some of the best ones out there
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
          {clients.map((client) => {
            return (
              <div
                className="h-20 bg-neutral-100 flex items-center justify-center"
                key={client.name}
              >
                <div>{client.name}</div>
              </div>
            );
          })}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default ClientsSection;
