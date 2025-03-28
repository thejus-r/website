import resume from "@assets/icons/better-resume.svg";
import social from "@assets/icons/bloom-book.svg";
import game from "@assets/icons/game.svg";
import github from "@assets/icons/github.svg";
import home from "@assets/icons/home.svg";
import linkedin from "@assets/icons/linkedin.svg";
import tasks from "@assets/icons/tasks.svg";
import blog from "@assets/icons/writing.svg";
import bluesky from "@assets/icons/bluesky.svg";

const routes = [
  {
    group: "Me",
    links: [
      {
        name: "Home",
        href: "/",
        icon: home,
      },
      {
        name: "Writings",
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
      {
        name: "Tic Tac Toe",
        href: "https://tic-tac-toe-steel-phi.vercel.app",
        icon: game,
      },
      {
        name: "Tasky",
        href: "https://github.com/thejus-r/tasky",
        icon: tasks,
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
        name: "Bluesky",
        href: "https://x.com/ThejusRajendran",
        icon: bluesky,
      },
    ],
  },
];

export { routes };
