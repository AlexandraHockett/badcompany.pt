"use client";

import { useState } from "react";
import { BaseProduct } from "@/types/types";
import Button from "@/components/Button";
import { tickets } from "@/data/products";

type TicketSectionProps = {
  onAddToCart: (item: BaseProduct) => void;
};

export default function TicketSection({ onAddToCart }: TicketSectionProps) {
  const [hoveredEventId, setHoveredEventId] = useState<number | null>(null);

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-purple-200 border-b-2 border-purple-500 pb-2">
        Bilhetes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tickets.map((event) => (
          <div
            key={event.id}
            className="p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gray-700 relative overflow-hidden"
            onMouseEnter={() => setHoveredEventId(event.id)}
            onMouseLeave={() => setHoveredEventId(null)}
          >
            {/* Hover Image Overlay */}
            <img
              src={event.image}
              alt={event.title}
              className={`w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-300 ${
                hoveredEventId === event.id ? "opacity-40" : "opacity-0"
              }`}
            />

            {/* Content */}
            <div className="relative z-20">
              <h3 className="text-xl font-semibold text-white mb-3">
                {event.title}
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                <span className="font-medium">Data:</span> {event.date}
              </p>
              <p className="text-sm text-gray-300 mb-4">
                <span className="font-medium">Local:</span> {event.location}
              </p>
              <p className="text-lg font-bold text-purple-300 mb-4">
                {event.price}
              </p>
              <Button
                title="Adicionar ao Carrinho"
                onClick={() =>
                  onAddToCart({
                    id: event.id,
                    title: event.title,
                    price: event.price,
                    image: event.image,
                  })
                }
                containerClass="w-full relative z-30"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
