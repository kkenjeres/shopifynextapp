// src/context/BasketContext.js
"use client";
// src/context/BasketContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

// Тип для элемента корзины
interface BasketItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

// Тип для контекста
interface BasketContextType {
  items: BasketItem[];
  addItem: (product: BasketItem, quantity?: number) => void;
  removeItem: (productId: number) => void;
  changeItemQuantity: (productId: number, quantity: number) => void;
  getTotalPrice: () => number;
}

// Создание контекста с начальным значением типа BasketContextType или null
const BasketContext = createContext<BasketContextType | null>(null);

// Хук для использования контекста
export const useBasket = (): BasketContextType => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

// Провайдер контекста
export const BasketProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<BasketItem[]>([]);

  const addItem = (product: BasketItem, quantity: number = 1) => {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const changeItemQuantity = (productId: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const contextValue = {
    items,
    addItem,
    removeItem,
    changeItemQuantity,
    getTotalPrice,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
