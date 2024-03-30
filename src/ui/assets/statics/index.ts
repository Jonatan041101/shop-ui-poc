import Bottle from "./bottle.svg";
import Cart from "./cart.svg";
import Logo from "./logo.svg";
import { StaticImageData } from "next/image";

enum AssetsStatics {
  Bottle = "Bottle",
  Cart = "Cart",
  Logo = "Logo",
}

export const assetsStatics: Record<AssetsStatics, StaticImageData> = {
  Bottle,
  Cart,
  Logo,
};
