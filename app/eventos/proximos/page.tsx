"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Countdown from "@/components/Countdown";
import { motion } from "framer-motion";

type Event = {
  id: number;
  name: string;
  date: string;
  image: string;
  video?: string;
  ticketLink: string;
};

const events: Event[] = [
  {
    id: 1,
    name: "BCLANDIA 25",
    date: "2025-03-03T23:59:00",
    image: "/img/bclandia.jpg",
    video: "/videos/feature-1.mp4",
    ticketLink: "https://3cket.com/event/bclandia-25/",
  },
];

export default function ProximosEventos() {
  // Estado para controlar o hover em cada evento
  const [hoveredEventId, setHoveredEventId] = useState<number | null>(null);

  return (
    <section className="py-12 text-center text-white">
      <h1 className="text-4xl font-bold mb-8">Próximos Eventos</h1>
      {events.map((event) => (
        <div
          className="max-w-3xl mx-auto"
          key={event.id}
          onMouseEnter={() => setHoveredEventId(event.id)}
          onMouseLeave={() => setHoveredEventId(null)}
        >
          <div className="relative w-full h-64 rounded-lg mb-6 overflow-hidden">
            {event.video && (
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover absolute top-0 left-0 z-10"
              >
                <source src={event.video} type="video/mp4" />
                Seu navegador não suporta vídeo.
              </video>
            )}

            {/* Imagem que aparece no hover */}
            <img
              src={event.image}
              alt={event.name}
              className={`w-full h-full object-contain absolute top-0 left-0 z-20 transition-opacity duration-300 ${
                hoveredEventId === event.id ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">{event.name}</h2>
          <Countdown targetDate={new Date(events[0].date)} />
          <motion.a
            href={event.ticketLink}
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 px-6 py-3 text-white font-bold rounded-lg transition-all"
          >
            <Button title="Comprar Bilhetes" />
          </motion.a>
        </div>
      ))}
    </section>
  );
}
