import Image from "next/image";
import Icon from "@/ui/Icon/Icon";
import { IconName } from "@/ui/Icon/enum/icon-name-enum";
import { IProduct } from "@/api/product/interfaces/product-interface";

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <article className="bg-white rounded-2xl border-2 border-gray-soft border-solid flex justify-between items-center gap-2 py-2 px-3 box-content max-w-32">
      <p className="text-black font-semibold">{product.name}</p>
      <Icon
        icon={IconName.PLUS}
        svg={{ fill: "#C1C1C4", height: 14, width: 14 }}
      />
    </article>
  );
}
