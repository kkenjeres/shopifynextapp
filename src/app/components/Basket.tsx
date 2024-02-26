"use client";

import React from "react";
import { useBasket } from "../context/BasketContext";
import Image from "next/image";
const Basket = () => {
  const { items, removeItem, changeItemQuantity, getTotalPrice } = useBasket();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <Image src={item.image} width={100} height={100} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <button
            onClick={() => changeItemQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
          <button
            onClick={() => changeItemQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <div>Total: $ {getTotalPrice()}</div>
    </div>
  );
};

export default Basket;
