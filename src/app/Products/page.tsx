import ProductCard from "./components/Card";
import Header from "./components/Header";
import Menu from "./components/Menu/Menu";

interface IProductPageProps {
  username: string;
}

export default function ProductPage({ username }: IProductPageProps) {
  return (
    <main className="bg-[#fafafe] flex w-full">
      <div className="px-16 w-full">
        <Header />
        <article className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">Toys</h3>
          <ProductCard product={{ id: 1, name: "Bob Esponja" }} />
        </article>
      </div>
      <Menu />
    </main>
  );
}
