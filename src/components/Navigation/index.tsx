"use client";
import SectionWrapper from "../SectionWrapper";
import { Link } from "next-view-transitions";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Navigation = () => {
  return (
    <SectionWrapper noPadding>
      <nav className="flex justify-between items-center mx-4 md:mx-10 h-16">
        <div className="font-medium">
          <Link href={"/"}>Thejus Rajendran</Link>
        </div>
        <div className="">
          <ul className="flex gap-5">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </SectionWrapper>
  );
};

export default Navigation;
