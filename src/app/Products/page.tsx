import ProductCard from "./components/Card";

export default function ProductPage() {
  return (
    <section>
      <article>
        <ProductCard product={{ id: 1, name: "Jonatan" }} />
      </article>
    </section>
  );
}
