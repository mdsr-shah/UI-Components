import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <p>You are viewing product ID: {id}</p>
    </div>
  );
}

export default ProductDetails;