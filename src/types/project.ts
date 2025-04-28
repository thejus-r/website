export type Insight = {
  value: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  thumbnailImage: string;
  projectPreview: () => React.ReactElement;
  link: string;
  insights: Insight[];
};

export default Project;
