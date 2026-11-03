import type { Product } from "@/data/products";

/**
 * TASK 2
 * This page is broken. Run `npm run dev`, open /products, read the error,
 * fix it, and be ready to explain why.
 */
export default async function Products() {
  const res = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await res.json();
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} (${p.price})
          <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
      ))}
      <p>Cart: {count}</p>
    </main>
  );
}
