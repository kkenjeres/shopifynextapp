"use client";

import React from "react";
import Image from "next/image";
import { products } from "../data/products";
import { TiShoppingCart } from "react-icons/ti";
import { useBasket } from "../context/BasketContext";

const ProductCard = () => {
  const { addItem } = useBasket();

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div className="border border-black p-2" key={product.id}>
          <Image
            src={product.image}
            width={900}
            height={900}
            alt={product.title}
            objectFit="contain"
            className="w-full h-[200px]"
          />
          <h2>{product.title}</h2>
          <div className="flex text-[20px] items-center gap-2">
            <button onClick={() => addItem({ ...product, quantity: 1 })}>
              <TiShoppingCart className="bg-blue-600 text-white text-[40px] p-1" />
            </button>
            <span>$ {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
