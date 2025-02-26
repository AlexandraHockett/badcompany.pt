"use client";
import { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";

// Define Spotify Playlist Types
interface SpotifyTrack {
  track: {
    name: string;
    artists: { name: string }[];
  };
}

interface SpotifyPlaylist {
  name: string;
  tracks: {
    items: SpotifyTrack[];
  };
}

interface SpotifyPlaylistProps {
  playlistId: string; // Adicione uma prop para a playlistId
}

export default function SpotifyPlaylist({ playlistId }: SpotifyPlaylistProps) {
  const [playlist, setPlaylist] = useState<SpotifyPlaylist | null>(null);
  const [accessToken, setAccessToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get access token from API route
  useEffect(() => {
    const fetchToken = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/auth");

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.access_token) {
          setAccessToken(data.access_token);
          setError(null);
        } else {
          console.error("No access token in response:", data);
          setError("Failed to get access token");
        }
      } catch (error) {
        console.error("Failed to fetch token:", error);
        setError("Failed to authenticate with Spotify");
      } finally {
        setIsLoading(false);
      }
    };

    fetchToken();
  }, []);

  // Fetch playlist data
  useEffect(() => {
    if (!accessToken || !playlistId) return; // Verifique se playlistId está definido

    const fetchPlaylist = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data: SpotifyPlaylist = await response.json();
        setPlaylist(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch playlist:", error);
        setError("Failed to load playlist");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaylist();
  }, [accessToken, playlistId]); // Adicione playlistId como dependência

  // Show loading spinner while fetching data
  if (isLoading) {
    return <LoadingComponent />;
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section id="playlist" className="py-16 w-screen text-white">
      <div className="max-w-[90%] mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-zentry text-center mb-12">
          Nossa Playlist
        </h2>
        <div className="relative w-full bg-gradient-to-b from-[#67676f] to-zinc-700 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex justify-center items-center w-full py-10">
            {/* Spotify Embedded Player */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
