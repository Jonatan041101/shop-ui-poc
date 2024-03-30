import Image from "next/image";
import { assetsStatics } from "../../assets/statics";
import Navbar from "./Navbar";
import { links } from "./domain/constants/navbar-constants";
import Cart from "./Cart";

export default function Aside() {
  return (
    <aside className="flex flex-col justify-between items-center w-full max-w-16 h-[100dvh] bg-red-600 py-3">
      <div className="">
        <Image
          src={assetsStatics.Logo}
          alt="Logo"
          aria-label="Logo de la pagina"
          width={30}
          height={30}
        />
      </div>
      <Navbar links={links} />
      <Cart countProductsCart={1} />
    </aside>
  );
}
