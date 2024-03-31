import { assetsStatics } from "@/ui/assets/statics";
import { ILink } from "../interfaces/navbar-interface";

export const links: ILink[] = [
  { id: 1, name: "Products", href: "/products", icon: assetsStatics.Products },
  { id: 2, name: "History", href: "/history", icon: assetsStatics.History },
  { id: 3, name: "Graph", href: "/graph", icon: assetsStatics.Graph },
];
