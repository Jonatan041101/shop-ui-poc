import { assetsStatics } from "@/ui/assets/statics";
import Image from "next/image";

export default function SearchBar() {
  return (
    <form className="bg-white flex gap-2 p-4 rounded-md w-full max-w-[300px]">
      <Image
        src={assetsStatics.Search}
        alt="Icon search"
        width={20}
        height={20}
      />
      <input
        type="text"
        placeholder="Search products..."
        className="outline-none w-full"
      />
    </form>
  );
}
