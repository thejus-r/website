import { Project } from "@/types/project";
import herKeyThumbnail from "./herkey-thumbnail-t.png";

export const projects: Project[] = [
  {
    name: "Herkey",
    description:
      "Redesign of the India’s largest career engagement platform for women",
    link: "/work/herkey",
    thumbnailImage: herKeyThumbnail,
    featured: true,
    active: true,

    insights: [
      {
        value: "35,00,000+",
        description: "women currently uses Herkey",
      },
      {
        value: "10,000+",
        description: "companies hire on Herkey",
      },
    ],
  },
  {
    name: "AstroSure.ai",
    description:
      "Adapting the online astrology platform for larger screens for reaching a wider audience",
    link: "/",
    thumbnailImage: herKeyThumbnail,
    featured: false,
    active: false,
    insights: [
      {
        value: "1,50,000",
        description: "users in beta",
      },
      {
        value: "5,00,000+",
        description: "downloads",
      },
    ],
  },
  {
    name: "Adding.Plus",
    description:
      "Adapting the online astrology platform for larger screens for reaching a wider audience",
    link: "/",
    thumbnailImage: herKeyThumbnail,
    featured: false,
    active: false,
    insights: [
      {
        value: "1,50,000",
        description: "users in beta",
      },
      {
        value: "5,00,000+",
        description: "downloads",
      },
    ],
  },
];
