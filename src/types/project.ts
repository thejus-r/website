export type Insight = {
  value: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  thumbnailImage: string;
  link: string;
  insights: Insight[];
  featured: boolean;
  active: boolean;
};

export default Project;
