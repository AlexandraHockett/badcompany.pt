"use client";

import MediaCard from "@/components/MediaCard";

const sections = [
  { title: "Podcasts", slug: "podcasts", image: "/img/bclandia.jpg" },
  { title: "Playlists", slug: "playlists", image: "/img/bclandia.jpg" },
  { title: "Notícias", slug: "noticias", image: "/img/bclandia.jpg" },
  { title: "Galeria", slug: "galeria", image: "/img/bclandia.jpg" },
];

export default function MediaPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Media
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {sections.map((section) => (
          <div key={section.slug} className="w-full">
            <MediaCard
              title={section.title}
              image={section.image}
              href={`/media/${section.slug}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
