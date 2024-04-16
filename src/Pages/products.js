import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import ProductItem from "./ProductItem";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = await db.collection("products").get();
        const fetchedProducts = productsCollection.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <h2>Produits Postés</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <ProductItem />
    </div>
  );
}

export default ProductsPage;
