"use client";

export default function NoticiasPage() {
  const articles = [
    {
      id: 1,
      title: "Evento BC Fest 2023: Um Sucesso Absoluto",
      image: "/img/noticia1.jpg",
      date: "2023-10-01",
      excerpt: "O BC Fest 2023 foi um marco na história da BadCompany...",
    },
    {
      id: 2,
      title: "Tendências de Música Africana em 2023",
      image: "/img/noticia2.jpg",
      date: "2023-09-25",
      excerpt: "A música africana continua a ganhar popularidade global...",
    },
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Notícias
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p className="text-sm">{article.date}</p>
              <p className="text-sm mt-2">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}