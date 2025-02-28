// src/components/ProductCard.jsx
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "1rem",
        margin: "1rem",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
      />
      <h3 style={{ fontSize: "1rem", margin: "0.5rem 0" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
