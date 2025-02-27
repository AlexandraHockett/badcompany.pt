// Remova a importação do FloatingCart aqui
import { ReactNode } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Breadcrumbs from "@/components/Breadcrumbs";

type LojaLayoutProps = {
  children: ReactNode;
  params?: { slug?: string };
};

export default function LojaLayout({ children, params }: LojaLayoutProps) {
  return (
    <BackgroundBeamsWithCollision className="relative min-h-screen flex flex-col">
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <div className="max-w-full mx-auto px-4 pt-24 sm:pt-36 md:pt-40 relative z-20">
          {params && (
            <Breadcrumbs slug={params.slug} basePath="loja" baseName="Loja" />
          )}
          <main className="flex-1 w-full">{children}</main>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
