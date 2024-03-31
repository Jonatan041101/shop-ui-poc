import { StaticImageData } from "next/image";

export interface ILink {
  id: number;
  name: string;
  href: string;
  icon: StaticImageData;
}
