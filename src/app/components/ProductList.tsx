"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsFromShopify = async () => {
    const response = await fetch("/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // Предполагаем, что структура данных соответствует ожиданиям
    setProducts(data);
  };

  useEffect(() => {
    fetchProductsFromShopify();
  }, []);

  return (
    <section className="w-[80%] m-auto">
      {products.map((product) => (
        <ProductCard key={product} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
