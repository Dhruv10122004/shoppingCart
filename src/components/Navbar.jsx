// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  // Calculate total number of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <div>
        <Link style={{ color: "#fff", marginRight: "1rem" }} to="/">
          Home
        </Link>
        <Link style={{ color: "#fff", marginRight: "1rem" }} to="/shop">
          Shop
        </Link>
      </div>
      <div>
        <Link style={{ color: "#fff" }} to="/cart">
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
