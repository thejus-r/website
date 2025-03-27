import home from "@assets/home.svg";
import blog from "@assets/writing.svg";

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
        href: "/blog/bloom-book",
        icon: home,
      },
      {
        name: "Bloom Books",
        href: "/blog/bloom-book",
        icon: home,
      },
    ],
  },
  {
    group: "Find me at",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/thejus-r/",
        icon: home,
      },
      {
        name: "Github",
        href: "https://github.com/thejus-r",
        icon: home,
      },
      {
        name: "Twitter",
        href: "https://x.com/ThejusRajendran",
        icon: home,
      },
    ],
  },
];

export { routes };
