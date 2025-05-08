import { LinkedInIcon, MediumIcon, BehanceIcon, GithubIcon } from "../ui/Icons";
import { Label, P } from "../ui/Typography";

const Footer = () => {
  return (
    <footer className="bg-black w-full flex-1 mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px]">
      <div className="p-4 md:p-2 flex flex-col md:flex-row gap-4 md:justify-between items-center justify-center">
        <div className="order-last md:order-first">
          <P size={"small"} type={"mono"}>
            &copy;Thejus Rajendran, 2025
          </P>
        </div>
        <div className="flex w-full md:w-fit justify-between gap-4 items-center">
          <Label size={"small"} intent={"invertedPrimary"}>
            <a href="mailto:work@thejus.design">work@thejus.design</a>
          </Label>
          <div className="flex gap-2">
            <div className="fill-white">
              <a href="https://www.linkedin.com/in/thejus-r" target="_blank">
                <LinkedInIcon />
              </a>
            </div>
            <div className="fill-white">
              <a href="https://thejusr.medium.com" target="_blank">
                <MediumIcon />
              </a>
            </div>
            <div className="fill-white">
              <a href="https://www.behance.net/thejus-r" target="_blank">
                <BehanceIcon />
              </a>
            </div>
            <div className="fill-white">
              <a href="https://github.com/thejus-r" target="_blank">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
