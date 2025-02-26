"use client";

import { useState, useEffect } from "react";

export default function LiveStatusDebug() {
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkLiveStatus() {
      try {
        const response = await fetch("/api/live-status");
        const data = await response.json();
        setIsLive(data.isLive);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    }

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 rounded-lg bg-gray-800 max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold mb-4 text-white">Live Status</h2>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-white">Status:</span>
          {loading ? (
            <span className="text-yellow-400">Loading...</span>
          ) : error ? (
            <span className="text-red-400">Error</span>
          ) : isLive ? (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
              <span className="text-green-400">Live</span>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
              <span className="text-gray-400">Offline</span>
            </div>
          )}
        </div>

        {error && <div className="text-red-400 text-sm">Error: {error}</div>}
      </div>
    </div>
  );
}
