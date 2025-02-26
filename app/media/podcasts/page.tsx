"use client";

export default function PodcastsPage() {
  const episodes = [
    {
      id: 1,
      title: "Episódio 1: A História da BadCompany",
      audioUrl: "https://example.com/episode1.mp3",
    },
    {
      id: 2,
      title: "Episódio 2: Tendências de Música Africana",
      audioUrl: "https://example.com/episode2.mp3",
    },
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Podcasts
      </h1>
      <div className="flex flex-col items-center gap-6">
        {episodes.map((episode) => (
          <div key={episode.id} className="w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-2">{episode.title}</h2>
            <audio controls className="w-full">
              <source src={episode.audioUrl} type="audio/mpeg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
