import { ReactNode } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = {
  children: ReactNode;
  params: { slug?: string };
};

export default function MediaLayout({ children, params }: Props) {
  return (
    <BackgroundBeamsWithCollision className="relative min-h-screen flex flex-col">
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
      <div className="relative min-h-screen w-full overflow-x-hidden">
        {/* Conteúdo Principal */}
        <div className="max-w-full mx-auto px-4 pt-24 sm:pt-36 md:pt-40 relative z-20">
          <Breadcrumbs slug={params?.slug} basePath="sobre" baseName="Sobre" />
          <main className="flex-1 w-full">{children}</main>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
