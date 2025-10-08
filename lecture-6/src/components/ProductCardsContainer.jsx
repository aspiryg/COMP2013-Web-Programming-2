import ProductCard from "./ProductCard";

export default function ProductCardsContainer({ data }) {
  return (
    <div className="cards-container">
      {data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
