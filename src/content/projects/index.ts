import { Project } from "@/types/project";
import herKeyThumbnail from "./herkey-thumbnail.png";
import astroSureThumbnail from "./astro-sure-thumbnail.png";
import addingPlusThumbnail from "./adding-plus-thumbnail.png";

export const projects: Project[] = [
  {
    name: "Herkey",
    description:
      "Redesign of the India’s largest career engagement platform for women",
    link: "https://www.figma.com/proto/YUBqUSnHbzx5zlvpHc2kBH/Case-studies?page-id=0%3A1&node-id=2-3&viewport=503%2C519%2C0.23&t=dUbFAm1t4i3OQxBj-1&scaling=contain&content-scaling=fixed&starting-point-node-id=2%3A3",
    thumbnailImage: herKeyThumbnail,
    featured: true,
    active: true,

    insights: [
      {
        value: "45,00,000+",
        description: "users currently on Herkey",
      },
      {
        value: "10,000+",
        description: "companies hire on Herkey",
      },
    ],
  },
  {
    name: "Adding.Plus",
    description:
      "A no-code marketing funnel platform that connects connects the dots between audience, experience, and insights.",
    link: "/",
    thumbnailImage: addingPlusThumbnail,
    featured: true,
    active: false,
    insights: [
      {
        value: "150+",
        description: "component for combination",
      },
      {
        value: "2X",
        description: "conversion rates",
      },
    ],
  },
  {
    name: "AstroSure.ai",
    description:
      "Adapting the online astrology platform for larger screens for reaching a wider audience",
    link: "/",
    thumbnailImage: astroSureThumbnail,
    featured: true,
    active: false,
    insights: [
      {
        value: "1,50,000",
        description: "users in beta testing",
      },
      {
        value: "5,00,000+",
        description: "downloads on Play Store",
      },
    ],
  },
];
