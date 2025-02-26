"use client";

interface SpotifyPlayerOnlyProps {
  playlistId: string; // Adicione uma prop para a playlistId
}

export default function SpotifyPlayerOnly({
  playlistId,
}: SpotifyPlayerOnlyProps) {
  return (
    <div className="w-full max-w-5xl min-w-[320px]">
      <iframe
        style={{ borderRadius: "12px" }}
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        width="100%"
        height="600"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="min-h-[352px]"
      ></iframe>
    </div>
  );
}
