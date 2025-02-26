"use client";

import { useLiveStatus } from "@/hooks/useLiveStatus";
import Link from "next/link";

export default function HomepageLiveSection() {
  const { isLive, loading } = useLiveStatus();

  if (loading || !isLive) return null;

  return (
    <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto my-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="animate-pulse h-3 w-3 rounded-full bg-white"></span>
            <h2 className="text-xl font-semibold tracking-wide">
              Estamos AO VIVO!
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/live"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            Vem ver a transmissão
          </Link>
        </div>
      </div>
    </section>
  );
}
