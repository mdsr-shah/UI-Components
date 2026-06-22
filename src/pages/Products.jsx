import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Tablet" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products Page</h1>

      {products.map((p) => (
        <div key={p.id} style={{ margin: "10px 0" }}>
          <Link to={`/products/${p.id}`}>
            {p.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;