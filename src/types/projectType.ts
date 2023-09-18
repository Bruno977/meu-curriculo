export type ProjectType = {
  id: number;
  name: string;
  thumb: string;
  images: string[];
  description?: string;
  skills: {
    id: number;
    name: string;
  }[];
};
