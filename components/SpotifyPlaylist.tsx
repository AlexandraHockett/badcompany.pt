"use client";

interface SpotifyPlaylistProps {
  playlistId: string;
}

export default function SpotifyPlaylist({ playlistId }: SpotifyPlaylistProps) {
  return (
    <section id="playlist" className="py-16 w-screen text-white">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-zentry text-center mb-12">
          Nossa Playlist
        </h2>
        <div className="relative w-full bg-gradient-to-b from-[#67676f] to-zinc-700 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex justify-center items-center w-full py-10">
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
