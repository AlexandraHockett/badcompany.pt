"use client";

import { useLiveStatus } from "@/hooks/useLiveStatus";
import LoadingComponent from "@/components/LoadingComponent";

export default function LivePage() {
  const { isLive, loading, error } = useLiveStatus();

  if (loading) return <LoadingComponent />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-6">
      {isLive ? (
        <>
          <h1 className="text-3xl font-bold">🔴 AO VIVO AGORA!</h1>
          <p className="mt-2 text-lg">Assiste ao nosso podcast em direto!</p>
          <div className="mt-6">
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/live_stream?channel=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}`}
              title="YouTube Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-500">
            🚫 Sem Transmissão ao Vivo
          </h1>
          <p className="mt-4 text-lg">
            Não há nenhuma transmissão ao vivo neste momento.
          </p>
        </>
      )}
    </div>
  );
}
