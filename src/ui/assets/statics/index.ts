import Bottle from "./bottle.svg";
import Cart from "./cart.svg";
import Logo from "./logo.svg";
import Graph from "./graph.svg";
import History from "./history.svg";
import Products from "./products.svg";
import ProductVoid from "./product-void.svg";
import { StaticImageData } from "next/image";

enum AssetsStatics {
  Bottle = "Bottle",
  Cart = "Cart",
  Logo = "Logo",
  Graph = "Graph",
  History = "History",
  Products = "Products",
  ProductVoid = "ProductVoid",
}

export const assetsStatics: Record<AssetsStatics, StaticImageData> = {
  Bottle,
  Cart,
  Logo,
  Graph,
  History,
  Products,
  ProductVoid,
};
