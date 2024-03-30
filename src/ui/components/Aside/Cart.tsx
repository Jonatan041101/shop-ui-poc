// import { assetsStatics } from "@/ui/assets/statics";
// import Image from "next/image";

interface ICartProps {
  countProductsCart: number;
}

export default function Cart({ countProductsCart }: ICartProps) {
  return (
    <article className="relative h-[30px] w-[30px] bg-green-500">
      <p className="absolute z-10 bottom-4 left-4 flex justify-center items-center rounded-full h-4 w-4 bg-red-700 leading-[0] text-center text-xs">
        <span className="text-white font-bold">{countProductsCart}</span>
      </p>
      {/* <Image
        src={assetsStatics}
        alt="Cart Icon"
        aria-label="View products of cart"
      /> */}
    </article>
  );
}
