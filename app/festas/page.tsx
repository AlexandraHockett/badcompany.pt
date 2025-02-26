import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function FestasPage() {
  return (
    <section className="text-center py-12">
      {/* Breadcrumbs */}

      {/* Título da Página */}
      <h1 className="mb-8 text-5xl font-bold text-white">
        Descubra Nossas Festas
      </h1>

      {/* Cards de Navegação */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Card Festas Passadas */}
        <Link
          href="/festas/festas-passadas"
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
          <img
            src="/img/contact-1.webp" // Adicione uma imagem relevante
            alt="Festas Passadas"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white">
              Festas Passadas
            </h2>
          </div>
        </Link>

        {/* Card Festivais */}
        <Link
          href="/festas/festivais"
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
          <img
            src="/img/contact-2.webp" // Adicione uma imagem relevante
            alt="Festivais"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white">Festivais</h2>
          </div>
        </Link>

        {/* Card Eventos Privados */}
        <Link
          href="/festas/eventos-privados"
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
          <img
            src="/img/swordman.webp" // Adicione uma imagem relevante
            alt="Eventos Privados"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white">
              Eventos Privados
            </h2>
          </div>
        </Link>
      </div>
    </section>
  );
}
