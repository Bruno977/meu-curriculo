import { StaticImageData } from 'next/image';
export type ProjectType = {
  id: number;
  name: string;
  thumb: StaticImageData | null;
  images: StaticImageData[];
  description?: string;
  skills: {
    id: number;
    name: string;
  }[];
};
