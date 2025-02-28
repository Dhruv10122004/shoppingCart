import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate totalAmount outside JSX as js things cant be done inside jsx
  // acc is the accumulator method and 0 is the initial value of acc passed.
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "150px", height: "150px", objectFit: "contain" }}
                />
                <h3>{item.title} (x{item.quantity})</h3>
                <p>${Number(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "0.5rem",
                  backgroundColor: "#c00",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
          {/*Correct placement of total amount outside the map, js codes cannot be places inside jsx elements*/}
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
