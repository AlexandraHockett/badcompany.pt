import Contact from "@/components/Contact";
import CarrosselEventos from "@/components/Carrossel";
import Hero from "@/components/Hero";
import HomepageLiveSection from "@/components/HomepageLiveSection";
import LiveStatusDebug from "@/components/LiveStatusDebug";
import SpotifyPlaylist from "@/components/SpotifyPlaylist";

export default function Home() {
  const playlistId = "487jKTFqWhs6b0AEUz0WpX";

  return (
    <main className="text-white relative min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-zinc-400 to-zinc-700">
      <Hero />
      <HomepageLiveSection />
      <LiveStatusDebug />
      <CarrosselEventos />
      <SpotifyPlaylist playlistId={playlistId} />
      <Contact />
    </main>
  );
}
