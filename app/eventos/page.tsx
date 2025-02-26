"use client";

import EventCard from "@/components/EventCard";

const sections = [
  { title: "Próximos Eventos", slug: "proximos", image: "/img/bclandia.jpg" },
  { title: "Eventos Passados", slug: "passados", image: "/img/bclandia.jpg" },
  { title: "Mapa Interativo", slug: "mapa", image: "/img/bclandia.jpg" },
  { title: "Eventos Privados", slug: "privados", image: "/img/bclandia.jpg" },
];

export default function EventosPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Nossos Eventos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {sections.map((section) => (
          <div key={section.slug} className="w-full">
            <EventCard
              title={section.title}
              image={section.image}
              href={`/eventos/${section.slug}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
