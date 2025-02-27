import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug?: string }>;
};

export default async function ContactosLayout({ children, params }: Props) {
  const resolvedParams = await params;

  return (
    <BackgroundBeamsWithCollision className="min-h-screen w-full">
      <div className="relative min-h-screen w-full">
        {/* Vídeo de fundo */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-50"
            playsInline
          >
            <source src="/videos/feature-1.mp4" type="video/mp4" />O teu browser
            não suporta vídeo.
          </video>
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-full mx-auto px-4 pt-24 sm:pt-36 md:pt-40 relative z-20">
          <Breadcrumbs
            slug={resolvedParams?.slug}
            basePath="contactos"
            baseName="Contactos"
          />
          <div className="relative min-h-[70vh] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
