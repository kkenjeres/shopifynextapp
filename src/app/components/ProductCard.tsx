"use client";

import React from "react";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import { useBasket } from "../context/BasketContext";

const ProductCard = ({ product }) => {
  const { addItem } = useBasket();

  return (
    <div className="border border-black p-2">
      <Image
        src={product.image || '/placeholder-image.png'} // Добавьте плейсхолдер для изображения, если оно отсутствует
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
  );
};

export default ProductCard;
