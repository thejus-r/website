import { Label } from "../ui/Typography";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-gradient-to-br h-fit from-neutral-950 via-neutral-900 to-neutral-950  w-full">
        <div className="grid p-8 md:p-2 grid-cols-1 md:grid-cols-2 w-full">
          <Label size={"xlarge"} intent={"invertedPrimary"}>
            Grid 1
          </Label>
          <Label size={"xlarge"} intent={"invertedPrimary"}>
            Grid 2
          </Label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
