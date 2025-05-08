import { StaticImageData } from "next/image";

export type Insight = {
  value: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  thumbnailImage: StaticImageData;
  link: string;
  insights: Insight[];
  featured: boolean;
  active: boolean;
};

export default Project;
