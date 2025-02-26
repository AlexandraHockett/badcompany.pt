"use client";

export default function GaleriaPage() {
  const images = [
    { id: 1, src: "/img/bclandia.jpg", type: "foto" },
    { id: 2, src: "/img/bclandia.jpg", type: "foto" },
    { id: 3, src: "/img/bclandia.jpg", type: "video" },
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Galeria
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={image.src}
              alt={`Imagem ${image.id}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
