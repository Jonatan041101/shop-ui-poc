import ProductCard from "./components/Card";

interface IProductPageProps {
  username: string;
}

export default function ProductPage({ username }: IProductPageProps) {
  return (
    <main className="bg-[#fafafe]">
      <header>
        <h1 className="text-2xl font-bold">
          <span className="text-primary">Welcome! </span>
          <span>{`We're delighted to have you with us, ${
            username ?? "Jonatan"
          }.`}</span>
        </h1>
      </header>
      <article>
        <ProductCard product={{ id: 1, name: "Jonatan" }} />
      </article>
    </main>
  );
}
