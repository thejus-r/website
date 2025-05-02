import PreviewPlaceholder from "@/components/PreviewPlaceholder";

import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "Herkey",
    description:
      "Redesign of the India’s largest career engagement platform for women",
    link: "/work/herkey",
    thumbnailImage: "/images/herkey/herkey-thumbnail-t.png",
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
    thumbnailImage: "",
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
    thumbnailImage: "",
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
