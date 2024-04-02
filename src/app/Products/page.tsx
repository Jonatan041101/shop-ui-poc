import { categoryApi } from "@/mock-api/category-mock";
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
        <section>
          {categoryApi.map((category) => (
            <article className="flex flex-col gap-3" key={category.id}>
              <h3 className="text-xl font-bold">Toys</h3>
              <section className="flex gap-4 items-start">
                {category.products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </section>
            </article>
          ))}
        </section>
      </div>
      <Menu />
    </main>
  );
}
