"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import TicketSection from "@/components/TicketSection";
import FloatingCart from "@/components/FloatingCart";
import { CartItem, BaseProduct } from "@/types/types";
import { products } from "@/data/products";

export default function LojaPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: BaseProduct) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [
          ...prevItems,
          { ...item, quantity: 1, uniqueId: `${item.id}-${Date.now()}` },
        ];
      }
    });
  };

  const onRemoveOne = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const onRemoveAll = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    // Force normal scrolling behavior at the document level
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";

    return () => {
      // Cleanup when component unmounts
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="text-white min-h-screen">
      <header className="pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-purple-300 drop-shadow-lg">
          Loja BadCompany
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Explore nossos produtos exclusivos e bilhetes para eventos!
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-purple-200 border-b-2 border-purple-500 pb-2">
            Merchandising
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products
              .filter((product) => product.category === "Merchandising")
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  onAddToCart={addToCart}
                />
              ))}
          </div>
        </section>

        <TicketSection onAddToCart={addToCart} />

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-purple-200 border-b-2 border-purple-500 pb-2">
            Exclusivos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((product) => product.category === "Exclusives")
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  onAddToCart={addToCart}
                />
              ))}
          </div>
        </section>
      </main>

      <FloatingCart
        cartItems={cartItems}
        onRemoveOne={onRemoveOne}
        onRemoveAll={onRemoveAll}
      />
    </div>
  );
}
