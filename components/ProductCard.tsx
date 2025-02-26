"use client";

import { BaseProduct } from "@/types/types";
import Button from "@/components/Button"; // Adjust path as needed

type ProductCardProps = {
  id: number;
  title: string;
  price: string;
  image: string;
  onAddToCart: (item: BaseProduct) => void;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  onAddToCart,
}: ProductCardProps) {
  const handleAddToCart = () => {
    onAddToCart({ id, title, price, image });
  };

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg bg-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
        <h2 className="text-xl font-semibold text-white truncate">{title}</h2>
        <p className="text-lg font-bold text-purple-300">{price}</p>
        <Button
          title="Adicionar ao Carrinho"
          onClick={handleAddToCart}
          containerClass="mt-3 w-full"
        />
      </div>
    </div>
  );
}
