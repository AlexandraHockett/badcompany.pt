"use client";
import { CartItem } from "@/types/types";
import Button from "@/components/Button";

type FloatingCartProps = {
  cartItems: CartItem[];
  onRemoveOne: (itemId: number) => void;
  onRemoveAll: (itemId: number) => void;
};

export default function FloatingCart({
  cartItems,
  onRemoveOne,
  onRemoveAll,
}: FloatingCartProps) {
  return (
    <div
      className="fixed bottom-32 right-4 sm:bottom-20 sm:right-6 
      w-[calc(100vw-2rem)] sm:w-80 md:w-96 bg-gray-800 rounded-xl 
      shadow-2xl p-4 sm:p-6 border border-gray-700 
      max-h-[calc(100vh-2rem)] overflow-y-auto transition-all duration-300 z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-purple-200 truncate">
          Carrinho ({cartItems.length})
        </h3>
        <Button
          id="cart-button"
          title="Ver Carrinho"
          containerClass="text-xs sm:text-sm px-3 sm:px-4 py-1 h-8 sm:h-10"
        />
      </div>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <ul className="space-y-3 sm:space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.uniqueId}
              className="flex items-center gap-3 sm:gap-4 bg-gray-700 p-3 sm:p-4 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-600"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md border border-gray-600"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-white truncate">
                  {item.title}
                </p>
                <p className="text-xs text-purple-300 font-medium">
                  {item.price}
                </p>
                <p className="text-xs text-gray-400">
                  Quantidade: {item.quantity}
                </p>
              </div>
              <div className="flex gap-1 sm:gap-2 shrink-0">
                <Button
                  title="-"
                  onClick={() => onRemoveOne(item.id)}
                  containerClass="bg-red-500 text-white px-2 py-1 h-7 sm:h-8 hover:bg-red-600"
                />
                <Button
                  title="×"
                  onClick={() => onRemoveAll(item.id)}
                  containerClass="bg-red-700 text-white px-2 py-1 h-7 sm:h-8 hover:bg-red-800"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-4 sm:py-6">
          <p className="text-gray-400 text-sm">Seu carrinho está vazio</p>
          <p className="text-gray-500 text-xs mt-1">
            Adicione itens para começar!
          </p>
        </div>
      )}
    </div>
  );
}
