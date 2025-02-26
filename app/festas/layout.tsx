import { ReactNode } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

type Props = {
  children: ReactNode;
  params: { slug?: string };
};

export default function FestasLayout({ children, params }: Props) {
  return (
    <BackgroundBeamsWithCollision className="relative min-h-screen flex flex-col">
      {/* Garante que todo o conteúdo tenha espaço suficiente */}
      <div className="flex flex-col w-full flex-1">
        <div className="container mx-auto px-4 py-12">
        <Breadcrumbs slug={params?.slug} basePath="festas" baseName="Festas" />

          {params?.slug && (
            <nav className="w-full md:w-64 mb-8">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/festas/festas-passadas"
                    className="text-white hover:text-purple-500"
                  >
                    Festas Passadas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/festas/festivais"
                    className="text-white hover:text-purple-500"
                  >
                    Festivais
                  </Link>
                </li>
                <li>
                  <Link
                    href="/festas/eventos-privados"
                    className="text-white hover:text-purple-500"
                  >
                    Eventos Privados
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
