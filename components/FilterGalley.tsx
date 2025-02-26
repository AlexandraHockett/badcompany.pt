"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Event = {
  title: string;
  category: string;
  image: string;
  video: string | null;
  testimonial: string;
};

type FilterGalleryProps = {
  events: Event[];
};

export default function FilterGallery({ events }: FilterGalleryProps) {
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", "Nacionais", "Internacionais", "Festivais"];
  const filteredEvents =
    filter === "Todos" ? events : events.filter((e) => e.category === filter);

  return (
    <div>
      <div className="flex gap-4 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg ${filter === cat ? "bg-purple-500" : "bg-gray-700"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 object-cover"
            />
            {event.video && (
              <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity"
              >
                <source src={event.video} type="video/mp4" />
              </video>
            )}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-sm italic">"{event.testimonial}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
