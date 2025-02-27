"use client";
import { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";

interface SpotifyTrack {
  track: { name: string; artists: { name: string }[] };
}
interface SpotifyPlaylist {
  name: string;
  tracks: { items: SpotifyTrack[] };
}
interface SpotifyPlaylistProps {
  playlistId: string;
}

export default function SpotifyPlaylist({ playlistId }: SpotifyPlaylistProps) {
  const [playlist, setPlaylist] = useState<SpotifyPlaylist | null>(null);
  const [accessToken, setAccessToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      setIsLoading(true);
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const response = await fetch(`${apiUrl}/api/auth`);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP error ${response.status}`);
        }
        const data = await response.json();
        if (!data.access_token) throw new Error("No access token in response");
        setAccessToken(data.access_token);
      } catch (err: unknown) {
        // Type 'err' as Error
        const error = err instanceof Error ? err : new Error("Unknown error");
        console.error("Failed to fetch token:", error);
        setError(error.message || "Failed to authenticate with Spotify");
      } finally {
        setIsLoading(false);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (!accessToken || !playlistId) return;

    const fetchPlaylist = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        if (!response.ok)
          throw new Error(`Playlist fetch failed: ${response.status}`);
        const data: SpotifyPlaylist = await response.json();
        setPlaylist(data);
      } catch (err: unknown) {
        // Type 'err' as Error
        const error = err instanceof Error ? err : new Error("Unknown error");
        console.error("Failed to fetch playlist:", error);
        setError(error.message || "Failed to load playlist");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlaylist();
  }, [accessToken, playlistId]);

  if (typeof window === "undefined" || isLoading) return <LoadingComponent />;
  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">{error}</p>
      </div>
    );

  return (
    <section id="playlist" className="py-16 w-screen text-white">
      <div className="max-w-[90%] mx-auto px-4">
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
