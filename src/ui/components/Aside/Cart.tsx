import { assetsStatics } from "@/ui/assets/statics";
import Image from "next/image";

interface ICartProps {
  countProductsCart: number;
}

export default function Cart({ countProductsCart }: ICartProps) {
  return (
    <button className="flex justify-center items-center relative h-[42px] w-[42px] bg-primary rounded-full">
      <p className="absolute z-10 top-[-4px] right-[-4px] flex justify-center items-center rounded-[4px] h-5 w-5 bg-[#EB5757] leading-[0] text-center text-xs">
        <span className="text-white font-bold">{countProductsCart}</span>
      </p>
      <Image
        src={assetsStatics.Cart}
        alt="Cart Icon"
        aria-label="View products of cart"
        width={30}
        height={30}
      />
    </button>
  );
}
