// src/components/ProductList.jsx
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Shop</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
          /* key is a special prop in react which is used by react for optimization
          with the help of this it tracks which elements were added, removed or updated,
          i.e keeps track of the elements. It is not passed to other component as prop,
          just used for optimization purposes by react.*/
        ))}
      </div>
    </div>
  );
};

export default ProductList;
