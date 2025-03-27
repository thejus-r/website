import home from "@assets/icons/home.svg";
import blog from "@assets/icons/writing.svg";
import resume from "@assets/icons/better-resume.svg";
import social from "@assets/icons/bloom-book.svg";
import x from "@assets/icons/x.svg";
import linkedin from "@assets/icons/linkedin.svg";
import github from "@assets/icons/github.svg";

const routes = [
  {
    group: "Navigation",
    links: [
      {
        name: "Home",
        href: "/",
        icon: home,
      },
      {
        name: "Writtings",
        href: "/blog",
        icon: blog,
      },
    ],
  },
  {
    group: "Projects",
    links: [
      {
        name: "Better Resume",
        href: "https://github.com/thejus-r/better-resume",
        icon: resume,
      },
      {
        name: "Social API",
        href: "https://github.com/thejus-r/social",
        icon: social,
      },
    ],
  },
  {
    group: "Find me at",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/thejus-r/",
        icon: linkedin,
      },
      {
        name: "Github",
        href: "https://github.com/thejus-r",
        icon: github,
      },
      {
        name: "Twitter",
        href: "https://x.com/ThejusRajendran",
        icon: x,
      },
    ],
  },
];

export { routes };
