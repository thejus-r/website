import SectionWrapper from "../SectionWrapper";

const Navigation = () => {
  return (
    <SectionWrapper noPadding>
      <nav className="flex justify-between items-center mx-4 md:mx-10 h-16">
        <div className="font-medium">Thejus Rajendran</div>
        <div className="">
          <ul className="flex gap-5">
            <li>
              <a className="cursor-pointer font-medium">Home</a>
            </li>
            <li>
              <a className="cursor-pointer text-neutral-500">Works</a>
            </li>
            <li>
              <a className="cursor-pointer text-neutral-500">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </SectionWrapper>
  );
};

export default Navigation;
