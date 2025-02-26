"use client";

import SpotifyPlayerOnly from "@/components/SpotifyPlayerOnly";

export default function PlaylistsPage() {
  // Lista de playlists com seus respectivos IDs
  const playlists = [
    { id: "487jKTFqWhs6b0AEUz0WpX", name: "AfroHouse" },
    { id: "54cSN5S1GpiPVxzJa46G3y", name: "Kizombas Antigas" },
    { id: "14ROkhmUwPPwGhB1Zm9xUC", name: "Mix Força Suprema" },
    // Adicione mais playlists conforme necessário
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Playlists
      </h1>
      <div className="space-y-8">
        {playlists.map((playlist) => (
          <div key={playlist.id}>
            <h2 className="text-2xl font-semibold text-center mb-4">
              {playlist.name}
            </h2>
            <div className="flex justify-center m-4">
              <SpotifyPlayerOnly playlistId={playlist.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
